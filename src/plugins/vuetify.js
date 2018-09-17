import Vue from 'vue';

import {
	Vuetify,
	VApp,
	VMenu,
	VBtn,
	VList,
	VTextField,
	VDatePicker,
	VIcon,
	transitions
} from 'vuetify';

import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
	components: {
		VApp,
		VMenu,
		VBtn,
		VList,
		VTextField,
		VDatePicker,
		VIcon,
		transitions
	}
});
