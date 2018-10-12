import components from '@/components';
import directives from '@/directives';

// tslint:disable-next-line:no-var-requires
const installVuetify = require('./plugins/vuetify').default;

interface Options {
	ameli: boolean;
}

const VueDot = {
	install(Vue: any, options?: Options) {
		installVuetify(options);

		components(Vue);
		directives(Vue);
	}
};

if (typeof window !== 'undefined' && (window as any).Vue) {
	(window as any).Vue.use(VueDot);
}

export default VueDot;
