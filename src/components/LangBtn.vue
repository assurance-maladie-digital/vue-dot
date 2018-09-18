<template>
	<v-menu
		class="menu-depth"
		allow-overflow
	>
		<v-btn
			slot="activator"
			:aria-label="`${label} ${languages[currentLangUsed].nativeName}`"
			flat
		>
			<span
				v-if="$vuetify.breakpoint.mdAndUp"
				class="ml-2"
			>{{ languages[currentLangUsed].nativeName }}</span>
			<SvgIcon
				size="10px"
				class="ml-2"
				icon="expand"
			/>
		</v-btn>
		<v-list v-if="languages">
			<v-list-tile
				v-for="(item, lang, index) in languages"
				:key="index"
				avatar
			>
				<v-btn
					flat
					class="ma-0"
					@click="changeLang(lang)"
				>
					<v-list-tile-title>{{ item.name }}</v-list-tile-title>
				</v-btn>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script lang="ts">
	import Vue from 'vue';

	import languages from 'languages';

	export default Vue.extend({
		name: 'LangBtn',
		props: {
			availableLanguages: {
				type: [Object, Array, String],
				default: '*'
			},
			callback: {
				type: Function,
				required: true
			},
			label: {
				type: String,
				default: 'Choix de la langue. Actuellement :'
			},
			currentLang: {
				type: String,
				default: 'fr'
			}
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
		data(this: any): any {
			return {
				languagesData: this.getLanguagesWithData(),
				currentLangUsed: this.currentLang
			};
		},
		methods: {
			changeLang(lang: string): void {
				this.callback(lang);
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

	.v-menu .v-menu__content {
		overflow: auto;
		max-height: 75vh;
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
