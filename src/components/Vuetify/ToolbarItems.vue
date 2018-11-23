// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VToolbarItems
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VToolbarItems>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XToolbarItems';

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
