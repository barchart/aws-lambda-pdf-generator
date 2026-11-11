const packageJson = require('./../package.json');

const LambdaHelper = require('./../common/aws/LambdaHelper');

module.exports.handler = (() => {
	'use strict';

	const handler = (event, context, callback) => {
		LambdaHelper.process('Read service metadata', event, callback, (parser, responder) => {
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


