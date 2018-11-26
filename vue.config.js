const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	css: {
		extract: false
	},
	configureWebpack: {
		entry: process.env.NODE_ENV !== 'production' ? './playground/main.ts' : './src/index.ts',
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
		if (process.env.NODE_ENV !== 'production') {
			config
				.plugin('html')
				.tap(args => {
					args[0].template = './playground/public/index.html';

					return args;
			});
		}
	}
};
