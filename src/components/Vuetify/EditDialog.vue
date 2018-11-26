// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VEditDialog
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-on="$listeners"
	>
		<slot name="default" />
		<slot
			v-for="slot in Object.keys($slots)"
			v-if="slot !== 'default'"
			:name="slot"
			:slot="slot"
		/>
	</VEditDialog>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XEditDialog';

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
