// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VScrollXTransition
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VScrollXTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XScrollXTransition';

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
