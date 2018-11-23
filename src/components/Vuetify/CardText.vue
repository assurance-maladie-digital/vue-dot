// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VCardText
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VCardText>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XCardText';

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
