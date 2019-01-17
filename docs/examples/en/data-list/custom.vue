<template>
	<VLayout
		align-center
		justify-space-around
	>
		<DataList
			:list="data"
			column
			width="500px"
			label-color="#0077c5"
			title-class="mb-3 display-1 info--text"
			list-title="Informations"
			placeholder="No data"
		/>
	</VLayout>
</template>

<script>
	export default {
		data() {
			return {
				data: [
					{
						key: 'Civility',
						value: 'M.'
					},
					{
						key: 'Name',
						value: 'Dupont'
					},
					{
						key: 'First name',
						value: 'Paul'
					},
					{
						key: 'Birth date',
						value: '09/24/1970'
					},
					{
						key: 'Nationality',
						value: 'French'
					},
					{
						key: 'Native country',
						value: 'France'
					},
					{
						key: 'Date of registration',
						value: ''
					}
				]
			};
		}
	};
</script>
