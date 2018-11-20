// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VBottomSheetTransition
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VBottomSheetTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XBottomSheetTransition';

	import merge from '@/mixins/merge';

	export default Vue.extend({
		name,
		data() {
			return {
				name
			};
		},
		mixins: [merge]
	});
</script>
