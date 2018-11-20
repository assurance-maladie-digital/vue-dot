// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VTextField
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		@change="$emit('change', $event)"
		v-model="localValue"
	>
		<slot name="default" /></VTextField>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XTextField';

	import merge from '@/mixins/merge';

	export default Vue.extend({
		name,
		data() {
			return {
				name,
				localValue: this.value
			};
		},
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
		}
	});
</script>
