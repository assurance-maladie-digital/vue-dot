import typography from './typography';

import { VueConstructor } from 'vue';

const mixins: any = {
	typography
};

export default (Vue: VueConstructor) => {
	Object.keys(mixins).forEach((name: string) => {
		Vue.mixin(mixins[name]);
	});
};
