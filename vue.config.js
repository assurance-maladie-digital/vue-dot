const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const webpackConfig = {
	css: {
		extract: true
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
				maxChunks:  process.env.NODE_ENV === 'production' ? 1 : 9999
			})
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
		if (process.env.NODE_ENV !== 'production') {
			config
				.plugin('html')
				.tap(args => {
					args[0].template = './playground/public/index.html';

					return args;
				});

			config.plugin('VuetifyLoaderPlugin');
		} else {
			config.optimization.delete('splitChunks');
			config.optimization.splitChunks(false);
		}
	}
};

// if (process.env.NODE_ENV === 'production') {
// 	webpackConfig.configureWebpack.plugins.push(new BundleAnalyzerPlugin());
// }

module.exports = webpackConfig;
