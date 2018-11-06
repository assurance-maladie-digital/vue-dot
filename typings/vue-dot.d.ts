declare module '@cnamts/vue-dot/src/directives/debounce' {
	const debounce: {
		inserted(el: HTMLInputElement, binding: any): void;
	};

	export default debounce;
}

declare module '@cnamts/vue-dot/src/index' {
	interface Options {
		ameli: boolean;
	}

	const VueDot: {
		install(Vue: any, options?: Options | undefined): void;
	};

	export default VueDot;
}

declare module '@cnamts/vue-dot/src/main' {
	import '@babel/polyfill';

}

declare module '@cnamts/vue-dot/src/shims-tsx' {
	import Vue, { VNode } from 'vue'; global {
		namespace JSX {
			// tslint:disable no-empty-interface
			interface Element extends VNode {}
			// tslint:disable no-empty-interface
			interface ElementClass extends Vue {}
			interface IntrinsicElements {
				[elem: string]: any;
			}
		}
	}
}

declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}

declare module 'languages';

declare module '@cnamts/vue-dot/src/helpers/ameliColors' {
	const ameliColors: {
		shades: {
			base: string;
			darken1: string;
			black: string;
			lighten1: string;
			lighten2: string;
			lighten3: string;
			lighten4: string;
			lighten5: string;
			white: string;
		};
		blue: {
			base: string;
			darken1: string;
			darken2: string;
			darken3: string;
			darken4: string;
			lighten1: string;
			lighten2: string;
			lighten3: string;
			lighten4: string;
		};
		blueGreen: {
			base: string;
			darken1: string;
			darken2: string;
			lighten1: string;
			lighten2: string;
			lighten3: string;
		};
		green: {
			base: string;
			darken1: string;
			darken2: string;
			lighten1: string;
			lighten2: string;
		};
		yellow: {
			base: string;
			darken1: string;
			darken2: string;
			lighten1: string;
			lighten2: string;
		};
		brown: {
			base: string;
			darken1: string;
			darken2: string;
			lighten1: string;
			lighten2: string;
		};
		red: {
			base: string;
			darken1: string;
			darken2: string;
			lighten1: string;
			lighten2: string;
		};
	};

	export default ameliColors;
}
