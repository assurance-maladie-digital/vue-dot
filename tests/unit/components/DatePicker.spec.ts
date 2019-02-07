import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import DatePicker from '@/components/DatePicker.vue';

import Vuetify from 'vuetify';
import VueDot from '@/index';
import { default as theme } from '../theme.json';

const localVue = createLocalVue();
Vue.use(Vuetify);

localVue.use(VueDot, {
	theme
});

describe('DatePicker.vue', () => {
	const build = () => {
		const wrapper = shallowMount(DatePicker, {
			localVue,
			propsData: {
				max: '2019-02-06'
			}
		});

		return wrapper;
	};

	it('renders correctly', () => {
		const wrapper = build();

		expect(wrapper.html()).toMatchSnapshot();
	});
});
