// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VListTileActionText
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" /></VListTileActionText>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XListTileActionText';

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
