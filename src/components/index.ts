import Vue from 'vue';

import SvgIcon from './SvgIcon.vue';
import LangBtn from './LangBtn.vue';

const Components: any = {
	SvgIcon,
	LangBtn
};

Object.keys(Components).forEach((name: string) => {
	Vue.component(name, Components[name]);
});

export default Components;
