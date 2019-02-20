import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import SvgIcon from 'vue-dot-src/components/SvgIcon.vue';

import Vuetify from 'vuetify';
import VueDot from 'vue-dot-src/index';

const localVue = createLocalVue();
Vue.use(Vuetify);

localVue.use(VueDot);

describe('SvgIcon.vue without theme', () => {
	const build = () => {
		const wrapper = shallowMount(SvgIcon, {
			localVue,
			propsData: {
				icon: 'false'
			}
		});

		return wrapper;
	};

	it('renders correctly', () => {
		const wrapper = build();

		expect((wrapper.vm as any).themeIcons).toEqual({});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
