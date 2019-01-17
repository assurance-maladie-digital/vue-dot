import Vuetify from 'vuetify';
import i18n from './i18n';
import { default as theme } from './theme.json';

import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData // site metadata
}) => {
	Vue.use(Vuetify);

	if (typeof document !== 'undefined') {
		const VueDot = require('@cnamts/vue-dot');

		Vue.use(VueDot, {
			theme
		});
	}

	options.i18n = i18n;
};
