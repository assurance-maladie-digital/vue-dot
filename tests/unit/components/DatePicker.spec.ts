import Vue from 'vue';
import { mount, createLocalVue } from '@vue/test-utils';
import DatePicker from 'vue-dot-src/components/DatePicker.vue';

import Vuetify from 'vuetify';
import VueDot from 'vue-dot-src/index';
import { default as theme } from '../theme.json';

const localVue = createLocalVue();
Vue.use(Vuetify);

localVue.use(VueDot, {
	theme
});

describe('DatePicker.vue', () => {
	const build = (locale: string) => {
		const wrapper = mount(DatePicker, {
			localVue,
			propsData: {
				locale
			}
		});

		const app = document.createElement('div');
		app.setAttribute('class', 'activator-icon-menu-picker-ref');
		document.body.append(app);

		return wrapper;
	};

	it('renders correctly', () => {
		// Test long locale
		const wrapper = build('pt-br');

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('cumputea a date', () => {
		const wrapper = build('fr');

		(wrapper.vm as any).date = '11-01-2001';
		expect((wrapper.vm as any).computedDateFormatted).toBe('01/11/2001');
	});

	it('handles a non-valid date', () => {
		const wrapper = build('fr');

		(wrapper.vm as any).date = 'not a valid date';
		wrapper.find('.v-text-field input').trigger('blur');
		wrapper.emitted('change');

		expect((wrapper.vm as any).date).toBe(null);
	});

	it('computes the date when the input is blurred', () => {
		const wrapper = build('fr-Fr');

		// Non valid date format
		(wrapper.vm as any).date = '11/01/2001';
		wrapper.find('.v-text-field input').trigger('blur');

		expect((wrapper.vm as any).date).toBe('2001-11-01');
	});

	it('handles a empty date', () => {
		const wrapper = build('fr');
		wrapper.setProps({
			locale: 'en'
		});

		(wrapper.vm as any).date = '';
		wrapper.find('.v-text-field input').trigger('blur');

		expect((wrapper.vm as any).date).toBe(null);
	});

	it('works with a mask', () => {
		const wrapper = build('fr');
		wrapper.setProps({
			mask: 'XX-XX-XXX'
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('works with a custom icon', () => {
		const wrapper = build('fr');
		wrapper.setProps({
			prependIcon: 'home'
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('works when the menu is activated', () => {
		const wrapper = build('fr');

		(wrapper.vm as any).menu = true;

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('works as a birthdate picker', () => {
		const wrapper = build('fr');

		expect((wrapper.vm as any).dateFormatted).toEqual('');

		wrapper.setProps({
			birthdate: true
		});

		(wrapper.vm as any).menu = true;
		(wrapper.vm as any).save();

		expect(wrapper.html()).toMatchSnapshot();
	});
});
