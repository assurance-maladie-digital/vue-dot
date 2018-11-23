// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VBreadcrumbsDivider
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VBreadcrumbsDivider>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XBreadcrumbsDivider';

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
