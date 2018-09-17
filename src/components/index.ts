import Vue from 'vue';

import SvgIcon from './SvgIcon.vue';
import LangBtn from './LangBtn.vue';
import BirthDatePicker from './BirthDatePicker.vue';

const Components: any = {
	SvgIcon,
	LangBtn,
	BirthDatePicker
};

Object.keys(Components).forEach((name: string) => {
	Vue.component(name, Components[name]);
});

export default Components;
