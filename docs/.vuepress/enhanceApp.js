import 'babel-polyfill';
import Vuetify from 'vuetify';
import VueDot from '@cnamts/vue-dot';
import SSRMixin from './mixins/ssr';
import { default as theme } from './theme.json';

import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

import './theme.css';
import './vuetify.css';

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData // site metadata
}) => {
	Vue.use(Vuetify, {
		options: {
			minifyTheme: (css) => {
				return process.env.NODE_ENV === 'production'
				? css.replace(/[\s|\r\n|\r|\n]/g, '')
				: css
			}
		}
	});

	Vue.use(VueDot, {
		theme
	});

	Vue.mixin(SSRMixin);
};
