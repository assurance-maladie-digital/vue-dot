<template>
	<div class="subheading">
		<div
			v-if="listTitle"
			:class="titleClass"
			v-html="getTitle(titleLevel, listTitle)"
		/>

		<dl
			v-if="list.length"
			:class="{ 'column': column || $vuetify.breakpoint.xs }"
			:style="{ minWidth }"
			class="field"
		>
			<div
				v-for="(item, index) in list"
				:key="index"
				class="row mb-2"
			>
				<dt
					v-if="item.key"
					:style="{ width, color: labelColor }"
					class="key body-1"
				>
					{{ item.key }}
				</dt>

				<dd
					:style="{ color: valueColor }"
					class="value body-1"
				>
					{{ item.value || placeholder }}
				</dd>
			</div>
		</dl>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'DataList',
		props: {
			titleClass: {
				type: String,
				default: 'mb-3 headline'
			},
			titleLevel: {
				type: Number,
				default: 4,
				validator(level: number) {
					// level is in 6-1
					return level <= 6 && level >= 1;
				}
			},
			list: {
				type: Array,
				required: true
			},
			listTitle: {
				type: String,
				default: undefined
			},
			labelColor: {
				type: String,
				default: '#757575'
			},
			valueColor: {
				type: String,
				default: 'currentColor'
			},
			column: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: '…'
			},
			minWidth: {
				type: String,
				default: '300px'
			},
			width: {
				type: String,
				default: '200px'
			}
		},
		methods: {
			getTitle(level: number, text: string) {
				return `<h${level}>${text}</h${level}>`;
			}
		}
	});
</script>

<style lang="scss" scoped>
	.field {
		.row
		{
			display: flex;
			flex-wrap: wrap;
		}

		&.column .row
		{
			flex-direction: column;
		}

		&:not(.column) {
			.key::after
			{
				content: " :";
			}

			.value {
				align-self: flex-end;
			}
		}
	}
</style>
