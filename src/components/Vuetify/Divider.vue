<template>
	<div>
		<VDivider
			v-bind="$attrs"
		>
			<slot
				v-for="slot in Object.keys($slots)"
				:name="slot"
				:slot="slot"
			/>
		</VDivider>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'XDivider'
	});
</script>
