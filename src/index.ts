import components from '@/components';
import directives from '@/directives';

import { VueConstructor } from 'vue';
import { VueDot as VueDotPlugin, VueDotUseOptions } from 'types';

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor, options?: VueDotUseOptions) {
		components(Vue);
		directives(Vue);
	}
};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDot);
}

export default VueDot;
