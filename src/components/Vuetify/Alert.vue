// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VAlert
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
	
		<template
			v-for="slot in Object.keys($scopedSlots)"
			slot-scope="scope"
			:slot="slot"
		>
			<slot
				:name="slot"
				v-bind="scope"
			/>
		</template>
	</VAlert>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XAlert';

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
