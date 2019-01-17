# How themes are working

## Entry

The entry file exports the install function, which register the components, directives and mixins, but also bind the theme to `this.$theme`.

<Code>
```ts
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

Mixins are used to execute code when the application is loaded on the browser or when a component is called.

### theme.ts

The `theme` mixin binds the colors of the theme to Vuetify, so it generates the classes and handle the colors part.

<Code>
```ts
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

The `styles` mixin generates and adds the `<style>` block from the CSS in the theme.

<Code>
```ts
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

### merge.ts

The `merge` mixin handles the computation of the properties defined in the theme and on the component.

<Code>
```ts
import Vue from 'vue';
import mergeFn from 'deepmerge';

interface VueMerge extends Vue {
	name: string;
}

const merge = {
	computed: {
		merged(this: VueMerge): object {
			// Don't do anything without $theme
			if (this.$theme && this.$theme.config.components) {
				const componentTheme = this.$theme.config.components[this.name] || {};

				// Load the 'default' theme (if any)
				let merged = componentTheme && componentTheme.default ?
				{...componentTheme.default, ...this.$attrs} : {...this.$attrs};

				if (componentTheme) {
					// Load per-prop theme
					Object.keys(componentTheme).map((prop: string) => {
						if (prop !== 'default') {
							let extend = {};

							// If the custom prop depends on another one
							if (prop in this.$attrs && componentTheme[prop].extends) {
								extend = componentTheme[componentTheme[prop].extends] || {};
							}

							const propTheme = prop in this.$attrs ? componentTheme[prop] : {};

							// Merge defaults, extended, prop and manually applied themes
							merged = mergeFn.all([merged, extend, propTheme, this.$attrs]);
						}
					});
				}

				return merged;
			}

			// By default return $attrs
			return {...this.$attrs};
		}
	}
};

export default merge;
```
</Code>

## Wrappers

The wrappers are generated using a data file and a script and handles `slots`, `scoped slots`, `events`, `v-model` and attributes binding.

### Example

For example, here's the `Autocomplete.vue` component, which uses all of the above listed features.

<Code>
```html
// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VAutocomplete
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-model="localValue"
		@input="$emit('input', $event)"
		v-on="$listeners"
	>
		<slot name="default" />
		<slot
			v-for="slot in Object.keys($slots)"
			v-if="slot !== 'default'"
			:name="slot"
			:slot="slot"
		/>
	
		<template
			v-for="slot in Object.keys($scopedSlots)"
			slot-scope="scope"
			:slot="slot"
		>
			<slot
				:name="slot"
				v-bind="scope"
			/>
		</template>
	</VAutocomplete>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XAutocomplete';

	import merge from '@/mixins/merge';

	export default Vue.extend({
		name,
		mixins: [merge],
		model: {
			prop: 'value',
			event: 'input'
		},
		props: {
			value: {
				type: [String, Boolean, Number],
				default: undefined
			}
		},
		data() {
			return {
				name,
				localValue: this.value
			};
		},
		watch: {
			value() {
				this.localValue = this.value;
				this.$emit('input', this.localValue);
			}
		}
	});
</script>
```
</Code>

### Generator

Wrappers are generated using a node.js script named `generator.ts`, called via the `yarn run vuetify-components` command.
