require('source-map-support').install();

const LambdaHelper = require('@barchart/common-node-js/aws/lambda/LambdaHelper');

const logConfiguration = require('./../../log4js.config');

module.exports = (() => {
	'use strict';

	const getLogger = LambdaHelper.getLogger;
	const execute = LambdaHelper.process;

	Object.assign(LambdaHelper, {
		process(description, event, callback, processor) {
			return Promise.resolve()
				.then(() => {
					const logger = this.getLogger();

					logger.info('Starting processing [', description, ']');

					return execute(description, event, callback, processor)
						.then(() => {
							logger.info('Finished [', description, ']');
						});
				});
		},

		getLogger() {
			return getLogger(logConfiguration.default);
		}
	});

	return LambdaHelper;
})();

