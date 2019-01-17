<template>
	<VContainer fluid>
		<VLayout
			v-for="(size, index) in sizes"
			:key="index"
			align-center
			justify-space-around
			class="mb-2"
		>
			<span
				v-for="i in 2"
				:key="i"

				class="group pa-2"
				:class="{ 'white--text pa-2 primary': i === 2 }"
			>
				<span
					v-for="(icon, i) in icons"
					:key="i"
					class="d-flex align-center"
				>
					<span v-if="icon.text">
						Texte
					</span>

					<SvgIcon
						:icon="icon.name"
						:class="{
							'ml-2': icon.text,
							'success--text': icon.success
						}"
						:color="icon.color"

						:small="size === 'small'"
						:medium="size === 'medium'"
						:large="size === 'large'"
						:x-large="size === 'x-large'"
					/>
				</span>
			</span>
		</VLayout>
	</VContainer>
</template>

<script>
	export default {
		data() {
			return {
				sizes: [
					'small',
					'standard',
					'medium',
					'large',
					'x-large'
				],
				icons: [
					{
						name: 'home',
						text: true,
						color: undefined,
						success: false
					},
					{
						name: 'calendar',
						text: false,
						color: '#01579b',
						success: false
					},
					{
						name: 'rounded-info',
						text: false,
						color: undefined,
						success: true
					}
				]
			};
		}
	};
</script>

<style>
	.group {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.group.white--text * {
		color: #fff !important;
	}
</style>
