<template>
	<div>
		<VTextField
			v-model="computedDateFormatted"
			:autofocus="autofocus"
			:background-color="backgroundColor"

			:append-icon="appendIcon"
			:append-outer-icon="appendOuterIcon"
			:box="box"
			:browser-autocomplete="browserAutocomplete"
			:color="color"
			:clear-icon="clearIcon"
			:clearable="clearable"
			:counter="counter"
			:dark="dark"
			:disabled="disabled"
			:dont-fill-mask-blanks="dontFillMaskBlanks"
			:error="error"
			:error-count="errorCount"
			:error-messages="errorMessages"
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
			:prepend-inner-icon="prependInnerIcon"
			:readonly="readonly"
			:return-masked-value="returnMaskedValue"
			:reverse="reverse"
			:rules="rules"
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
				v-if="!prependIcon"
				slot="prepend"
				:ripple="!menu"
				:aria-label="iconAriaLabel"
				:class="`activator-icon-${menuRef}`"
				icon
				class="ma-0"
				@click="menu = true"
			>
				<SvgIcon
					:color="prependIconColor"
					icon="calendar"
				/>
			</VBtn>

			<VBtn
				v-else-if="prependIcon && prependIconCb"
				slot="prepend"
				:ripple="!menu"
				:aria-label="iconAriaLabel"
				:class="`activator-icon-${menuRef}`"
				icon
				class="ma-0"
				@click="prependIconCb"
			>
				<SvgIcon
					:icon="prependIcon"
					:color="prependIconColor"
				/>
			</VBtn>

			<SvgIcon
				v-else
				slot="prepend"
				:icon="prependIcon"
				:color="prependIconColor"
				:class="`activator-icon-${menuRef}`"
				aria-hidden="true"
			/>
		</VTextField>

		<VMenu
			:ref="menuRef"
			v-model="menu"

			:absolute="absolute"
			:allow-overflow="allowOverflow"
			:attach="`.activator-icon-${menuRef}`"
			:auto="auto"
			:bottom="bottom"
			:close-delay="closeDelay"
			:close-on-click="closeOnClick"
			:close-on-content-click="closeOnContentClick"
			:content-class="contentClass"
			:dark="dark"
			:disable-keys="disableKeys"
			:disabled="disabled"
			:fixed="fixed"
			:full-width="fullWidth"
			:lazy="lazy"
			:left="left"
			:light="light"
			:max-height="maxHeight"
			:max-width="maxWidth"
			:min-width="minWidth"
			:nudge-bottom="nudgeBottom"
			:nudge-left="nudgeLeft"
			:nudge-right="nudgeRight"
			:nudge-top="nudgeTop"
			:nudge-width="nudgeWidth"
			:offset-overflow="offsetOverflow"
			:offset-x="offsetX"
			:offset-y="offsetY"
			:open-delay="openDelay"
			:open-on-click="openOnClick"
			:open-on-hover="openOnHover"
			:origin="origin"
			:position-x="positionX"
			:position-y="positionY"
			:return-value="returnValue"
			:right="right"
			:top="top"
			:transition="transition"
			:z-index="zIndex"
		>
			<VDatePicker
				:ref="ref"
				v-model="date"
				:allowed-dates="allowedDates"

				:color="color"
				:dark="dark"
				:day-format="dayFormat"
				:disabled="disabled"
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
				:month-format="monthFormat"
				:multiple="multiple"
				:next-icon="nextIcon"
				:no-title="noTitle"
				:picker-date="pickerDate"
				:prev-icon="prevIcon"
				:reactive="reactive"
				:readonly="readonly"
				:scrollable="scrollable"
				:show-current="showCurrent"
				:show-week="showWeek"
				:title-date-format="titleDateFormat"
				:type="pickerType"
				:value="value"
				:weekday-format="weekdayFormat"
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

	import dayjs from 'dayjs';

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
			iconAriaLabel: {
				type: String,
				default: 'Sélection de la date'
			},
			// Input
			appendIcon: {
				type: String,
				default: undefined
			},
			appendOuterIcon: {
				type: String,
				default: undefined
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
			clearIcon: {
				type: String,
				default: '$vuetify.icons.clear'
			},
			clearable: {
				type: Boolean,
				default: false
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
			error: {
				type: Boolean,
				default: false
			},
			errorCount: {
				type: [Number, String],
				default: 1
			},
			errorMessages: {
				type: [String, Array],
				default: () => []
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
			prependIcon: {
				type: String,
				default: undefined
			},
			prependIconColor: {
				type: String,
				default: '#808080'
			},
			prependIconCb: {
				type: Function,
				default: null
			},
			prependInnerIcon: {
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
			rules: {
				type: Array,
				default: () => []
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
			monthFormat: {
				type: Function,
				default: null
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
			showWeek: {
				type: Boolean,
				default: false
			},
			titleDateFormat: {
				type: Function,
				default: null
			},
			pickerType: {
				type: String,
				default: 'date'
			},
			weekdayFormat: {
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
			},
			// Menu,
			absolute: {
				type: Boolean,
				default: false
			},
			allowOverflow: {
				type: Boolean,
				default: false
			},
			auto: {
				type: Boolean,
				default: false
			},
			bottom: {
				type: Boolean,
				default: false
			},
			closeDelay: {
				type: [Number, String],
				default: 0
			},
			closeOnClick: {
				type: Boolean,
				default: true
			},
			closeOnContentClick: {
				type: Boolean,
				default: false
			},
			contentClass: {
				type: String,
				default: undefined
			},
			disableKeys: {
				type: Boolean,
				default: false
			},
			fixed: {
				type: Boolean,
				default: false
			},
			lazy: {
				type: Boolean,
				default: true
			},
			left: {
				type: Boolean,
				default: false
			},
			maxHeight: {
				type: [Number, String],
				default: 'auto'
			},
			maxWidth: {
				type: [Number, String],
				default: 'auto'
			},
			minWidth: {
				type: [Number, String],
				default: '300px'
			},
			nudgeBottom: {
				type: [Number, String],
				default: 55
			},
			nudgeLeft: {
				type: [Number, String],
				default: 0
			},
			nudgeRight: {
				type: [Number, String],
				default: 40
			},
			nudgeTop: {
				type: [Number, String],
				default: 0
			},
			nudgeWidth: {
				type: [Number, String],
				default: 0
			},
			offsetOverflow: {
				type: Boolean,
				default: true
			},
			offsetX: {
				type: Boolean,
				default: false
			},
			offsetY: {
				type: Boolean,
				default: true
			},
			openDelay: {
				type: [Number, String],
				default: 0
			},
			openOnClick: {
				type: Boolean,
				default: true
			},
			openOnHover: {
				type: Boolean,
				default: false
			},
			origin: {
				type: String,
				default: 'top left'
			},
			positionX: {
				type: Number,
				default: undefined
			},
			positionY: {
				type: Number,
				default: undefined
			},
			returnValue: {
				type: [Boolean, Number, String],
				default: undefined
			},
			right: {
				type: Boolean,
				default: false
			},
			top: {
				type: Boolean,
				default: false
			},
			transition: {
				type: String,
				default: 'scale-transition'
			},
			zIndex: {
				type: [Number, String],
				default: 1
			}
		},
		data() {
			return {
				ref: 'date-picker-ref',
				menuRef: 'menu-picker-ref',
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
			/* istanbul ignore next */
			this.dateFormatted = this.value ? this.formatDate(this.date) : '';
			this.$emit('change', this.formatDateForReturn(this.date));
		},
		methods: {
			// Save the date, see https://vuetifyjs.com/en/components/date-pickers#example-date-dialog-and-menu
			save(date: string): void {
				/* istanbul ignore next */
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
				/* istanbul ignore next */
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
