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

const generator = (tags: any, validate: boolean): string => {
	let style = ``;

	// CSS from tags in theme
	Object.keys(tags).map((currentTag: any) => {
		const isClass = currentTag.match(/^\.[a-z- ]+$/gm);

		if (!validate || (validate && allowedTags.includes(currentTag) || isClass)) {
			const classBody = tags[currentTag];

			let bodyLines = ``;

			Object.keys(classBody).map((cssPropName: any) => {
				bodyLines +=
					`${cssPropName}: ${classBody[cssPropName]};
		`;
			});

			const cssCSS = `
	${currentTag} {
		${bodyLines}
	}
`;
			style += cssCSS;
		}
	});

	return style;
};

const append = (tags: any, style: any, id: string) => {
	if (typeof document !== 'undefined') {
		const sheet = document.createElement('style');
		sheet.id = `vue-dot-theme-${id}`;
		sheet.innerHTML = style;
		document.body.appendChild(sheet);
	}
};

const styles = {
	mounted(this: Vue) {
		// only do it once
		if (typeof window !== 'undefined' && !window.VueDotInit) {
			window.VueDotInit = true;

			if (this.$theme && this.$theme.config.styles) {
				let tags = this.$theme.config.styles;
				append(tags, generator(tags, false), 'styles');

				if (this.$theme.config.typography) {
					tags = this.$theme.config.typography.styles;
					append(tags, generator(tags, true), 'typography');
				}
			}
		}
	}
};

export default styles;
