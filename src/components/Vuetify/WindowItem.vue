// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VWindowItem
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VWindowItem>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XWindowItem';

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
