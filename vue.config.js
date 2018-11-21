module.exports = {
	css: {
		extract: false
	},
	configureWebpack: {
		entry: './playground/main.ts',
		output: {
			libraryExport: 'default'
		}
	}
};
