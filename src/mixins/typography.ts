import Vue from 'vue';

const allowedTags = [
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'p',
	'span',
	'i',
	'b',
	'a',
	'abbr',
	'small',
	'mark',
	'blockquote',
	'time',
	'sup',
	'sub',
	'strong',
	'code',
	'bdb',
	'pre',
	'q',
	'ins',
	'del',
	'cite'
];

const typography = {
	created(this: Vue) {
		// only do it once
		if (!window.VueDotInit) {
			window.VueDotInit = true;

			const tags = this.$theme.config.typography.tags;
			let style = ``;

			// CSS from tags in theme
			Object.keys(tags).map((currentTag: any) => {
				if (allowedTags.includes(currentTag)) {
					const classBody = tags[currentTag];

					let bodyLines = ``;

					Object.keys(classBody).map((cssPropName: any) => {
						bodyLines += `${cssPropName}: ${classBody[cssPropName]};`;
					});

					const cssCSS = `
	${currentTag} {
	${bodyLines}
	}
`;
					style += cssCSS;
				}
			});

			const sheet = document.createElement('style');
			sheet.id = 'vue-dot-theme-typography';
			sheet.innerHTML = style;
			document.body.appendChild(sheet);
		}
	}
};

export default typography;
