import components from '@/components';
import directives from '@/directives';
import mixins from '@/mixins';

import { VueConstructor } from 'vue';
import { VueDot as VueDotPlugin, VueDotUseOptions } from 'types';

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor, options?: VueDotUseOptions) {
		components(Vue);
		directives(Vue);
		mixins(Vue);

		const theme = options ? options.theme : undefined;

		Vue.prototype.$theme = theme;
	}
};

// Ignore the next block in unit test
/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
	/* istanbul ignore next */
	window.Vue.use(VueDot);
}

export default VueDot;
