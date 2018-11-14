import Vue from 'vue';

const theme = {
	created(this: Vue) {
		this.$vuetify.theme = this.$theme.config.colors;
	}
};

export default theme;
