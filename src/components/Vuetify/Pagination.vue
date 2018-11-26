// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VPagination
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-model="localValue"
		@input="$emit('input', $event)"
		v-on="$listeners"
	>
	<slot name="default" /></VPagination>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XPagination';

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
