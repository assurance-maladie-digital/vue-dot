<template>
	<div>
		<VExpansionPanel
			v-bind="$attrs"
		>
			<slot
				v-for="slot in Object.keys($slots)"
				:name="slot"
				:slot="slot"
			/>
		</VExpansionPanel>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'XExpansionPanel'
	});
</script>
