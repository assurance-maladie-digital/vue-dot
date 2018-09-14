<template>
	<span
		:class="{
			'large': large,
			'medium': medium,
			'small': small,
			'x-large': xLarge,
			'custom-color': color || dark || light,
			'theme--dark': dark,
			'theme--light': light
		}"
		:style="{
			color,
			width: size,
			height: size
		}"
		class="icon"
	>
		<slot>
			<svg viewBox="0 0 24 24">
				<path
					v-if="icon === 'home'"
					d="M12 1.8L0 12.6h3.6v9.6h6V15h4.8v7.2h6v-9.6H24z"
				/>

				<path
					v-if="icon === 'cart'"
					d="M7.2 19.2a2.4 2.4 0 0 0-2.4 2.4A2.4 2.4 0 0 0 7.2 24a2.4 2.4 0 0 0 2.4-2.4 2.4 2.4 0 0 0-2.4-2.4zM0 0v2.4h2.4l4.32 9.12-1.68 2.88c-.12.36-.24.84-.24 1.2A2.4 2.4 0 0 0 7.2 18h14.4v-2.4H7.68a.26.26 0 0 1-.24-.24v-.12l1.08-2.04h8.88c.96 0 1.68-.48 2.04-1.2l4.32-7.8c.24-.24.24-.36.24-.6 0-.72-.48-1.2-1.2-1.2H5.04L3.96 0zm19.2 19.2a2.4 2.4 0 0 0-2.4 2.4 2.4 2.4 0 0 0 2.4 2.4 2.4 2.4 0 0 0 2.4-2.4 2.4 2.4 0 0 0-2.4-2.4z"
				/>
			</svg>
		</slot>
	</span>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'SvgIcon',
		props: {
			color: {
				type: String,
				default: 'currentColor'
			},
			dark: {
				type: Boolean,
				default: false
			},
			large: {
				type: Boolean,
				default: false
			},
			light: {
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
			},
			icon: {
				type: String,
				default: ''
			}
		}
	});
</script>

<style lang="scss" scoped>
	$default: 1.35em;
	$small: 1em;
	$medium: 1.5em;
	$large: 1.85em;
	$xLarge: 2.25em;

	.icon {
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
	}

	.small {
		width: $small;
		height: $small;
	}

	.medium {
		width: $medium;
		height: $medium;
	}

	.large {
		width: $large;
		height: $large;
	}

	.x-large {
		width: $xLarge;
		height: $xLarge;
	}
</style>
