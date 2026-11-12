const FailureType = require('@barchart/common-js/api/failures/FailureType');

module.exports = (() => {
	'use strict';

	/**
	 * A static container for print specific {@link FailureType} items.
	 *
	 * @public
	 */
	class PrinterFailureTypes {
		constructor() {

		}

		static get PRINT_FAILED_HTML_MISSING() {
			return printFailedHtmlMissing;
		}

		static get PRINT_FAILED_REQUEST_MALFORMED() {
			return printFailedRequestMalformed;
		}

		toString() {
			return '[PrinterFailureTypes]';
		}
	}

	const printFailedHtmlMissing = new FailureType('PRINT_FAILED_HTML_MISSING', 'Failed to print PDF, no HTML document provided.', false, 400);
	const printFailedRequestMalformed = new FailureType('PRINT_FAILED_REQUEST_MALFORMED', 'Failed to print PDF, the request body must be a JSON object.', false, 400);

	return PrinterFailureTypes;
})();
