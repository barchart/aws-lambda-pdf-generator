const LambdaHelper = require('@barchart/common-node-js/aws/lambda/LambdaHelper');

const logConfiguration = require('./../../log4js.config');

module.exports = (() => {
	'use strict';

	const getLogger = LambdaHelper.getLogger;
	const executeAsync = LambdaHelper.processAsync;

	Object.assign(LambdaHelper, {
		async processAsync(description, event, processor) {
			const logger = this.getLogger();

			logger.info('Starting [', description, ']');

			const response = await executeAsync(description, event, processor);

			logger.info('Finished [', description, ']');

			return response;
		},

		getLogger() {
			return getLogger(logConfiguration.default);
		}
	});

	return LambdaHelper;
})();

