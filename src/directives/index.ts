import Vue from 'vue';

import debounce from './debounce';

const directives: any = {
	debounce
};

Object.keys(directives).forEach((name: string) => {
	Vue.directive(name, directives[name]);
});

export default directives;
