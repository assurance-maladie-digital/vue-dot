<template>
	<div>
		<VContainer>
			<VLayout
				column
				align-center
				justify-center
			>
				<img
					v-show="config.heroImage"
					class="logo"
					height="250"
					:src="$withBase(config.heroImage)"
					alt=""
				/>

				<h2
					v-show="config.heroTitle"
					class="text-center display-3 font-weight-medium"
				>
					{{ config.heroTitle }}
				</h2>

				<p
					v-show="config.heroDescription"
					class="text-center headline mt-4 grey--text text--darken-1"
				>
					{{ config.heroDescription }}
				</p>

				<VLayout
					wrap
					justify-center
					class="mt-4"
				>
					<VBtn
						v-show="config.actionText && config.actionLink"
						large
						:to="config.actionLink"
						color="primary"
					>
						{{ config.actionText }}
					</VBtn>

					<VBtn
						v-show="config.githubText && config.githubLink"
						large
						:href="config.githubLink"
						target="_blank"
						rel="noopener noreferrer"
						color="primary"
						outline
					>
						<SvgIcon
							icon="github"
							class="mr-2"
						/>

						{{ config.githubText }}
					</VBtn>
				</VLayout>

				<section
					v-show="config.cards"
					class="mt-5 section-cards"
				>
					<VCard
						v-for="(card, index) in config.cards"
						:key="index"
						class="elevation-6"
					>
						<img
							v-show="card.image"
							:src="$withBase(card.image)"
							height="150"
							class="home-image"
						>

						<VCardTitle primary-title>
							<div>
								<h3
									v-show="card.title"
									class="headline mb-2 font-weight-medium"
								>
									{{ card.title }}
								</h3>

								<p
									v-show="card.text"
									v-html="md(card.text)"
									class="pa-0"
								/>
							</div>
						</VCardTitle>
					</VCard>
				</section>

				<VBtn
					v-show="config.newsletterText && config.newsletterLink"
					large
					outline
					color="accent"
					class="mt-5"
					:href="config.newsletterLink"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SvgIcon
						icon="envelope-email"
						class="mr-2"
					/>

					{{ config.newsletterText }}
				</VBtn>
			</VLayout>
		</VContainer>
	</div>
</template>

<script>
	import md from '../functions/md';

	export default {
		name: 'Home',
		computed: {
			config() {
				return this.$page.frontmatter;
			}
		},
		methods: {
			md
		}
	}
</script>

<style lang="scss">
	.section-cards {
		display: flex;
		flex-wrap: wrap;

		.v-card {
			margin: 15px;
			width: 300px;
		}
	}

	@supports (display: grid) {
		.section-cards {
			display: grid;
			grid-gap: 32px;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			grid-auto-rows: minmax(300px, auto);

			.v-card {
				margin: 0;
				width: auto;
			}
		}
	}

	.home-image {
		width: 100%;
		display: block;
		object-fit: cover;
	}

	@media only screen and (max-width: 400px) {
		.section-cards {
			display: block;
		}

		.section-cards > * + * {
			margin-top: 32px;
		}
	}
</style>
