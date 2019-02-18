export default function debounce(callback: (args: any) => void, time: number): () => void {
	let interval: any;
	return () => {
		clearTimeout(interval);
		// tslint:disable-next-line:only-arrow-functions
		interval = setTimeout(function() {
			interval = null;

			callback(arguments);
		}, time);
	};
}
