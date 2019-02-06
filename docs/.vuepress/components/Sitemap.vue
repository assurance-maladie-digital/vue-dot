<template>
	<VList
		expand
		:class="{ 'transparent': transparentBg }"
	>
		<template v-for="(item, index) in items">
			<VListTile
				v-show="!item.items"
				:key="item.title"
				:to="item.to || null"
				:href="item.href || null"
				:target="item.href ? '_blank' : null"
				:rel="item.href ? 'noopener noreferrer' : null"
				ripple
				exact
			>
				<VListTileContent>
					<VListTileTitle>
						<SvgIcon
							v-show="item.icon"
							:icon="item.icon"
							class="mr-3"
						/>

						<span>{{ item.title }}</span>
					</VListTileTitle>
				</VListTileContent>
			</VListTile>

			<VListGroup
				v-show="item.items"
				:key="`group-${index}`"
				:group="item.group"
				:value="!isClient"
				no-action
				active-class="primary--text your-class"
			>
				<VListTile
					:to="item.to"
					slot="activator"
					ripple
					exact
				>
					<VListTileContent>
						<VListTileTitle>
							<SvgIcon
								v-show="item.icon"
								:icon="item.icon"
								class="mr-3"
							/>

							<span>{{ item.title }}</span>
						</VListTileTitle>
					</VListTileContent>
				</VListTile>

				<VListTile
					v-for="item in item.items"
					:key="`sub-${item.title}`"
					:to="item.to"
					ripple
					exact
				>
					<VListTileContent>
						<VListTileTitle>
							<span>{{ item.title }}</span>
						</VListTileTitle>
					</VListTileContent>
				</VListTile>
			</VListGroup>
		</template>
	</VList>
</template>

<script>
	export default {
		name: 'Sitemap',
		data() {
			return {
				items: []
			};
		},
		props: {
			transparentBg: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			$page: {
				handler() {
					this.setLang();
					this.updateItems();
				},
				immediate: true
			}
		},
		methods: {
			updateItems() {
				this.items = this.t('toolbar.sidebarItems');
			}
		}
	};
</script>
