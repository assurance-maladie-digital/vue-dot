import DSvgIcon from './DSvgIcon.vue';
import DLangBtn from './DLangBtn.vue';
import DDatePicker from './DDatePicker.vue';

import DBtn from './Vuetify/DBtn.vue';

import { VueConstructor } from 'vue';

const components: any = {
	DSvgIcon,
	DLangBtn,
	DDatePicker,
	DBtn
};

export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
