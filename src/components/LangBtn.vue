<template>
	<VMenu
		:absolute="absolute"
		:allow-overflow="allowOverflow"
		:auto="auto"
		:bottom="menuBottom"
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
		:left="menuLeft"
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
		:right="menuRight"
		:top="menuTop"
		:transition="transition"
		:value="menuValue"
		:z-index="zIndex"
	>
		<VBtn
			slot="activator"
			:aria-label="`${label} ${languages[currentLangUsed].nativeName}`"

			:absolute="absolute"
			:active-class="activeClass"
			:append="append"
			:block="block"
			:bottom="bottom"
			:color="color"
			:dark="dark"
			:depressed="depressed"
			:disabled="disabled"
			:fab="fab"
			:fixed="fixed"
			:flat="flat"
			:icon="icon"
			:large="large"
			:left="left"
			:light="light"
			:loading="loading"
			:outline="outline"
			:right="right"
			:ripple="ripple"
			:round="round"
			:small="small"
			:tag="tag"
			:top="top"
			:type="type"
			:value="btnValue"
		>
			<img
				v-if="flags"
				:src="`${flagsUrl}${currentLangUsed}.svg`"
				class="current-flag"
				alt=""
			>

			<span
				v-if="displayTextBtn"
				class="ml-2"
			>
				{{ languages[currentLangUsed].nativeName }}
			</span>

			<SvgIcon
				v-if="displayArrow"
				size="10px"
				class="ml-2"
				icon="expand"
			/>
		</VBtn>

		<VList
			v-if="languages"

			:dark="dark"
			:dense="dense"
			:light="light"
		>
			<VListTile
				v-for="(item, lang, index) in languages"
				:key="index"

				:active-class="listActiveClass"
				:avatar="avatar"
				:color="color"
				:dark="dark"
				:disabled="disabled"
				:light="light"
				:ripple="ripple"
				:tag="listTag"
			>
				<VBtn
					:color="color"
					flat
					class="ma-0 text-none"
					@click="changeLang(lang)"
				>
					<VListTileAvatar v-if="flags">
						<img
							:src="`${flagsUrl}${lang}.svg`"
							class="flag-img"
							alt=""
						>
					</VListTileAvatar>

					<VListTileTitle>{{ item.nativeName }}</VListTileTitle>
				</VBtn>
			</VListTile>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';

	import languages from 'languages';

	export default Vue.extend({
		name: 'LangBtn',
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			// Global
			availableLanguages: {
				type: [Object, Array, String],
				default: '*'
			},
			label: {
				type: String,
				default: 'Choix de la langue. Actuellement :'
			},
			flags: {
				type: Boolean,
				default: false
			},
			flagsUrl: {
				type: String,
				default: '/img/flags/'
			},
			displayTextBtn: {
				type: Boolean,
				default: true
			},
			displayArrow: {
				type: Boolean,
				default: true
			},
			value: {
				type: String,
				default: 'fr'
			},
			// Shared
			absolute: {
				type: Boolean,
				default: false
			},
			dark: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			fixed: {
				type: Boolean,
				default: false
			},
			light: {
				type: Boolean,
				default: false
			},
			// Menu
			allowOverflow: {
				type: Boolean,
				default: true
			},
			auto: {
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
				default: true
			},
			contentClass: {
				type: String,
				default: undefined
			},
			disableKeys: {
				type: Boolean,
				default: false
			},
			fullWidth: {
				type: Boolean,
				default: false
			},
			lazy: {
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
				default: undefined
			},
			nudgeBottom: {
				type: [Number, String],
				default: 0
			},
			nudgeLeft: {
				type: [Number, String],
				default: 0
			},
			nudgeRight: {
				type: [Number, String],
				default: 0
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
				default: false
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
			transition: {
				type: [Boolean, String],
				default: 'v-menu-transition'
			},
			menuValue: {
				type: [Boolean, Object, Number, String],
				default: undefined
			},
			zIndex: {
				type: [Number, String],
				default: undefined
			},
			menuLeft: {
				type: Boolean,
				default: false
			},
			menuBottom: {
				type: Boolean,
				default: false
			},
			menuRight: {
				type: Boolean,
				default: false
			},
			menuTop: {
				type: Boolean,
				default: false
			},
			// Btn
			activeClass: {
				type: String,
				default: 'v-btn--active'
			},
			append: {
				type: Boolean,
				default: false
			},
			block: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: 'currentColor'
			},
			depressed: {
				type: Boolean,
				default: true
			},
			fab: {
				type: Boolean,
				default: false
			},
			flat: {
				type: Boolean,
				default: false
			},
			icon: {
				type: Boolean,
				default: false
			},
			large: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			outline: {
				type: Boolean,
				default: true
			},
			ripple: {
				type: [Boolean, Object],
				default: true
			},
			round: {
				type: Boolean,
				default: false
			},
			small: {
				type: Boolean,
				default: false
			},
			tag: {
				type: String,
				default: 'button'
			},
			type: {
				type: String,
				default: 'button'
			},
			btnValue: {
				type: [String, Number, Boolean],
				default: undefined
			},
			left: {
				type: Boolean,
				default: false
			},
			bottom: {
				type: Boolean,
				default: false
			},
			right: {
				type: Boolean,
				default: false
			},
			top: {
				type: Boolean,
				default: false
			},
			// List
			avatar: {
				type: Boolean,
				default: true
			},
			dense: {
				type: Boolean,
				default: false
			},
			listActiveClass: {
				type: String,
				default: 'primary--text'
			},
			listTag: {
				type: String,
				default: undefined
			}
		},
		data(this: any): any {
			return {
				languagesData: this.getLanguagesWithData(),
				currentLangUsed: this.value || 'fr'
			};
		},
		computed: {
			languages(): object {
				let data: any = {};

				if (this.availableLanguages !== '*') {
					this.availableLanguages.forEach((lang: string) => {
						data[lang] = this.languagesData[lang];
					});
				} else {
					data = this.languagesData;
				}

				return data;
			}
		},
		mounted() {
			this.$emit('change', this.currentLangUsed);
		},
		methods: {
			changeLang(lang: string): void {
				this.$emit('change', lang);
				this.currentLangUsed = lang;
			},
			getLanguagesWithData(): object[] {
				const data: any = {};

				languages.getAllLanguageCode().forEach((lang: string) => {
					const obj = languages.getLanguageInfo(lang);
					data[lang] = obj;
				});

				return data;
			}
		}
	});
</script>

<style lang="scss" scoped>
	.v-avatar img {
		border-radius: 0%;
	}

	.v-menu__content {
		overflow: auto;
		max-height: 300px;
	}

	.v-list {
		.v-btn {
			width: 100%;
			height: 100%;
		}

		/deep/ .v-list__tile {
			padding: 0;
		}
	}

	.current-flag {
		width: 30px;
	}
</style>
