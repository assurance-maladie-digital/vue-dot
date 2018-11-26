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
