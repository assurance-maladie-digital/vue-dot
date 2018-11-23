// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VCarousel
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-model="localValue"
		@change="$emit('change', $event)"
		v-on="$listeners"
	>
		<slot name="default" />
		<slot
			v-for="slot in Object.keys($slots)"
			v-if="slot !== 'default'"
			:name="slot"
			:slot="slot"
		/>
	</VCarousel>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XCarousel';

	import merge from '@/mixins/merge';

	export default Vue.extend({
		name,
		mixins: [merge],
		model: {
			prop: 'value',
			event: 'change'
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
				this.$emit('change', this.localValue);
			}
		}
	});
</script>
