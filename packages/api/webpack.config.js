const webpack = require('webpack'),
	slsw = require('serverless-webpack');

module.exports = {
	mode: 'production',
	entry: slsw.lib.entries,
	devtool: 'source-map',
	resolve: {
		mainFields: ['main', 'module'],
		extensions: ['.wasm', '.js', '.mjs', '.json'],
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/\/log4js\/lib\/appenders/, (data) => {
			delete data.dependencies[0].critical;

			return data;
		})
	],
	externals: [ '@sparticuz/chromium' ]
};
