import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';
import LangBtn from 'vue-dot-src/components/LangBtn.vue';

import Vuetify from 'vuetify';
import VueDot from 'vue-dot-src/index';
import { default as theme } from '../theme.json';

const localVue = createLocalVue();
Vue.use(Vuetify);

localVue.use(VueDot, {
	theme
});

describe('LangBtn.vue', () => {
	const build = () => {
		document.body.setAttribute('data-app', 'true');

		const wrapper = mount(LangBtn, {
			localVue,
			propsData: {
				value: ''
			}
		});

		return wrapper;
	};

	it('renders correctly', () => {
		const wrapper = build();

		expect((wrapper.vm as any).currentLangUsed).toBe('fr');

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('renders available languages', () => {
		const wrapper = build();
		wrapper.setProps({
			availableLanguages: [
				'fr',
				'en'
			]
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('updates the language when clicked', () => {
		const wrapper = build();

		const btn = wrapper.find('.trigger-btn');
		btn.trigger('click');

		expect((wrapper.vm as any).currentLangUsed).toBe('aa');
	});
});
