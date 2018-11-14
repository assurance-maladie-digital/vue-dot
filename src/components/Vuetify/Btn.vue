<template>
	<VBtn
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		@click="$emit('click', $event)"
	>
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>
	</VBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XBtn';

	import merge from 'deepmerge';

	import propsGenerator from '@/generators/props';
	const propsObj = propsGenerator(name);

	export default Vue.extend({
		name,
		computed: {
			merged(this: any): object {
				const componentTheme = this.$theme.config.components[name];

				// Load the 'default' theme & other attributes
				let merged = {...componentTheme.default, ...this.$attrs};

				// Load per-prop theme
				Object.keys(componentTheme).map((prop: any) => {
					if (prop !== 'default') {
						let extend = {};

						// If the custom prop depends on another one
						if (this[prop] && componentTheme[prop].extends) {
							extend = componentTheme[componentTheme[prop].extends];
						}

						const propTheme = this[prop] ? componentTheme[prop] : {};
						merged = merge.all([merged, extend, propTheme]);
					}
				});

				return merged;
			}
		},
		props: {
			...propsObj
		}
	});
</script>
