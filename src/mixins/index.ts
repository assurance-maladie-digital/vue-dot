import theme from './theme';

import { VueConstructor } from 'vue';

interface Mixin {
	[key: string]: object;
}

const mixins: Mixin = {
	theme
};

export default (Vue: VueConstructor) => {
	Object.keys(mixins).forEach((name: string) => {
		Vue.mixin(mixins[name]);
	});
};
