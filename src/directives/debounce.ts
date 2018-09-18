import Vue from 'vue';

import debounce from '@/functions/debounce';

Vue.directive('debounce', {
	inserted(el, binding) {
		if (binding.value !== binding.oldValue) { // change debounce only if interval has changed
			el.oninput = debounce(() => {
				el.dispatchEvent(new Event('change'));
			}, parseInt(binding.value, 10) || 500);
		}
	}
});
