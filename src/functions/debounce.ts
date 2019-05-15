export default function debounce(callback: (args: IArguments) => void, time: number): () => void {
	let interval: NodeJS.Timeout | null;

	return () => {
		if (interval) {
			clearTimeout(interval);
		}

		// tslint:disable-next-line:only-arrow-functions
		interval = setTimeout(function() {
			interval = null;

			callback(arguments);
		}, time);
	};
}
