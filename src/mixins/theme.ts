import Vue from 'vue';

const theme = {
	created(this: Vue) {
		if (this.$theme.config.colors) {
			this.$vuetify.theme = this.$theme.config.colors;
		}
	}
};

export default theme;
