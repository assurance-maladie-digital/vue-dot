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
