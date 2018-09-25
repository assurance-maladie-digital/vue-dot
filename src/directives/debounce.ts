import Vue from 'vue';

import debounceFn from '@/functions/debounce';

const debounce = {
	inserted(el: any, binding: any) {
		if (binding.value !== binding.oldValue) { // change debounce only if interval has changed
			el.oninput = debounceFn(() => {
				el.dispatchEvent(new Event('change'));
			}, parseInt(binding.value, 10) || 500);
		}
	}
};

export default debounce;
