// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VCardTitle
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VCardTitle>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XCardTitle';

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
