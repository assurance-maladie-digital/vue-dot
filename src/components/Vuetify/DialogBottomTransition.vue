// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VDialogBottomTransition
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VDialogBottomTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XDialogBottomTransition';

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
