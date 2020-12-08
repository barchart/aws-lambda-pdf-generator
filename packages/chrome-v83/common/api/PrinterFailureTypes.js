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

		toString() {
			return '[PrinterFailureTypes]';
		}
	}

	const printFailedHtmlMissing = new FailureType('PRINT_FAILED_HTML_MISSING', 'Failed to print PDF, no HTML document provided.', false, 500);

	return PrinterFailureTypes;
})();
