import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';

import VueDot from './';

import * as theme from './theme.json';

Vue.use(VueDot);

Vue.prototype.$theme = theme.default;

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
