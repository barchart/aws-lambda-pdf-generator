const chromium = require('chrome-aws-lambda');

const print = require('./../../common/print');

module.exports = (() => {
	'use strict';

	return {
		handler: print.handler(chromium)
	};
})();
