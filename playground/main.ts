import '@babel/polyfill';
import Vue from 'vue';

import Playground from './Playground.vue';

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css';

import VueDot from '../src/';
import { default as theme } from './theme.json';

Vue.use(VueDot, {
	theme
});

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(Playground)
}).$mount('#app');
