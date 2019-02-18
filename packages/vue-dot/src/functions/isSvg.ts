const htmlCommentRegex = /<!--([\s\S]*?)-->/g;

/* istanbul ignore next */
function isBinary(buf: any) {
	const isBuf = Buffer.isBuffer(buf);

	for (let i = 0; i < 24; i++) {
		const charCode = isBuf ? buf[i] : buf.charCodeAt(i);

		if (charCode === 65533 || charCode <= 8) {
			return true;
		}
	}

	return false;
}

// tslint:disable-next-line:max-line-length
const regex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;

function isSvg(input: any) {
	return Boolean(input) &&
		!isBinary(input) && regex.test(input.toString().replace(htmlCommentRegex, ''));
}

export default isSvg;
