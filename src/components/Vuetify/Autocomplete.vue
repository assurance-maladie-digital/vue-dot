// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VAutocomplete
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		v-model="localValue"
		@input="$emit('input', $event)"
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
	</VAutocomplete>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XAutocomplete';

	import merge from '@/mixins/merge';

	export default Vue.extend({
		name,
		mixins: [merge],
		model: {
			prop: 'value',
			event: 'input'
		},
		props: {
			value: {
				type: [String, Boolean, Number],
				default: undefined
			}
		},
		data() {
			return {
				name,
				localValue: this.value
			};
		},
		watch: {
			value() {
				this.localValue = this.value;
				this.$emit('input', this.localValue);
			}
		}
	});
</script>
