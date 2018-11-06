import { VueConstructor } from 'vue';

declare global {
	interface Window {
		Vue: VueConstructor;
	}
}
