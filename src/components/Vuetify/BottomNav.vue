<template>
	<VBottomNav
		v-bind="$attrs"
	>
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>
	</VBottomNav>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'XBottomNav'
	});
</script>
