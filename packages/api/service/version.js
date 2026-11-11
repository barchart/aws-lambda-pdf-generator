const packageJson = require('./../package.json');

const LambdaHelper = require('./../common/aws/LambdaHelper');

module.exports.handler = (() => {
	'use strict';

	const handler = async (event, context) => {
		return LambdaHelper.processAsync('Read service metadata', event, async (parser, responder) => {
			return {
				service: {
					name: packageJson.name,
					description: packageJson.description,
					environment: process.env.NODE_ENV,
					version: packageJson.version
				}
			};
		});
	};

	return handler;
})();


