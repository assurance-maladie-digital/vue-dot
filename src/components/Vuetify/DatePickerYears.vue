// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VDatePickerYears
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VDatePickerYears>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XDatePickerYears';

	import merge from '@/mixins/merge';

	export default Vue.extend({
		name,
		mixins: [merge],
		data() {
			return {
				name
			};
		},
	});
</script>
