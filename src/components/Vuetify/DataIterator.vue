// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<VDataIterator
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		@input="$emit('input', $event)"
		v-model="localValue"
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
			:slot="slot"
			slot-scope="scope"
		>
			<slot
				:name="slot"
				v-bind="scope"
			/>
		</template>
	</VDataIterator>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XDataIterator';

	import merge from '@/mixins/merge';

	export default Vue.extend({
		name,
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
		},
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
		}
	});
</script>
