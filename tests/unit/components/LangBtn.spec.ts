import { shallowMount, createLocalVue } from '@vue/test-utils';
import LangBtn from '@/components/LangBtn.vue';

import Vuetify from 'vuetify';
import VueDot from '@/index';
import { default as theme } from '../theme.json';

const localVue = createLocalVue();
localVue.use(Vuetify);

localVue.use(VueDot, {
	theme
});

describe('LangBtn.vue', () => {
	const build = () => {
		const wrapper = shallowMount(LangBtn, {
			localVue,
			propsData: {
				availableLaguages: [
					'fr',
					'en'
				]
			}
		});

		return wrapper;
	};

	it('renders correctly', () => {
		const wrapper = build();

		expect(wrapper.html()).toMatchSnapshot();
	});
});
