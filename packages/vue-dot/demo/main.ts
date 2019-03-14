import '@babel/polyfill';
import Vue from 'vue';

Vue.config.productionTip = false;

import './plugins/vuetify';
import './plugins/vue-dot';

import Demo from './Demo.vue';

new Vue({
	render: (h) => h(Demo)
}).$mount('#app');
