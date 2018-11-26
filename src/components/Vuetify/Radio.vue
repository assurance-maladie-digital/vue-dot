// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VRadio
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-model="localValue"
		@change="$emit('change', $event)"
		v-on="$listeners"
	>
	<slot name="default" /></VRadio>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XRadio';

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
