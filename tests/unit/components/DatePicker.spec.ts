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

	it('updates the date when blurred', () => {
		const wrapper = build();

		(wrapper.vm as any).date = '11-01-2001';

		expect((wrapper.vm as any).computedDateFormatted).toBe('01/11/2001');
	});
});
