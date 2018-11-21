const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	css: {
		extract: false
	},
	configureWebpack: {
		entry: './playground/main.ts',
		output: {
			libraryExport: 'default'
		},
		optimization: {
			minimize: true,
			minimizer: [new UglifyJsPlugin({
				include: /\.min\.js$/
			})]
		},
		plugins: [
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 1
			})
		]
	},
	chainWebpack: config => {
		config.optimization.delete('splitChunks');
		config.optimization.splitChunks(false);
	}
};
