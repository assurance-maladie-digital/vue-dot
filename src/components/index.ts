import SvgIcon from './SvgIcon.vue';
import LangBtn from './LangBtn.vue';
import DatePicker from './DatePicker.vue';

import { VueConstructor } from 'vue';

const components: any = {
	SvgIcon,
	LangBtn,
	DatePicker
};

export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
