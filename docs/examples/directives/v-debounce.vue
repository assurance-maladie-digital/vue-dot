<template>
	<VLayout column>
		<h2 class="mt-0 headline">
			Native input
		</h2>
		<input
			v-model.lazy="text"
			v-debounce="1000"

			placeholder="Type here"
			class="simple-input"
		>

		<h2 class="headline">
			Vuetify Text Field
		</h2>

		<VTextField
			v-debounce.1000="e => text = e"
			:value="text"

			label="Type here"
		/>

		<p class="mb-0 mt-3">
			Debounced text: <span class="font-weight-medium">
				{{ text }}
			</span>
		</p>
	</VLayout>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			};
		}
	};
</script>

<style scoped>
	.simple-input {
		outline: 0;
		width: 100%;
		padding: 5px 0;
		color: inherit;
		margin-top: 20px;
		font-size: 1rem;
		border-bottom: 1px solid rgba(0, 0, 0, .42);
	}

	.simple-input:focus {
		color: #01579b;
		border-color: #01579b;
	}
</style>
