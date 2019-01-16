import DatePicker from './DatePicker.vue';
import LangBtn from './LangBtn.vue';
import SvgIcon from './SvgIcon.vue';

import { VueConstructor } from 'vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {
	DatePicker,
	LangBtn,
	SvgIcon
};

export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
