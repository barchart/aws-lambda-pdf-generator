const fs = require('fs');

const chromium = require('chrome-aws-lambda');

const FailureReason = require('@barchart/common-js/api/failures/FailureReason'),
	PrinterFailureTypes = require('./../common/api/PrinterFailureTypes');

const LambdaResponseGeneratorGzip = require('@barchart/common-node-js/aws/lambda/responses/LambdaResponseGeneratorGzip'),
	LambdaResponseGeneratorS3 = require('@barchart/common-node-js/aws/lambda/responses/LambdaResponseGeneratorS3');

const LambdaHelper = require('./../common/aws/LambdaHelper');

module.exports = (() => {
	'use strict';

	return {
		handler: (event, lambdaContext, callback) => {
			LambdaHelper.process('Print HTML page', event, callback, async (parser, responder) => {
				const logger = LambdaHelper.getLogger();

				responder.addResponseGenerators([
					new LambdaResponseGeneratorGzip(parser),
					new LambdaResponseGeneratorS3()
				]);

				const puppeteer = chromium.puppeteer;

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

					context.browser = await puppeteer.launch({
						args: chromium.args,
						executablePath: await chromium.executablePath,
						ignoreHTTPSErrors: true
					});

					context.version = await context.browser.version();

					logger.info(`Launched headless chrome [ ${context.version} ] for [ ${source} ]`);

					const page = await context.browser.newPage();

					page.on('console', (message) => {
						for (let i = 0; i < message.args().length; ++i) {
							logger.info(`[ ${i} ] Console: ${message.args()[i]}`);
						}
					});

					page.on('pageerror', (error) => {
						logger.error(error);
					});

					logger.debug(`Printing HTML layout for [ ${source} ] [ ${html.length} ] as PDF`);

					await page.setContent(html, { waitUntil: 'networkidle0' });

					context.pdf = await page.pdf(settings || { });

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
		}
	};
})();
