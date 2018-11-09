<template>
	<VDataTable
		v-bind="$attrs"
	>
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>

		<template
			v-for="slot in Object.keys($scopedSlots)"
			:slot="slot"
			slot-scope="scope"
		>
			<slot
				:name="slot"
				v-bind="scope"
			/>
		</template>
	</VDataTable>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'XDataTable'
	});
</script>
