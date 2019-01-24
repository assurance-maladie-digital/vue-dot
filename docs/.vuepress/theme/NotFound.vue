<template>
	<VApp>
		<Toolbar />

		<VContent>
			<VContainer>
				 <VLayout align-center>
					<VFlex text-xs-center>
						<h1 class="display-2 primary--text mt-5 mb-3">{{ $t('error404.title') }}</h1>

						<p>{{ $t('error404.description') }}</p>

						<VBtn
							:to="`/${this.$i18n.locale}/guide/`"
							color="primary"
							outline
							exact
						>
							{{ $t('error404.button') }}
						</VBtn>
					</VFlex>
				</VLayout>
			</VContainer>
		</VContent>
	</VApp>
</template>

<script>
	import Toolbar from '../components/Toolbar.vue';

	export default {
		name: 'NotFound',
		components: {
			Toolbar
		},
		mounted() {
			// Redirect default route
			if (this.$route.path === '/') {
				this.$router.push(`/${this.$i18n.locale}/`);
			}
		}
	};
</script>
