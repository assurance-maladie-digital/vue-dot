<template>
	<span
		:class="{
			'large': large,
			'medium': medium,
			'small': small,
			'x-large': xLarge,
			'custom-color': color
		}"
		:style="{
			color,
			width: size,
			height: size
		}"
		class="x-svg-icon"
		aria-hidden="true"
	>
		<slot>
			<!-- Custom icons from theme, only render if it's looks like svg -->
			<template v-if="$theme">
				<div
					v-for="iconTheme in themeIcons"
					:key="iconTheme.name"
					v-html="iconTheme.svg"
				/>
			</template>
		</slot>
	</span>
</template>

<script lang="ts">
	import Vue from 'vue';

	interface Icon extends Object {
		name: string;
		svg: string;
	}

	export default Vue.extend({
		name: 'SvgIcon',
		props: {
			color: {
				type: String,
				default: 'currentColor'
			},
			icon: {
				type: String,
				default: undefined
			},
			large: {
				type: Boolean,
				default: false
			},
			medium: {
				type: Boolean,
				default: false
			},
			size: {
				type: String,
				default: ''
			},
			small: {
				type: Boolean,
				default: false
			},
			xLarge: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			themeIcons(): object {
				// If there is icons in theme
				if (this.$theme && this.$theme.config && this.$theme.config.icons) {
					const filtered = this.$theme.config.icons.filter((icon: Icon) => {
						return this.icon === icon.name;
					});

					return filtered;
				}

				return {};
			}
		}
	});
</script>

<style lang="scss">
	$default: 1.35em;
	$small: 1em;
	$medium: 1.5em;
	$large: 1.85em;
	$xLarge: 2.25em;

	.x-svg-icon {
		width: $default;
		height: $default;
		position: relative;
		display: inline-block;
		vertical-align: middle;

		svg {
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			position: absolute;
			transition: fill .25s;
		}

		&.custom-color svg {
			fill: currentColor;
		}

		&.small {
			width: $small;
			height: $small;
		}

		&.medium {
			width: $medium;
			height: $medium;
		}

		&.large {
			width: $large;
			height: $large;
		}

		&.x-large {
			width: $xLarge;
			height: $xLarge;
		}
	}
</style>
