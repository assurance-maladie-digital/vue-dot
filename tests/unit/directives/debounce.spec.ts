import debounce from 'vue-dot-src/directives/debounce';

jest.useFakeTimers();

describe('v-debounce', () => {
	it('renders correctly', () => {
		const input = document.createElement('input');

		// debounce.inserted(input, {
		// 	modifiers: 1000
		// });
	});

	it('renders correctly when the input element is in a div', () => {
		const div = document.createElement('div');
		const input = document.createElement('input');

		div.appendChild(input);

		// debounce.inserted(div as any, {
		// 	modifiers: 1000
		// });
	});

	it('updates when the value is modified', () => {
		const div = document.createElement('div');

		// debounce.inserted(div as any, {
		// 	modifiers: {
		// 		value: 1000,
		// 		oldValue: 200
		// 	}
		// });
	});
});
