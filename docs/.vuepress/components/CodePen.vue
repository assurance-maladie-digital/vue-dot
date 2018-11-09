<template>
	<iframe
		:height="height"
		scrolling="no"
		:title="title"
		:src="`//codepen.io/dylan-broussard/embed/${id}/?height=${height}&theme-id=34630&default-tab=result&embed-version=2`"
		frameborder="no"
		allowtransparency="true"
		allowfullscreen="true"
		style="width: 100%;"
	>
		See the Pen <a href="https://codepen.io/dylan-broussard/pen/${id}/">{{ title }}</a> by Dylan Broussard (<a href="https://codepen.io/dylan-broussard">@dylan-broussard</a>) on <a href="https://codepen.io">CodePen</a>.
	</iframe>
</template>

<script>
	import Vue from 'vue';

	export default Vue.extend({
		name: 'CodePen',
		props: {
			id: {
				type: String,
				required: true
			},
			height: {
				type: Number,
				default: 500
			},
			title: {
				type: String,
				required: true
			}
		}
	});
</script>

<style lang="scss" scoped>
	iframe {
		background: #f3f3f3;
	}
</style>

