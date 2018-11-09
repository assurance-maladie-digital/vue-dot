<template>
	<VCarousel
		v-bind="$attrs"
	>
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>
	</VCarousel>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'XCarousel'
	});
</script>
