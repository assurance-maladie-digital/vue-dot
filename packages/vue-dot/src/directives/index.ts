import debounce from './debounce';

import { VueConstructor } from 'vue';

const directives: any = {
	debounce
};

export default (Vue: VueConstructor) => {
	Object.keys(directives).forEach((name: string) => {
		Vue.directive(name, directives[name]);
	});
};
