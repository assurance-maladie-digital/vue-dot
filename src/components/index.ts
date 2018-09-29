import Vue from 'vue';

import SvgIcon from './SvgIcon.vue';
import LangBtn from './LangBtn.vue';
import DatePicker from './DatePicker.vue';

const components: any = {
	SvgIcon,
	LangBtn,
	DatePicker
};

Object.keys(components).forEach((name: string) => {
	Vue.component(name, components[name]);
});

export default components;
