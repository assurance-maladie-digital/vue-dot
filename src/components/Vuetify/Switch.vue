<template>
	<VSwitch
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		@change="$emit('change', $event)"
		v-model="localValue"
	>
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>
	</VSwitch>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XSwitch';

	import merge from 'deepmerge';

	export default Vue.extend({
		name,
		data() {
			return {
				localValue: this.value
			};
		},
		computed: {
			merged(this: any): object {
				const componentTheme = this.$theme.config.components[name];

				// Load the 'default' theme & other attributes
				let merged = componentTheme ? {...componentTheme.default, ...this.$attrs} : {...this.$attrs};

				if (componentTheme) {
					// Load per-prop theme
					Object.keys(componentTheme).map((prop: any) => {
						if (prop !== 'default') {
							let extend = {};

							// If the custom prop depends on another one
							if (this[prop] && componentTheme[prop].extends) {
								extend = componentTheme[componentTheme[prop].extends];
							}

							const propTheme = prop in this.$attrs ? componentTheme[prop] : {};
							merged = merge.all([merged, extend, propTheme]);
						}
					});
				}

				return merged;
			}
		},
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			value: {
				type: Boolean,
				default: undefined
			}
		}
	});
</script>
