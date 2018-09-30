export default function debounce(callback: (args: any) => void, time: number): () => void {
	let interval: any;
	return () => {
		clearTimeout(interval);
		interval = setTimeout(() => {
			interval = null;

			callback(arguments);
		}, time);
	};
}
