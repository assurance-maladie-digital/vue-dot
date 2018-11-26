// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VToolbarSideIcon
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VToolbarSideIcon>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XToolbarSideIcon';

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
