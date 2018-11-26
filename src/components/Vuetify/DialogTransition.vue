// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VDialogTransition
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VDialogTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XDialogTransition';

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
