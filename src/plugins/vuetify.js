import Vue from 'vue';

import {
	Vuetify,
	VApp,
	transitions
} from 'vuetify';

import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
	components: {
		VApp,
		transitions
	},
	theme: {
		primary: '#d1221a',
		secondary: '#424242',
		accent: '#82b1ff',
		error: '#ff5252',
		info: '#2196f3',
		success: '#4caf50',
		warning: '#ffc107'
	}
});
