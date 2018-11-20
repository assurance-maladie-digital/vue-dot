// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VListTileAvatar
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
	>
		<slot name="default" />
		<slot
			v-for="slot in Object.keys($slots)"
			v-if="slot !== 'default'"
			:name="slot"
			:slot="slot"
		/>
	</VListTileAvatar>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XListTileAvatar';

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
