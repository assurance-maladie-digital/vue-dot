import Vue from 'vue';

import SvgIcon from './SvgIcon.vue';
import LangBtn from './LangBtn.vue';
import BirthDatePicker from './BirthDatePicker.vue';

const components: any = {
	SvgIcon,
	LangBtn,
	BirthDatePicker
};

Object.keys(components).forEach((name: string) => {
	Vue.component(name, components[name]);
});

export default components;
