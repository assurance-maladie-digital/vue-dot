import { shallowMount, createLocalVue } from '@vue/test-utils';

import debounce from '@/directives/debounce';

const Component = {
	template:
`<input
	v-debounce="1000"

	placeholder="Type here"
	class="simple-input"
>`
};

import Vuetify from 'vuetify';
import VueDot from '@/index';
import { default as theme } from '../theme.json';

const localVue = createLocalVue();
localVue.use(Vuetify);

localVue.use(VueDot, {
	theme
});

localVue.directive('debounce', debounce as any);

describe('v-debounce', () => {
	const build = () => {
		const wrapper = shallowMount(Component, {
			localVue
		});

		return wrapper;
	};

	it('renders correctly', () => {
		const wrapper = build();

		expect(wrapper.html()).toMatchSnapshot();
	});
});
