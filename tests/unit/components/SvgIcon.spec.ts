import { shallowMount, createLocalVue } from '@vue/test-utils';
import SvgIcon from '@/components/SvgIcon.vue';

import Vuetify from 'vuetify';
import VueDot from '@/index';
import { default as theme } from '../theme.json';

const localVue = createLocalVue();
localVue.use(Vuetify);

localVue.use(VueDot, {
	theme
});

describe('SvgIcon.vue', () => {
	const build = () => {
		const wrapper = shallowMount(SvgIcon, {
			localVue,
			propsData: {
				icon: 'home'
			}
		});

		return wrapper;
	};

	it('renders correctly', () => {
		const wrapper = build();

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('renders an icon from the theme correctly', () => {
		const wrapper = build();
		wrapper.setProps({
			icon: 'vuejs'
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
