import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import DataList from 'vue-dot-src/components/DataList.vue';

import Vuetify from 'vuetify';

const testData = [
	{
		key: 'Civility',
		value: 'Mr'
	},
	{
		key: 'Name',
		value: 'Dupont'
	},
	{
		key: 'First name',
		value: 'Paul'
	},
	{
		key: 'Birth date',
		value: '09/24/1970'
	},
	{
		key: 'Nationality',
		value: 'French'
	},
	{
		key: 'Native country',
		value: 'France'
	},
	{
		key: 'Date of registration',
		value: ''
	}
];

const localVue = createLocalVue();
Vue.use(Vuetify);

describe('DataList.vue', () => {
	const build = () => {
		const wrapper = shallowMount(DataList, {
			localVue,
			propsData: {
				list: testData,
				listTitle: 'Informations'
			}
		});

		return wrapper;
	};

	it('renders correctly', () => {
		const wrapper = build();

		expect(wrapper.html()).toMatchSnapshot();
	});
});
