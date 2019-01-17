<template>
	<VLayout
		column
		align-center
	>
		<DatePicker
			v-model="date"
			locale="en"
			date-format="MM DD YYYY"
			date-format-return="MM/DD/YYYY"
		/>

		<p class="mb-0 mt-5">
			Date: {{ date }}
		</p>
	</VLayout>
</template>

<script>
	export default {
		data() {
			return {
				date: ''
			};
		}
	};
</script>

