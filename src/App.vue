<template></template>

<script lang="ts">
	import Vue from 'vue';

	import Toolbar from '@/components/Toolbar.vue';
	import Footer from '@/components/Footer.vue';

	// App is your main component, it will contain your application with `router-view`
	export default Vue.extend({
		name: 'App'
	});
</script>

<style lang="scss">
	html
	{
		overflow: hidden;
	}

	*
	{
		$transparent: rgba(0, 0, 0, 0);

		max-width: 100%;
		margin: 0;
		padding: 0;
		border: 0;
		scroll-behavior: smooth;
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
		word-break: break-word;
		hyphens: auto;
		-moz-osx-font-smoothing: grayscale;
		-webkit-tap-highlight-color: $transparent;
	}

	html,
	body
	{
		font-size: 100%;
	}

	body
	{
		min-height: 100vh;
		line-height: 1.25;
	}

	input
	{
		appearance: none;
	}

	ul
	{
		list-style: none;
	}

	a,
	input,
	button
	{
		transition: .25s;
	}

	.sr-only
	{
		position: absolute !important;
		top: 0;
		left: -999px;
		width: 1px !important;
		height: 1px !important;
		white-space: nowrap;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
	}

	.v-ripple__container
	{
		&,
		& *
		{
			max-width: none;
		}
	}
</style>
