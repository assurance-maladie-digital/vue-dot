<template>
	<div>
		<VBtn
			v-bind="merged"
			:class="merged.classes"
			:style="merged.styles"
		>
			<slot />
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'DBtn',
		computed: {
			merged(): object {
				const attrs = this.$attrs;
				const theme = this.$theme.config.components.DBtn.default;

				const secondary = this.secondary ? this.$theme.config.components.DBtn.secondary : {};
				const tertiary = this.tertiary ? this.$theme.config.components.DBtn.tertiary : {};

				const merged = {...attrs, ...theme, ...secondary, ...tertiary};

				return merged;
			}
		},
		props: {
			secondary: {
				type: Boolean,
				default: false
			},
			tertiary: {
				type: Boolean,
				default: false
			}
		}
	});
</script>
