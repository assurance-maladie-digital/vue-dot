<template>
	<VLayout
		align-center
		justify-space-around
	>
		<DataList
			:list="data"
			flex
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
						key: 'Civilité',
						value: 'M.'
					},
					{
						key: 'Nom',
						value: 'Dupont'
					},
					{
						key: 'Prénom',
						value: 'Paul'
					},
					{
						key: 'Date de naissance',
						value: '24/09/1970'
					},
					{
						key: 'Nationalité',
						value: 'Français'
					},
					{
						key: 'Pays de naissance',
						value: 'France'
					},
					{
						key: 'Date d\'incription',
						value: ''
					}
				]
			};
		}
	};
</script>
