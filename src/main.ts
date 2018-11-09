import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css';

import VueDot from './';
Vue.use(VueDot);

import * as theme from './theme.json';
Vue.prototype.$theme = theme.default;

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
