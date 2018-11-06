import Vue, { Component, PluginFunction, PluginObject, VueConstructor, DirectiveFunction, DirectiveOptions } from 'vue';

declare const VueDot: VueDot;

export default VueDot;

export interface VueDot {
	install: PluginFunction<VueDotUseOptions>;
}

export interface VueDotUseOptions {
	ameli: boolean;
}

declare module '@cnamts/vue-dot/src/directives/debounce' {
	const debounce: {
		inserted(el: HTMLInputElement, binding: any): void;
	};

	export default debounce;
}

declare module '@cnamts/vue-dot/src/main' {
	import '@babel/polyfill';
}

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
