<template>
	<VMenu
		class="menu-depth"
		allow-overflow
		offset-y
	>
		<XBtn
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
			>{{ languages[currentLangUsed].nativeName }}</span>
			<XSvgIcon
				v-if="displayArrow"
				size="10px"
				class="ml-2"
				icon="expand"
			/>
		</XBtn>
		<VList v-if="languages">
			<VListTile
				v-for="(item, lang, index) in languages"
				:key="index"
				avatar
			>
				<XBtn
					flat
					class="ma-0"
					@click="changeLang(lang)"
				>
					<VListTileAvatar v-if="flags">
						<img
							:src="`${flagsUrl}${lang}.svg`"
							class="flag-img"
							alt=""
						>
					</VListTileAvatar>

					<XListTileTitle>{{ item.nativeName }}</XListTileTitle>
				</XBtn>
			</VListTile>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';

	import languages from 'languages';

	export default Vue.extend({
		name: 'XLangBtn',
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			// Shared
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
				default: undefined
			},
			// Btn
			absolute: {
				type: Boolean,
				default: false
			},
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
			bottom: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: '#333'
			},
			dark: {
				type: Boolean,
				default: false
			},
			depressed: {
				type: Boolean,
				default: true
			},
			disabled: {
				type: Boolean,
				default: false
			},
			fab: {
				type: Boolean,
				default: false
			},
			fixed: {
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
			left: {
				type: Boolean,
				default: false
			},
			light: {
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
			right: {
				type: Boolean,
				default: false
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
			top: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				default: 'button'
			},
			btnValue: {
				type: [String, Number, Boolean],
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
