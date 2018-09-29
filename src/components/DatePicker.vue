<template>
	<div>
		<v-text-field
			v-model="computedDateFormatted"
			:label="label"
			@input="menu = false"
			mask="##/##/####"
			hint="Format JJ/MM/AAAA"
			persistent-hint
			@blur="date = parseDate(dateFormatted)"
			return-masked-value

			:autofocus="autofocus"
			:background-color="backgroundColor"
			:box="box"
			:browser-autocomplete="browserAutocomplete"
		>
			<v-btn
				v-if="!appendIcon"
				icon
				slot="prepend"
				@click="menu = true"
				class="ma-0"
			>
				<SvgIcon
					icon="calendar"
					:color="appendIconColor"
				/>
			</v-btn>
			<v-btn
				v-else-if="appendIcon && appendIconCb"
				icon
				slot="prepend"
				@click="appendIconCb"
				class="ma-0"
			>
				<SvgIcon
					:icon="appendIcon"
					:color="appendIconColor"
				/>
			</v-btn>
			<SvgIcon
				v-else
				slot="prepend"
				:icon="appendIcon"
				:color="appendIconColor"
			/>
		</v-text-field>
		<v-menu
			ref="menu"
			:close-on-content-click="false"
			v-model="menu"
			:nudge-right="30"
			:nudge-bottom="50"
			lazy
			transition="scale-transition"
			offset-y
			full-width
			min-width="290px"
			offset-overflow
		>
			<v-date-picker
				ref="picker"
				v-model="date"
				:max="birthdate ? new Date().toISOString().substr(0, 10) : null"
				:min="birthdate ? '1950-01-01' : null"
				@change="save"
				no-title
				locale="fr"
			/>
		</v-menu>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'DatePicker',
		data() {
			return {
				date: '',
				menu: false,
				dateFormatted: ''
			};
		},
		props: {
			label: {
				type: String,
				default: 'Date'
			},
			birthdate: {
				type: Boolean,
				default: false
			},
			appendIcon: {
				type: String,
				default: undefined
			},
			appendIconColor: {
				type: String,
				default: '#808080'
			},
			appendIconCb: {
				type: Function,
				default: null
			},
			autofocus: {
				type: Boolean,
				default: false
			},
			backgroundColor: {
				type: String,
				default: undefined
			},
			box: {
				type: Boolean,
				default: false
			},
			browserAutocomplete: {
				type: String,
				default: undefined
			}
		},
		computed: {
			computedDateFormatted: {
				get(): string {
					return this.formatDate(this.date);
				},
				set(value: string) {
					this.dateFormatted = value;
				}
			}
		},
		model: {
			prop: 'model',
			event: 'change'
		},
		watch: {
			menu(val: string) {
				if (this.birthdate && val) {
					this.$nextTick(() => ((this.$refs.picker as any).activePicker = 'YEAR'));
				}
			},
			date(val: string) {
				this.dateFormatted = this.formatDate(this.date);
			},
			computedDateFormatted() {
				this.$emit('change', this.computedDateFormatted);
			}
		},
		methods: {
			save(date: string): void {
				(this.$refs.menu as any).save(date);
			},
			formatDate(date: string): string {
				if (!date) {
					return '';
				}

				const [year, month, day] = date.split('-');

				return `${day}/${month}/${year}`;
			},
			parseDate(date: string): string | null {
				if (!date) {
					return null;
				}

				if (!date.match(/^(0?\d|[12]\d|3[01])\/(0?\d|1[012])\/((?:19|20)\d{2})$/)) {
					return null;
				}

				const [day, month, year] = date.split('/');
				return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
			}
		}
	});
</script>
