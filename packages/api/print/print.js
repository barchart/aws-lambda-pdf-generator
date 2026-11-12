const fs = require('fs'),
	url = require('url');

const puppeteer = require('puppeteer-core');

const is = require('@barchart/common-js/lang/is');

const FailureReason = require('@barchart/common-js/api/failures/FailureReason'),
	PrinterFailureTypes = require('./../common/api/PrinterFailureTypes');

const LambdaResponseGeneratorGzip = require('@barchart/common-node-js/aws/lambda/responses/LambdaResponseGeneratorGzip'),
	LambdaResponseGeneratorS3 = require('@barchart/common-node-js/aws/lambda/responses/LambdaResponseGeneratorS3');

const LambdaHelper = require('./../common/aws/LambdaHelper');

module.exports.handler = (() => {
	'use strict';

	const handler = async (event, lambdaContext) => {
		return LambdaHelper.processAsync('Print HTML page', event, async (parser, responder) => {
			const logger = LambdaHelper.getLogger();

			responder.addResponseGenerators([
				new LambdaResponseGeneratorGzip(parser),
				new LambdaResponseGeneratorS3()
			]);

			const body = JSON.parse(Buffer.from(parser.getBody(), 'base64').toString());

			const source = body.source || null;
			const html = body.html || null;
			const settings = body.settings || null;

			if (html === null) {
				return Promise.reject(FailureReason.from(PrinterFailureTypes.PRINT_FAILED_HTML_MISSING));
			}

			const context = { };

			context.browser = null;
			context.version = null;

			try {
				logger.debug(`Launching headless chrome for [ ${source} ]`);

				const chromium = await getChromium();

				chromium.setGraphicsMode = false;

				context.browser = await puppeteer.launch({
					args: chromium.args,
					executablePath: await chromium.executablePath(),
					headless: 'shell',
					acceptInsecureCerts: true
				});

				context.version = await context.browser.version();

				logger.info(`Launched headless chrome [ ${context.version} ] for [ ${source} ]`);

				const page = await context.browser.newPage();

				page.on('console', (message) => {
					for (let i = 0; i < message.args().length; ++i) {
						logger.info(`[ ${i} ] Console: ${message.args()[i]}`);
					}
				});

				page.on('pageerror', (e) => {
					if (processPageError(e, logger)) {
						return;
					}

					logger.error(e);
				});

				logger.debug(`Printing HTML layout for [ ${source} ] [ ${html.length} ] as PDF`);

				await page.setContent(html, { waitUntil: 'networkidle0' });

				const { path, ...options } = settings || { };

				if (path) {
					logger.warn(`Ignoring [ path ] setting since writing the PDF to a custom location on disk is forbidden [ ${source} ]`);
				}

				context.pdf = Buffer.from(await page.pdf(options));

				logger.info(`Printed HTML layout for [ ${source} ] [ ${html.length} ] as PDF`);

				await page.close();
			} catch (e) {
				logger.error(e);

				throw e;
			} finally {
				if (context.browser !== null) {
					logger.debug(`Closing headless chrome [ ${context.version} ] for [ ${source} ]`);

					await context.browser.close();

					logger.info(`Closed headless chrome [ ${context.version} ] for [ ${source} ]`);
				}
			}

			if (false) {
				fs.writeFile('./out.pdf', context.pdf);
			}

			return responder
				.setHeader('Content-Type', 'application/pdf')
				.send(context.pdf);
		});
	};

	// The @sparticuz/chromium package is an ES module (only) and it is provided by
	// a Lambda Layer. The Lambda runtime does not allow `require` of an ES module and
	// an `import` ignores NODE_PATH (which is how Lambda exposes layer packages). So,
	// the packages the location is found with `require.resolve` and the module is loaded
	// with an `import` invocation.

	let chromiumPromise = null;

	const getChromium = () => {
		if (chromiumPromise === null) {
			const location = url.pathToFileURL(require.resolve('@sparticuz/chromium')).href;

			chromiumPromise = (async () => {
				let chromium;

				try {
					chromium = await import(location);
				} catch (e) {
					chromiumPromise = null;

					throw e;
				}

				return chromium.default;
			})();
		}

		return chromiumPromise;
	};

	const regex = { };

	regex.errors = null;

	const processPageError = (error, logger) => {
		if (regex.errors === null) {
			regex.errors = { };

			try {
				regex.errors.suppress = new RegExp(process.env.PAGE_ERRORS_SUPPRESSED_REGEX || '(?!)');
			} catch (e) {
				logger.error(`Failed to parse environment variable as regular expression for suppressing page errors [ ${process.env.PAGE_ERRORS_SUPPRESSED_REGEX} ]`);

				regex.errors.suppress = null;
			}

			try {
				regex.errors.warn = new RegExp(process.env.PAGE_ERRORS_LOGGED_AT_WARN_LEVEL_REGEX || '(?!)');
			} catch (e) {
				logger.error(`Failed to parse environment variable as regular expression for treating page errors as warnings [ ${process.env.PAGE_ERRORS_LOGGED_AT_WARN_LEVEL_REGEX} ]`);

				regex.errors.warn = null;
			}
		}

		if (error && is.string(error.message)) {
			if (regex.errors.suppress && regex.errors.suppress.test(error.message)) {
				return true;
			}

			if (regex.errors.warn && regex.errors.warn.test(error.message)) {
				logger.warn(error);

				return true;
			}
		}

		return false;
	};

	return handler;
})();
