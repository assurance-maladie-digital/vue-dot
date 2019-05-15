import { DirectiveOptions } from 'vue';
import debounceFn from '../functions/debounce';

const debounce: DirectiveOptions = {
	inserted(el, binding) {
		if (el.tagName !== 'INPUT') {
			const input = el.querySelector('input');

			if (input) {
				el = input;
			}
		}

		const modifiers = Object.keys(binding.modifiers);
		const value: string = modifiers.length > 0 ? modifiers[0] : binding.value;

		if (value !== binding.oldValue) { // Change debounce only if interval has changed
			/* istanbul ignore next */
			el.oninput = debounceFn(() => {
				if (typeof binding.value === 'function') {
					const inputValue = (el as HTMLInputElement).value;

					binding.value(inputValue);
				} else {
					el.dispatchEvent(new Event('change'));
				}
			}, parseInt(value, 10) || 500);
		}
	}
};

export default debounce;
