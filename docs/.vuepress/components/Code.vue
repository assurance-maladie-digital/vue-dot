<template>
	<div class="markup">
		<Prism
			v-if="lang && code"
			:language="lang"
			:code="code"
		/>
		<slot v-else />

		<div
			v-if="isClient"
			class="v-markup__copy"
		>
			<VSlideXTransition>
				<span
					v-show="copied"
					class="v-markup__copied white--text"
				>
					Copied
				</span>
			</VSlideXTransition>

			<VBtn
				icon
				title="Copy"
				@click="copyMarkup"
				aria-label="Copy"
			>
				<SvgIcon
					color="#fff"
					icon="copy-content"
				/>
			</VBtn>
		</div>
	</div>
</template>

<script>
	import Prism from 'vue-prism-component';

	export default {
		name: 'Code',
		components: {
			Prism
		},
		data() {
			return {
				copied: false
			};
		},
		props: {
			lang: {
				type: String,
				default: undefined
			},
			code: {
				type: String,
				default: undefined
			}
		},
		methods: {
			copyMarkup () {
				const markup = this.$el.querySelector('pre');

				markup.setAttribute('contenteditable', 'true');
				markup.focus();

				document.execCommand('selectAll', false, null);
				this.copied = document.execCommand('copy');

				markup.removeAttribute('contenteditable');

				setTimeout(() => { this.copied = false }, 2000);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.markup {
		position: relative;

		/deep/ .v-markup__copy {
			top: 0;
			right: 0;
			z-index: 1;
			opacity: 0;
			cursor: pointer;
			transition: .25s;
			position: absolute;
		}

		&:hover,
		&:focus {
			/deep/ .v-markup__copy {
				opacity: 1;
			}
		}
	}
</style>
