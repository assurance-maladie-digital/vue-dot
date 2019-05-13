import debounce from './debounce';

import { VueConstructor } from 'vue';

interface Directives {
	[key: string]: object;
}

const directives: Directives = {
	debounce
};

export default (Vue: VueConstructor) => {
	Object.keys(directives).forEach((name: string) => {
		Vue.directive(name, directives[name]);
	});
};
