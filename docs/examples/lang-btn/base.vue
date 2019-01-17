<template>
	<VLayout
		align-center
		justify-space-around
	>
		<LangBtn @change="updateLang" />

		<LangBtn
			flat
			flags
			menu-left
			menu-bottom
			class="custom"
			:outline="false"
			:display-text-btn="false"
			:display-arrow="false"
			:available-languages="languages"
			label="Language choice. Current:"
			flags-url="https://res.cloudinary.com/deraw/image/upload/v1547044454/"
		/>
	</VLayout>
</template>

<script>
	export default {
		data() {
			return {
				languages: [
					'fr',
					'en'
				]
			};
		},
		methods: {
			updateLang(value) {
				// eslint-disable-next-line no-console
				console.log(value);
			}
		}
	};
</script>

<style scoped>
	.custom >>> .v-btn {
		padding: 0;
		min-width: 50px;
	}
</style>
