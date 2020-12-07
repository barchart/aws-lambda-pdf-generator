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

		static get PRINT_FAILED_NO_HTML_LAYOUT() {
			return printFailedNoHtmlLayout;
		}

		toString() {
			return '[PrinterFailureTypes]';
		}
	}

	const printFailedNoHtmlLayout = new FailureType('PRINT_FAILED_NO_HTML_LAYOUT', 'Failed to print PDF, missing html layout.', true, 400);

	return PrinterFailureTypes;
})();
