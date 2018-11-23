// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VInput
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
	<slot name="default" /></VInput>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XInput';

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
