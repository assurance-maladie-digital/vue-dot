export default function debounce(callback: any, time: any) {
	let interval: any;
	return () => {
		clearTimeout(interval);
		interval = setTimeout(() => {
			interval = null;

			callback(arguments);
		}, time);
	};
}
