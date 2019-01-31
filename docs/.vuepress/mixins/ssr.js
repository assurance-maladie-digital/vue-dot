import translations from '../translations';
import en from '../translations/en';
import fr from '../translations/fr';

export default {
	data() {
		return {
			en,
			fr,
			currentLang: 'en',
			isClient: false
		};
	},
	mounted() {
		this.isClient = true;
	},
	methods: {
		// Find in object by passing a string
		deepFind(obj, str) {
			// Convert indexes to properties
			str = str.replace(/\[(\w+)\]/g, '.$1');
			// strip a leading dot
			str = str.replace(/^\./, '');

			const arr = str.split('.');

			for (let i = 0, n = arr.length; i < n; ++i) {
				const index = arr[i];

				if (index in obj) {
					obj = obj[index];
				} else {
					return;
				}
			}

			return obj;
		},
		t(str) {
			// Return translation
			return this.deepFind(this[this.currentLang], str);
		}
	}
};
