const appenders = require('@barchart/log4js-node-appenders');

const getPattern = colored => colored ? '%[%c - %m% %]' : '%c - %m%';

module.exports = {
	default: {
		categories: {
			default: { appenders: ['lambda'], level: 'info' },
			'LambdaHelper/Event': { appenders: [ 'lambda' ], level: 'debug' }
		},
		appenders: {
			lambda: {
				type: appenders.lambda,
				layout: {
					type: 'pattern',
					pattern: getPattern(process.env.IS_LOCAL)
				}
			}
		}
	},
};
