// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VCheckbox
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
	</VCheckbox>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XCheckbox';

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
