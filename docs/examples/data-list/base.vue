<template>
	<VLayout
		align-center
		justify-space-around
	>
		<DataList
			:list="data"
			list-title="Informations"
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
