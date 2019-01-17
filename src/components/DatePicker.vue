<template>
	<div>
		<VTextField
			v-model="computedDateFormatted"
			:autofocus="autofocus"
			:background-color="backgroundColor"

			:box="box"
			:browser-autocomplete="browserAutocomplete"
			:color="color"
			:counter="counter"
			:dark="dark"
			:disabled="disabled"
			:dont-fill-mask-blanks="dontFillMaskBlanks"
			:flat="flat"
			:full-width="fullWidth"
			:height="height"
			:hide-details="hideDetails"
			:hint="hint"
			:label="label"
			:light="light"
			:loading="loading"
			:mask="maskValue"
			:outline="outline"
			:persistent-hint="persistentHint"
			:placeholder="placeholder"
			:prefix="prefix"
			:readonly="readonly"
			:return-masked-value="returnMaskedValue"
			:reverse="reverse"
			:single-line="singleLine"
			:solo="solo"
			:solo-inverted="soloInverted"
			:success="success"
			:success-messages="successMessages"
			:suffix="suffix"
			:type="type"
			:validate-on-blur="validateOnBlur"
			:value="value"
			@input="menu = false"
			@blur="date = parseDate(dateFormatted)"
			@keyup.enter="date = parseDate(dateFormatted)"
		>
			<VBtn
				v-if="!appendIcon"
				slot="prepend"
				:ripple="!menu"
				:class="`activator-icon-${menuRef}`"
				icon
				class="ma-0"
				@click="menu = true"
			>
				<SvgIcon
					:color="appendIconColor"
					icon="calendar"
				/>
			</VBtn>

			<VBtn
				v-else-if="appendIcon && appendIconCb"
				slot="prepend"
				:ripple="!menu"
				:class="`activator-icon-${menuRef}`"
				icon
				class="ma-0"
				@click="appendIconCb"
			>
				<SvgIcon
					:icon="appendIcon"
					:color="appendIconColor"
				/>
			</VBtn>

			<SvgIcon
				v-else
				slot="prepend"
				:icon="appendIcon"
				:color="appendIconColor"
				:class="`activator-icon-${menuRef}`"
			/>
		</VTextField>

		<VMenu
			:ref="menuRef"
			v-model="menu"
			:close-on-content-click="false"
			:nudge-right="40"
			:nudge-bottom="55"
			:attach="`.activator-icon-${menuRef}`"
			lazy
			transition="scale-transition"
			offset-y
			full-width
			min-width="300px"
			offset-overflow
			z-index="1"
		>
			<VDatePicker
				:ref="ref"
				v-model="date"
				:allowed-dates="allowedDates"

				:color="color"
				:dark="dark"
				:day-format="dayFormat"
				:event-color="eventColor"
				:events="events"
				:first-day-of-week="firstDayOfWeek"
				:full-width="fullWidth"
				:header-color="headerColor"
				:header-date-format="headerDateFormat"
				:landscape="landscape"
				:light="light"
				:locale="locale"
				:max="max"
				:min="min"
				:multiple="multiple"
				:next-icon="nextIcon"
				:no-title="noTitle"
				:picker-date="pickerDate"
				:prev-icon="prevIcon"
				:reactive="reactive"
				:readonly="readonly"
				:scrollable="scrollable"
				:show-current="showCurrent"
				:title-date-format="titleDateFormat"
				:value="value"
				:width="width"
				:year-format="yearFormat"
				:year-icon="yearIcon"
				@input="save"
			/>
		</VMenu>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	import * as dayjs from 'dayjs';

	import SvgIcon from '@/components/SvgIcon.vue';

	export default Vue.extend({
		name: 'DatePicker',
		components: {
			SvgIcon
		},
		model: {
			prop: 'model',
			event: 'change'
		},
		props: {
			// Shared
			color: {
				type: String,
				default: 'primary'
			},
			birthdate: {
				type: Boolean,
				default: false
			},
			dark: {
				type: Boolean,
				default: false
			},
			fullWidth: {
				type: Boolean,
				default: false
			},
			readonly: {
				type: Boolean,
				default: false
			},
			value: {
				type: String,
				default: undefined
			},
			light: {
				type: Boolean,
				default: false
			},
			dateFormat: {
				type: String,
				default: 'DD/MM/YYYY'
			},
			dateFormatReturn: {
				type: String,
				default(this: any): any {
					return this.dateFormat;
				}
			},
			locale: {
				type: String,
				default: 'fr-fr'
			},
			// Input
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
			},
			counter: {
				type: [Boolean, Number, String],
				default: undefined
			},
			disabled: {
				type: Boolean,
				default: false
			},
			dontFillMaskBlanks: {
				type: Boolean,
				default: false
			},
			flat: {
				type: Boolean,
				default: false
			},
			height: {
				type: [Number, String],
				default: undefined
			},
			hideDetails: {
				type: Boolean,
				default: false
			},
			hint: {
				type: String,
				default: 'Format JJ/MM/AAAA'
			},
			label: {
				type: String,
				default: 'Date'
			},
			loading: {
				type: [Boolean, String],
				default: false
			},
			mask: {
				type: String,
				default: undefined
			},
			outline: {
				type: Boolean,
				default: false
			},
			persistentHint: {
				type: Boolean,
				default: true
			},
			placeholder: {
				type: String,
				default: undefined
			},
			prefix: {
				type: String,
				default: undefined
			},
			returnMaskedValue: {
				type: Boolean,
				default: true
			},
			reverse: {
				type: Boolean,
				default: false
			},
			singleLine: {
				type: Boolean,
				default: false
			},
			solo: {
				type: Boolean,
				default: false
			},
			soloInverted: {
				type: Boolean,
				default: false
			},
			success: {
				type: Boolean,
				default: false
			},
			successMessages: {
				type: [String, Array, Object],
				default: () => []
			},
			suffix: {
				type: String,
				default: undefined
			},
			type: {
				type: String,
				default: 'text'
			},
			validateOnBlur: {
				type: Boolean,
				default: false
			},
			// Date picker
			allowedDates: {
				type: Function,
				default: null
			},
			dayFormat: {
				type: Function,
				default: null
			},
			eventColor: {
				type: [String, Function, Object],
				default: 'warning'
			},
			events: {
				type: [Array, Function, Object],
				default: null
			},
			firstDayOfWeek: {
				type: [String, Number],
				default: 1
			},
			headerColor: {
				type: String,
				default: undefined
			},
			headerDateFormat: {
				type: Function,
				default: null
			},
			landscape: {
				type: Boolean,
				default: false
			},
			max: {
				type: String,
				default(this: any): any {
					return this.birthdate ? new Date().toISOString().substr(0, 10) : undefined;
				}
			},
			min: {
				type: String,
				default(this: any): any {
					return this.birthdate ? '1950-01-01' : undefined;
				}
			},
			multiple: {
				type: Boolean,
				default: false
			},
			nextIcon: {
				type: String,
				default: '$vuetify.icons.next'
			},
			noTitle: {
				type: Boolean,
				default: true
			},
			pickerDate: {
				type: String,
				default: undefined
			},
			prevIcon: {
				type: String,
				default: '$vuetify.icons.prev'
			},
			reactive: {
				type: Boolean,
				default: false
			},
			scrollable: {
				type: Boolean,
				default: false
			},
			showCurrent: {
				type: [Boolean, String],
				default: true
			},
			titleDateFormat: {
				type: Function,
				default: null
			},
			width: {
				type: [Number, String],
				default: 300
			},
			yearFormat: {
				type: Function,
				default: null
			},
			yearIcon: {
				type: String,
				default: undefined
			}
		},
		data() {
			return {
				ref: 'date-picker-ref-' + Math.floor(Math.random() * 1000).toString(),
				menuRef: 'menu-picker-ref-' + Math.floor(Math.random() * 1000).toString(),
				date: this.value || '',
				menu: false,
				dateFormatted: '',
				dayjsLocales: [ // All supported locales of dayjs
					'bg',
					'ca',
					'da',
					'de',
					'es',
					'fa',
					'fi',
					'fr',
					'hr',
					'hu',
					'id',
					'it',
					'ja',
					'ka',
					'ko',
					'nb',
					'nl',
					'nn',
					'pl',
					'pt-br',
					'ro',
					'ru',
					'sk',
					'sr-cyrl',
					'sr',
					'sv',
					'th',
					'tr',
					'zh-cn',
					'zh-tw'
				]
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
			},
			maskValue(): string {
				if (this.mask === undefined) {
					const dayjsFormats = [
						'YYYY',
						'YY',
						'M',
						'MM',
						'MMM',
						'MMMM',
						'D',
						'DD',
						'd',
						'dd',
						'ddd',
						'dddd',
						'H',
						'HH',
						'h',
						'hh',
						'm',
						'mm',
						's',
						'ss',
						'SSS',
						'Z',
						'ZZ',
						'A',
						'a',
						'Q',
						'Do',
						'k',
						'kk',
						'X',
						'x'
					];

					const sorted = dayjsFormats.sort((a: string, b: string) => b.length - a.length || a.localeCompare(b));
					// Match any of formats once
					const regexp = new RegExp((sorted.join('|')), 'g');

					return this.dateFormat.replace(regexp, (match: string): string => {
						return match.replace(/./g, '#');
					});
				} else {
					return this.mask;
				}
			}
		},
		watch: {
			menu(val: string) {
				if (this.birthdate && val) {
					this.$nextTick(() => ((this.$refs[this.ref] as any).activePicker = 'YEAR'));
				}
			},
			date(val: string) {
				this.computedDateFormatted = this.formatDate(this.date);
			},
			computedDateFormatted() {
				this.$emit('change', this.formatDateForReturn(this.date));
			},
			locale(val: string) {
				this.loadLocale();
			}
		},
		created() {
			this.loadLocale();
			this.dateFormatted = this.value ? this.formatDate(this.date) : '';
			this.$emit('change', this.formatDateForReturn(this.date));
		},
		methods: {
			// Save the date, see https://vuetifyjs.com/en/components/date-pickers#example-date-dialog-and-menu
			save(date: string): void {
				(this.$refs[this.menuRef] as any).save(date);
			},
			// Format the date with `dateFormat` (default 'DD/MM/YYYY')
			formatDate(date: string): string {
				if (!date) {
					return '';
				}

				return dayjs(date).format(this.dateFormat);
			},
			// Format the date with `dateFormatReturn` (default `dateFormat` or 'DD/MM/YYYY')
			// this allows to have a basic format for input and an enhanced one for return
			formatDateForReturn(this: any, date: string): string {
				if (!date) {
					return '';
				}

				return dayjs(date).format(this.dateFormatReturn);
			},
			// From `formatDate` to `YYYY-MM-DD` when input focus is lost
			parseDate(date: string): string | null {
				if (!date) {
					return null;
				}

				// Check if it's ISO format
				if (!date.match(/^(0?\d|[12]\d|3[01])\/(0?\d|1[012])\/((?:19|20)\d{2})$/)) {
					return null;
				}

				const [day, month, year] = date.split('/');
				return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
			},
			checkIfLocaleNeeded(format: string): boolean {
				return !!format.match(/MMM|MM|dddd|ddd|dd|A|a|Do/gm);
			},
			loadLocale(this: any): void {
				// Check if we need locale for `formatDate` or `formatDateReturn`
				if (this.checkIfLocaleNeeded(this.dateFormat) || this.checkIfLocaleNeeded(this.dateFormatReturn)) {
					// We want to load only locales from dayjs that really exists
					// but the locale can be any ISO 8601 string

					const longLocales: string[] = [];

					// Search for existing locales in dayjs than are not `xx` format
					this.dayjsLocales.map((el: string) => {
						if (el.length > 2) {
							longLocales.push(el);
						}
					});

					let locale: string;

					// If the locale is a long one that exists in dayjs, use it
					if (longLocales && longLocales.includes(this.locale)) {
						locale = this.locale;
					} else {
						// else, if locale is `xx-yy` format, shorten to `xx`
						locale = this.locale.length === 5 ? this.locale.substring(3) : this.locale;
					}

					// If the locale really exists, load it
					if (this.dayjsLocales.includes(locale)) {
						import(`dayjs/locale/${locale}`).then((e) => {
							dayjs.locale(locale);
							// Emit change event to refresh date with new locale
							this.$emit('change', this.formatDateForReturn(this.date));
						});
					}
				}
			}
		}
	});
</script>
