import SvgIcon from './SvgIcon.vue';
import LangBtn from './LangBtn.vue';
import DatePicker from './DatePicker.vue';

const components: any = {
	SvgIcon,
	LangBtn,
	DatePicker
};

export default (Vue: any) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
