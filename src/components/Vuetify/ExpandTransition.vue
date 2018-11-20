// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VExpandTransition
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VExpandTransition>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XExpandTransition';

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
