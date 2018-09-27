import debounceFn from '@/functions/debounce';

const debounce = {
	inserted(el: any, binding: any) {
		if (el.tagName !== 'INPUT') {
			el = el.querySelector('input');
		}

		const modifiers = Object.keys(binding.modifiers);
		const value = modifiers.length > 0 ? modifiers[0] : binding.value;

		if (value !== binding.oldValue) { // change debounce only if interval has changed
			el.oninput = debounceFn(() => {
				if (typeof binding.value === 'function') {
					binding.value(el.value);
				} else {
					el.dispatchEvent(new Event('change'));
				}
			}, parseInt(value, 10) || 500);
		}
	}
};

export default debounce;
