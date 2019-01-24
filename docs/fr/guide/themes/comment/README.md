# Comment fonctionnent les thèmes

## Entrée

Le fichier d’entrée exporte la fonction d’installation, qui enregistre les composants, les directives et les mixins, mais lie également le thème à `this.$theme`.

<Code>
```ts
// index.ts
import components from '@/components';
import directives from '@/directives';
import mixins from '@/mixins';

import { VueConstructor } from 'vue';
import { VueDot as VueDotPlugin, VueDotUseOptions } from 'types';

const VueDot: VueDotPlugin = {
	install(Vue: VueConstructor, options?: VueDotUseOptions) {
		components(Vue);
		directives(Vue);
		mixins(Vue);

		const theme = options ? options.theme : undefined;

		Vue.prototype.$theme = theme;
	}
};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueDot);
}

export default VueDot;
```
</Code>

## Mixins

Les mixins sont utilisés pour exécuter du code lorsque l'application est chargée sur le navigateur ou lorsqu'un composant est appelé.

### theme.ts

La mixin `theme` lie les couleurs du thème à Vuetify, ainsi il génère les classes et gère la partie colors.

<Code>
```ts
// mixins/theme.ts
import Vue from 'vue';

const theme = {
	created(this: Vue) {
		if (this.$theme && this.$theme.config.colors) {
			this.$vuetify.theme = this.$theme.config.colors;
		}
	}
};

export default theme;
```
</Code>

### styles.ts

Le mixin `styles` génère et ajoute le bloc `<style>` à partir du CSS dans le thème.

<Code>
```ts
// mixins/styles.ts
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
	const sheet = document.createElement('style');
	sheet.id = `vue-dot-theme-${id}`;
	sheet.innerHTML = style;
	document.body.appendChild(sheet);
};

const styles = {
	created(this: Vue) {
		// only do it once
		if (!window.VueDotInit) {
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
```
</Code>
