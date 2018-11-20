// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VScrollXTransition
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VScrollXTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XScrollXTransition';

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
