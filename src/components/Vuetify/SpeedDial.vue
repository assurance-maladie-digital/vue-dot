// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VSpeedDial
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>
	</VSpeedDial>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XSpeedDial';

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
