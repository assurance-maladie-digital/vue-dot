<template>
	<v-menu
		class="menu-depth"
	>
		<v-btn
			slot="activator"
			:aria-label="`${label} ${languages[currentLangUsed]}`"
			flat
		>
			<img
				:src="`/img/flags/${currentLangUsed}.svg`"
				class="current-flag"
				alt=""
			>
			<span
				v-if="$vuetify.breakpoint.mdAndUp"
				class="ml-2"
			>{{ languages[currentLangUsed] }}</span>
			<SvgIcon
				size="10px"
				class="ml-2"
				icon="expand"
			/>
		</v-btn>
		<v-list v-if="languages">
			<v-list-tile
				v-for="(title, lang, index) in languages"
				:key="index"
				avatar
			>
				<v-btn
					flat
					class="ma-0"
					@click="changeLang(lang)"
				>
					<v-list-tile-avatar>
						<img
							:src="`/img/flags/${lang}.svg`"
							class="flag-img"
							alt=""
						>
					</v-list-tile-avatar>

					<v-list-tile-title>{{ title }}</v-list-tile-title>
				</v-btn>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'LangBtn',
		props: {
			availableLanguages: {
				type: [Object, Array],
				required: true
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
				const data: any = {};

				this.availableLanguages.forEach((lang: string) => {
					data[lang] = this.languagesData[lang];
				});

				return data;
			}
		},
		data(): any {
			return {
				languagesData: {
					fr: 'Français',
					en: 'English'
				},
				currentLangUsed: this.currentLang
			};
		},
		methods: {
			changeLang(lang: string): void {
				this.callback(lang);
				this.currentLangUsed = lang;
			}
		}
	});
</script>

<style lang="scss" scoped>
	.v-avatar img {
		border-radius: 0%;
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
