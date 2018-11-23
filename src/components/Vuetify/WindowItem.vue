// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VWindowItem
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VWindowItem>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XWindowItem';

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
