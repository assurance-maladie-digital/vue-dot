<template>
	<div>
		<VFooter
			v-bind="$attrs"
		>
			<slot
				v-for="slot in Object.keys($slots)"
				:name="slot"
				:slot="slot"
			/>
		</VFooter>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'XFooter'
	});
</script>
