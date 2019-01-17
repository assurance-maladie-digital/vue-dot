<template>
	<div>
		<VContainer>
			<VLayout
				column
				align-center
				justify-center
			>
				<img
					v-if="config.heroImage"
					class="logo"
					height="250"
					:src="config.heroImage"
				/>

				<h2
					v-if="config.heroTitle"
					class="display-3 font-weight-medium"
				>{{ config.heroTitle }}</h2>
				<p
					v-if="config.heroDescription"
					class="headline mt-4 grey--text text--darken-1"
				>{{ config.heroDescription }}</p>

				<VLayout class="mt-4">
					<VBtn
						v-if="config.actionText && config.actionLink"
						large
						:to="config.actionLink"
						color="primary"
					>
						{{ config.actionText }}
					</VBtn>

					<VBtn
						v-if="config.githubText && config.githubLink"
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
					v-if="config.cards"
					class="mt-5 section-cards"
				>
					<VCard
						v-for="(card, index) in config.cards"
						:key="index"
						class="elevation-6"
					>
						<VImg
							v-if="card.image"
							:src="card.image"
							height="150"
						/>

						<VCardTitle primary-title>
							<div>
								<h3
									v-if="card.title"
									class="headline mb-2 font-weight-medium"
								>
									{{ card.title }}
								</h3>

								<p
									v-if="card.text"
									v-html="md(card.text)"
									class="pa-0"
								/>
							</div>
						</VCardTitle>
					</VCard>
				</section>

				<VBtn
					v-if="config.newsletterText && config.newsletterLink"
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

<style>
	.section-cards {
		display: grid;
		grid-gap: 32px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: minmax(300px, auto);
	}
</style>
