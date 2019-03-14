import Vue, { PluginFunction } from 'vue';

declare const VueDot: VueDot;

export default VueDot;

export interface VueDot {
	install: PluginFunction<VueDotUseOptions>;
}

export interface VueDotUseOptions {
	theme: object;
}

declare module '@cnamts/vue-dot';
