// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VTabTransition
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VTabTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XTabTransition';

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
