import components from '@/components';
import directives from '@/directives';

import { VueConstructor } from 'vue';
import { VueDot as VueDotPlugin, VueDotUseOptions } from 'types';

// tslint:disable-next-line:no-var-requires
const installVuetify = require('./plugins/vuetify').default;

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor, options?: VueDotUseOptions) {
		installVuetify(options);

		components(Vue);
		directives(Vue);
	}
};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDot);
}

export default VueDot;
