import '@babel/polyfill';
import Vue from 'vue';

import Playground from './Playground.vue';

import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css';

import VueDot from '../src/';
import { default as theme } from './theme.json';
// import { default as theme } from './theme-ameli-pro.json';

Vue.use(VueDot, {
	theme
});
// Vue.use(VueDot);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(Playground)
}).$mount('#app');
