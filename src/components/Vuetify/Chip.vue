<template>
	<VChip
		v-bind="$attrs"
	>
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>
	</VChip>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'XChip'
	});
</script>
