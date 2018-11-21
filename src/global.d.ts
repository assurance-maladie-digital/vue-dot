import Vue, { VueConstructor } from 'vue';

declare global {
	interface Window {
		Vue: VueConstructor;
		VueDotInit: boolean;
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$theme: any;
		$vuetify: any;
	}
}
