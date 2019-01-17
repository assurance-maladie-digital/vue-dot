<template>
	<ul
		v-if="$vuetify.theme"
		class="color-table mt-5"
	>
		<li
			v-for="(color, name) in filter('string')"
			:key="`a-${name}`"
			class="color-item"
		>
			<VLayout
				v-for="(sub, index) in themeItems"
				:key="`a-a-${index}`"
				:class="`${transform(name)} ${transform(sub)}`"
				:style="{
					color: getColorClass(sub),
					padding: sub === 'base' ? '20px 15px' : '',
					fontWeight: sub === 'base' ? 'bold' : ''
				}"
			>
				{{ transform(name) }} {{ transform(sub) }}

				<VSpacer />

				{{ color }}
			</VLayout>
		</li>

		<li
			v-for="(colorObj, name) in filter('object')"
			:key="`b-${name}`"
			class="color-item"
		>
			<VLayout
				v-for="(color, sub) in colorObj"
				:key="`b-b-${sub}`"
				:class="`${transform(name)} ${transform(sub)}`"
				:style="{
					color: getColorClass(sub),
					padding: sub === 'base' ? '20px 15px' : '',
					fontWeight: sub === 'base' ? 'bold' : ''
				}"
			>
				{{ transform(name) }} {{ transform(sub) }}

				<VSpacer />

				{{ color }}
			</VLayout>
		</li>

		<li
			v-for="(colorObj, name) in filter('object', true)"
			:key="`c-${name}`"
			class="color-item"
		>
			<VLayout
				v-for="(color, sub) in colorObj"
				:key="`c-c-${sub}`"
				:class="`${transform(name)} ${transform(sub)}`"
				:style="{
					color: sub === 'transparent' ? dark ? 'white' : getColorClass(sub) : getColorClass(sub),
					padding: sub === 'base' ? '20px 15px' : '',
					fontWeight: sub === 'base' ? 'bold' : ''
				}"
			>
				{{ transform(name) }} {{ sub !== 'transparent' ? transform(sub) : '' }}

				<VSpacer />

				{{ color }}
			</VLayout>
		</li>
	</ul>
</template>

<script lang="ts">
	import Vue from 'vue';

	import colors from 'vuetify/es5/util/colors';

	export default Vue.extend({
		name: 'ColorTable',
		props: {
			dark: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				colors,
				themeItems: [
					'base',
					'lighten5',
					'lighten4',
					'lighten3',
					'lighten2',
					'lighten1',
					'darken1',
					'darken2',
					'darken3',
					'darken4'
				]
			};
		},
		methods: {
			endStr(str: string) {
				return str[str.length - 1];
			},
			convertToClass(str: string): string {
				const end = this.endStr(str);
				const sub = str.substr(0, str.length - 1);

				if (isNaN(parseInt(end, 10))) {
					return str;
				}

				return `${sub}-${end}`;
			},
			getColorClass(key: string) {
				if (['white', 'transparent'].includes(key) ||
					key.indexOf('light') > -1 ||
					key.indexOf('accent') > -1
				) {
					return '#000';
				} else {
					return '#fff';
				}
			},
			kebab(str: string) {
				return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
			},
			transform(str: string) {
				return str !== 'base' ? this.convertToClass(this.kebab(str)) : '';
			},
			filter(type: string, color = false) {
				const source: any = color ? colors : this.$vuetify.theme;

				const filtered = source.filter((color: any) => {
					return typeof color === type;
				});

				return filtered;
			}
		}
	});
</script>

<style lang="scss" scoped>
	.color-table {
		display: flex;
		flex-wrap: wrap;
		list-style: none;

		.color-item {
			margin: 10px;
			width: 270px;

			.layout {
				padding: 10px 15px;
			}
		}
	}
</style>
