// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VResponsive
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VResponsive>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XResponsive';

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
