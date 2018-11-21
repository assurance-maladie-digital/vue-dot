import Vue, { VueConstructor } from 'vue';
import { VuetifyObject } from 'vuetify/types';

declare global {
	interface Window {
		Vue: VueConstructor;
		VueDotInit: boolean;
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$theme: any;
		$vuetify: VuetifyObject;
	}
}
