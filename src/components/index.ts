import Vue from 'vue';

import SvgIcon from '@/components/SvgIcon.vue';

const Components: any = {
	SvgIcon
};

Object.keys(Components).forEach((name: string) => {
	Vue.component(name, Components[name]);
});

export default Components;
