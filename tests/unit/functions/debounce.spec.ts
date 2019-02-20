// tell jest to mock all timeout functions
import debounce from 'vue-dot-src/functions/debounce';

jest.useFakeTimers();

describe('debounce', () => {
	let func: jest.Mock;
	let debouncedFunc: () => any;

	beforeEach(() => {
		func = jest.fn();
		debouncedFunc = debounce(func, 1000);
	});

	it('is executed just once', () => {
		for (let i = 0; i < 100; i++) {
			debouncedFunc();
		}

		// fast-forward time
		jest.runAllTimers();

		expect(func).toBeCalledTimes(1);
	});
});
