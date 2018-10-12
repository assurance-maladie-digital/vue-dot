import Vue from 'vue';

import ameliColors from '@/helpers/ameliColors';

import {
	Vuetify,
	VApp,
	VMenu,
	VBtn,
	VList,
	VTextField,
	VDatePicker,
	VIcon,
	VDivider,
	transitions
} from 'vuetify';

import 'vuetify/src/stylus/app.styl';

function installVuetify(options) {
	const theme = {
		ameli: options && options.ameli ? ameliColors : null
	};

	const VuetifyOptions = {
		components: {
			VApp,
			VMenu,
			VBtn,
			VList,
			VTextField,
			VDatePicker,
			VIcon,
			VDivider,
			transitions
		}
	};

	if (options && options.ameli) {
		VuetifyOptions.theme = theme;
	}

	Vue.use(Vuetify, VuetifyOptions);
}

export default installVuetify;
