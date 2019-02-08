<template>
	<div class="custom-ctn">
		<Content />

		<VFabTransition>
			<VBtn
				v-show="offsetTop > 0 && isClient"
				color="accent"
				dark
				fixed
				bottom
				right
				fab
				class="transition"
				v-scroll="onScroll"
				:aria-label="t('backToTop')"
				@click="$vuetify.goTo(0)"
			>
				<VIcon>keyboard_arrow_up</VIcon>
			</VBtn>
		</VFabTransition>
	</div>
</template>

<script>
	export default {
		name: 'Basic',
			data() {
				return {
					offsetTop: 0
				};
			},
		methods: {
			onScroll(e) {
				if (typeof window !== 'undefined' && typeof document !== 'undefined') {
					this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
				}
			}
		}
	}
</script>
