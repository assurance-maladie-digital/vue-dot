<template>
	<div>
		<v-text-field
			v-model="computedDateFormatted"
			label="Date de naissance"
			@input="menu = false"
			mask="##/##/####"
			hint="Format JJ/MM/AAAA"
			persistent-hint
			@blur="date = parseDate(dateFormatted)"
			return-masked-value
		>
			<v-btn
				icon
				slot="prepend"
				@click="menu = true"
				class="ma-0"
			>
				<SvgIcon
					icon="calendar"
					color="#808080"
				/>
			</v-btn>
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
				:max="new Date().toISOString().substr(0, 10)"
				min="1950-01-01"
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
		name: 'LangBtn',
		data(): any {
			return {
				date: '',
				menu: false,
				dateFormatted: ''
			};
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
		watch: {
			menu(val: string) {
				if (val) {
					this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'));
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
			save(date: string) {
				this.$refs.menu.save(date);
			},
			formatDate(date: any) {
				if (!date) {
					return '';
				}

				const [year, month, day] = date.split('-');

				return `${day}/${month}/${year}`;
			},
			parseDate(date: any) {
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

<style lang="scss" scoped>
</style>
