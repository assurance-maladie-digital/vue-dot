// CUSTOM WRAPPER, YOU CAN EDIT!

<template>
	<div
		:tag="merged.labelOut ? 'label' : ''"
		:is="merged.labelOut ? 'XLayout' : 'label'"
		:align-center="merged.labelOut ? true : null"
	>
		<p
			v-if="merged.labelOut"
			class="ma-0 mr-2"
		>{{ label }}:</p>
		<VSelect
			v-bind="merged"
			:class="merged.classes"
			:style="merged.styles"
			v-model="localValue"
			v-on="$listeners"
			@input="$emit('input', $event)"
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
		</VSelect>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = 'XSelect';

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
			},
			labelOut: {
				type: Boolean,
				default: false
			},
			label: {
				type: String,
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
		},
	});
</script>
