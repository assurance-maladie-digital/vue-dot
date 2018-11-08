import Vue, { VueConstructor } from 'vue';

declare global {
	interface Window {
		Vue: VueConstructor;
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$theme: any;
	}
}
