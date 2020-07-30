const fs = require('fs');

const LambdaHelper = require('./../../../common/LambdaHelper');

module.exports = (() => {
	'use strict';

	return {
		bind: (chromium) => (event, lambdaContext, callback) => {
			LambdaHelper.process('Print HTML page', event, callback, async (parser, responder) => {
				const logger = LambdaHelper.getLogger();

				const puppeteer = chromium.puppeteer;

				const body = JSON.parse(Buffer.from(parser.getBody(), 'base64').toString());

				const html = body.html || null;
				const settings = body.settings || null;

				if (html === null) {
					return responder.send('Failed to print pdf. Missing html layout', 400);
				}

				const context = { };

				context.browser = null;

				try {
					logger.debug('Launching headless chrome');

					context.browser = await puppeteer.launch({
						args: chromium.args,
						executablePath: await chromium.executablePath,
						ignoreHTTPSErrors: true
					});

					logger.info(`Launched headless chrome [ ${await context.browser.version()} ]`);

					const page = await context.browser.newPage();

					page.on('console', (error) => {
						for (let i = 0; i < error.args().length; ++i) {
							logger.info(`${i}: ${error.args()[i]}`);
						}
					});

					page.on('pageerror', (error) => {
						logger.error(error);
					});

					logger.debug('Printing html as pdf');

					await page.setContent(html, { waitUntil: 'networkidle0' });

					context.pdf = await page.pdf(settings || { });

					logger.info('Printed html to pdf');

					await page.close();

					context.success = true;
				} catch (error) {
					logger.error(error);

					context.success = false;
				} finally {
					if (context.browser !== null) {
						logger.debug('Closing browser');

						await context.browser.close();

						logger.info('Closed browser');
					}
				}

				if (context.success) {
					if (false) {
						fs.writeFile('./out.pdf', context.pdf);
					}

					responder.sendBinary(context.pdf, 'application/pdf');
				} else {
					responder.sendError('Failed to print pdf');
				}
			});
		}
	};
})();
