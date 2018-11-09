<template>
	<VAvatar
		v-bind="$attrs"
	>
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>
	</VAvatar>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'XAvatar'
	});
</script>
