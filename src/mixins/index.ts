import theme from './theme';

import { VueConstructor } from 'vue';

const mixins: any = {
	theme
};

export default (Vue: VueConstructor) => {
	Object.keys(mixins).forEach((name: string) => {
		Vue.mixin(mixins[name]);
	});
};
