// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VMenuTransition
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VMenuTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XMenuTransition';

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
