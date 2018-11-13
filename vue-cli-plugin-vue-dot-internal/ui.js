module.exports = api => {
	api.describeTask({
		match: /remark/,
		description: 'org.cnam.vue-dot-internal.tasks.md-lint',
		icon: '/_plugin/vue-cli-plugin-vue-dot-internal/md.png'
	});

	api.describeTask({
		match: /vuepress dev docs/,
		description: 'org.cnam.vue-dot-internal.tasks.vuepress-dev',
		icon: '/_plugin/vue-cli-plugin-vue-dot-internal/vue.png'
	});

	api.describeTask({
		match: /vuepress build docs/,
		description: 'org.cnam.vue-dot-internal.tasks.vuepress-build',
		icon: '/_plugin/vue-cli-plugin-vue-dot-internal/vue.png'
	});

	api.describeTask({
		match: /vue-cli-service build --target lib --name vue-dot/,
		description: 'org.cnam.vue-dot-internal.tasks.build-bundle',
		icon: '/_plugin/vue-cli-plugin-vue-dot-internal/box.png'
	});

	api.describeTask({
		match: /ts-node --project \.\/scripts\/tsconfig\.json --files \.\/scripts\/release/,
		description: 'org.cnam.vue-dot-internal.tasks.release',
		icon: '/_plugin/vue-cli-plugin-vue-dot-internal/release.png'
	});

	api.describeTask({
		match: /vue-cli-service lint/,
		description: 'org.cnam.vue-dot-internal.tasks.lint',
		icon: '/_plugin/vue-cli-plugin-vue-dot-internal/research.png'
	});
};
