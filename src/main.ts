import '@babel/polyfill';
import Vue from 'vue';
import '@/components';
import '@/directives';
import './plugins/vuetify';
import App from './App.vue';

import VueDot from './';

Vue.use(VueDot, {
	ameli: true
});

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
