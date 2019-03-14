const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

let webpackConfig = {};

if (process.env.DEMO === 'true') {
	// Configuaration for demo
	webpackConfig = {
		configureWebpack: {
			plugins: [
				new VuetifyLoaderPlugin()
			]
		},
		chainWebpack: config => {
			// Modify the default HTML template location
			config
				.plugin('html')
				.tap(args => {
					args[0].template = './demo/public/index.html';

					return args;
				});
		}
	};
} else {
	// Configuration for library
	webpackConfig = {
		css: {
			// Extract CSS in dedicated file
			extract: true
		},
		configureWebpack: {
			output: {
				libraryExport: 'default'
			},
			plugins: [
				// Don't split chunks
				new webpack.optimize.LimitChunkCountPlugin({
					maxChunks: 1
				}),
				new BundleAnalyzerPlugin()
			],
			// see https://github.com/vuetifyjs/vuetify/issues/4068#issuecomment-394890573
			externals: process.env.NODE_ENV === 'production' ?
				[
					{
						'vue': {
							commonjs: 'vue',
							commonjs2: 'vue',
							amd: 'vue',
							root: 'Vue'
						},
						'vuetify/lib': {
							commonjs: 'vuetify/lib',
							commonjs2: 'vuetify/lib',
							amd: 'vuetify/lib',
							root: 'Vuetify'
						}
					}
					// /dayjs/,
					// /^languages/
				]
				: []
		},
		chainWebpack: config => {
			config.optimization.delete('splitChunks');
			config.optimization.splitChunks(false);
		}
	};
}

module.exports = webpackConfig;
