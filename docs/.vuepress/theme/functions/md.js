export default function md(input) {
	return input.replace(/__(.*?)__((_+|\W+|$))/g, '<strong>$1</strong>$2');
};
