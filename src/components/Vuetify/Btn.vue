<template>
	<VBtn
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
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

	export default Vue.extend({
		name: 'XBtn',
		computed: {
			merged(): object {
				const attrs = this.$attrs;
				const theme = this.$theme.config.components.XBtn.default;

				const secondary = this.secondary ? this.$theme.config.components.XBtn.secondary : {};
				const tertiary = this.tertiary ? this.$theme.config.components.XBtn.tertiary : {};

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
