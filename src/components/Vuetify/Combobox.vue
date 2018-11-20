// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VCombobox
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		@change="$emit('change', $event)"
		v-model="localValue"
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
	</VCombobox>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XCombobox';

	import merge from '@/mixins/merge';

	export default Vue.extend({
		name,
		data() {
			return {
				name,
				localValue: this.value
			};
		},
		mixins: [merge],
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			value: {
				type: [String, Boolean],
				default: undefined
			}
		}
	});
</script>
