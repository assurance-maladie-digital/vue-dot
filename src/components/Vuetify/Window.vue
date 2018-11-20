// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VWindow
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VWindow>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XWindow';

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
