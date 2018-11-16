import XSvgIcon from './SvgIcon.vue';
import XLangBtn from './LangBtn.vue';
import XDatePicker from './DatePicker.vue';

import XBtn from './Vuetify/Btn.vue';
import XBreadcrumbs from './Vuetify/Breadcrumbs.vue';
import XDivider from './Vuetify/Divider.vue';
import XExpansionPanel from './Vuetify/ExpansionPanel.vue';
import XSwitch from './Vuetify/Switch.vue';

import { VueConstructor } from 'vue';

const components: any = {
	XSvgIcon,
	XLangBtn,
	XDatePicker,
	XBtn,
	XBreadcrumbs,
	XDivider,
	XExpansionPanel,
	XSwitch
};

export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
