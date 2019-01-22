<template>
	<VLayout
		align-center
		justify-space-around
	>
		<DatePicker
			hint=""
			label="Дата"
			date-format="DD.MM.YYYY"
			locale="ru"
			single-line
			hide-details
			top
			:nudge-bottom="0"
			origin="bottom left"
		/>
	</VLayout>
</template>
