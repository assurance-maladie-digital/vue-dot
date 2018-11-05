import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';

import VueDot from './';

Vue.use(VueDot);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
