// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VTimeline
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VTimeline>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XTimeline';

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
