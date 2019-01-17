<template>
	<VApp :dark="dark">
		<VNavigationDrawer
			v-model="drawer"
			app
			fixed
		>
			<VList dense>
				<VListTile>
					<VListTileAction>
						<VIcon>home</VIcon>
					</VListTileAction>

					<VListTileContent>
						<VListTileTitle>Home</VListTileTitle>
					</VListTileContent>
				</VListTile>

				<VListTile>
					<VListTileAction>
						<VIcon>contact_mail</VIcon>
					</VListTileAction>
					<VListTileContent>
						<VListTileTitle>Contact</VListTileTitle>
					</VListTileContent>
				</VListTile>
			</VList>
		</VNavigationDrawer>

		<VToolbar
			color="primary"
			dark
			fixed
			app
		>
			<VToolbarSideIcon @click.stop="drawer = !drawer" />
			<VToolbarTitle>Application</VToolbarTitle>

			<VSpacer />

			<VBtn
				:light="!dark"
				:dark="dark"
				color="white"
				primary
				flat
				@click="dark = !dark"
			>
				<span v-if="!dark">
					Dark mode
				</span>
				<span v-else>
					Light mode
				</span>
			</VBtn>
		</VToolbar>

		<VContent>
			<VContainer
				fluid
				fill-height
				class="pa-0"
			>
				<VLayout
					justify-center
					align-baseline
				>
					<VFlex
						class="flex-ctn pb-5 mb-5"
					>
						<VAlert
							:value="alert.value"
							:dismissible="alert.dismissible"
							:type="alert.type"
							:outline="alert.outline"
							:transition="alert.transition.value"
							class="mt-0"
						>
							This is an {{ alert.type }} alert!
						</VAlert>

						<div class="px-4 py-3 pb-5 mb-5">
							<VLayout wrap>
								<DataList
									:list=" [
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
											key: 'Date d\'inscription à l\'établissement universitaire',
											value: ''
										}
									]"
									:label-color="dark ? 'white' : '#757575'"
									:value-color="dark ? '#ccc' : '#333'"
									list-title="Test"
								/>
							</VLayout>

							<VDivider class="my-5" />

							<SvgIcon x-large>
								<svg viewBox="0 0 400 400">
									<path
										fill="#4dba87"
										d="M237.42 86.66L207.19 139l-30.22-52.35H76.3l130.9 226.69L338.07 86.66z"
									/>

									<path
										fill="#435466"
										d="M237.42 86.66L207.19 139l-30.22-52.35h-48.3l78.52 136 78.53-136z"
									/>
								</svg>
							</SvgIcon>

							<VDivider class="my-5" />

							<DatePicker birthdate />

							<VDivider class="my-5" />

							<LangBtn />

							<VDivider class="my-5" />

							<DatePicker v-model="date" />

							<p class="mb-0 mt-3">
								Date: {{ date }}
							</p>

							<VDivider class="my-5" />

							<h1>Playground</h1>
							<h2 class="accent--text">
								Alerts
							</h2>
							<p class="mt-2">
								The alert component is used to convey important information to the user. It comes in 4 variations, success, info, warning and error. These have default icons assigned which can be changed and represent different actions.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VBtn
									:color="alert.value ? 'error' : 'secondary'"
									secondary
									class="ma-0"
									@click="alert.value = !alert.value"
								>
									{{ alert.value ? 'Close' : 'Toggle' }}
								</VBtn>

								<VSelect
									v-model="alert.type"
									:items="alert.items"
									label="Type"
									class="alert-el ml-4"
								/>

								<VSwitch
									v-model="alert.dismissible"
									label="Dismissible"
									color="blueGreen"
									hide-details
									class="alert-el ml-4"
								/>

								<VSwitch
									v-model="alert.outline"
									label="Outline"
									color="primary"
									hide-details
									class="alert-el ml-4"
								/>

								<VSelect
									v-model="alert.transition.value"
									:items="alert.transition.items"
									:style="{ width: '320px' }"
									label="Transition"
									class="alert-el ml-4"
								/>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Avatars
							</h2>
							<p class="mt-2">
								The avatar component is used to control the size and border radius of responsive images, typically used to show profile pictures.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VSlider
									v-model="avatar.slider"
									:min="16"
									:max="256"
									label="Size"
									thumb-label
									color="primary"
									hide-details
								/>

								<VSelect
									v-model="avatar.mode"
									:items="avatar.items"
									label="Mode"
									class="alert-el ml-4"
								/>

								<VSwitch
									v-model="avatar.tile"
									label="Tile"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</VLayout>

							<VLayout
								align-center
								class="custom-layout mt-3"
								wrap
							>
								<VFlex
									align-center
									justify-center
									layout
									text-xs-center
								>
									<VAvatar
										:tile="avatar.tile"
										:size="avatarSize"
										color="white"
										class="avatar-border"
									>
										<img
											v-if="avatar.mode === 'image'"
											src="https://firebasestorage.googleapis.com/v0/b/vue-dot.appspot.com/o/vue.js.svg?alt=media&token=8de281bf-97bf-4c1e-a07c-aa859450a7a3"
											alt="Vue logo"
										>
										<VIcon v-if="avatar.mode === 'icon'">
											notifications
										</VIcon>
										<span
											v-if="avatar.mode === 'text'"
											class="headline"
										>
											J
										</span>
									</VAvatar>
								</VFlex>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Badges
							</h2>
							<p class="mt-2">
								The badge component can wrap any type of content to highlight information to a user or to just draw attention to a specific element.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VBtn
									:color="badge.value ? 'error' : 'secondary'"
									secondary
									class="ma-0"
									@click="badge.value = !badge.value"
								>
									{{ badge.value ? 'Close' : 'Toggle' }}
								</VBtn>

								<VSelect
									v-model="badge.position"
									:items="badge.items"
									:style="{ width: '200px' }"
									label="Position"
									class="alert-el ml-4"
								/>

								<VLayout
									class="alert-el ml-4"
									align-center
								>
									<p class="mb-0 mr-2">
										Icon:
									</p>
									<VTextField
										v-model="badge.icon"
										label="Icon"
										single-line
										color="primary"
										hide-details
									/>
								</VLayout>

								<VSwitch
									v-model="badge.overlap"
									label="Overlap"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</VLayout>

							<VLayout
								align-center
								class="mt-3"
								wrap
							>
								<VBadge
									:overlap="badge.overlap"
									:left="badge.position.match('left')"
									:bottom="badge.position.match('bottom')"
									:value="badge.value"
									color="primary"
								>
									<VIcon
										slot="badge"
										dark
										small
									>
										{{ badge.icon }}
									</VIcon>

									<VIcon
										color="grey darken-1"
										large
									>
										account_circle
									</VIcon>
								</VBadge>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Bottom navs
							</h2>
							<p class="mt-2">
								The bottom-nav is an alternative to the sidebar. It is primarily used on mobile and comes in two variants, icons and text, and shift.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VBtn
									:color="bottomNav.value ? 'error' : 'secondary'"
									secondary
									class="ma-0"
									@click="bottomNav.value = !bottomNav.value"
								>
									{{ bottomNav.value ? 'Close' : 'Toggle' }}
								</VBtn>

								<VSwitch
									v-model="bottomNav.monochrome"
									label="Monochrome"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="bottomNav.shift"
									label="Shift"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VBottomNav
									:active.sync="bottomNav.active"
									:color="bottomNav.monochrome ? 'secondary' : bottomNavColor"
									:value="bottomNav.value"
									:shift="bottomNav.shift"
									fixed
								>
									<VBtn dark>
										<span>Video</span>
										<VIcon>ondemand_video</VIcon>
									</VBtn>

									<VBtn dark>
										<span>Music</span>
										<VIcon>music_note</VIcon>
									</VBtn>

									<VBtn dark>
										<span>Book</span>
										<VIcon>book</VIcon>
									</VBtn>

									<VBtn dark>
										<span>Image</span>
										<VIcon>image</VIcon>
									</VBtn>
								</VBottomNav>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Bottom sheets
							</h2>
							<p class="mt-2">
								The bottom sheet is a modified dialog that slides from the bottom of the screen, similar to a bottom-nav. Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet can contain anything.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VBottomSheet
									v-model="bottomSheet.value"
									:hide-overlay="bottomSheet.hideOverlay"
									:inset="bottomSheet.inset"
									:persistent="bottomSheet.persistent"
								>
									<VBtn
										slot="activator"
										:color="bottomSheet.value ? 'error' : 'secondary'"
										secondary
										class="ma-0"
									>
										{{ bottomSheet.value ? 'Close' : 'Toggle' }}
									</VBtn>

									<VList>
										<VSubheader>Open in</VSubheader>

										<VListTile
											v-for="tile in bottomSheet.tiles"
											:key="tile.title"
											@click="bottomSheet.value = false"
										>
											<VListTileAvatar>
												<VAvatar
													size="32px"
													tile
												>
													<img
														:src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
														:alt="tile.title"
													>
												</VAvatar>
											</VListTileAvatar>

											<VListTileTitle>{{ tile.title }}</VListTileTitle>
										</VListTile>
									</VList>
								</VBottomSheet>

								<VSwitch
									v-model="bottomSheet.hideOverlay"
									label="Hide overlay"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="bottomSheet.inset"
									label="Inset"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="bottomSheet.persistent"
									label="Persistent"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Breadcrumbs
							</h2>
							<p class="mt-2">
								The breadcrumbs component is a navigational helper for pages. It can accept a Material Icons icon or text characters as a divider. An array of objects can be passed to the items property of the component. Additionally, a scoped slot exists for more control of the breadcrumbs, either utilizing breadcrumbs-item or other custom markup.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VLayout
									:style="{ maxWidth: '80px' }"
									class="alert-el ml-4"
									align-center
								>
									<p class="mb-0 mr-2">
										Divider:
									</p>
									<VTextField
										v-model="breadcrumbs.divider"
										label="Divider"
										color="primary"
										single-line
										hide-details
									/>
								</VLayout>

								<VSwitch
									v-model="breadcrumbs.large"
									label="Large"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</VLayout>

							<VLayout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-breadcrumbs
									:items="breadcrumbs.items"
									:divider="breadcrumbs.divider"
									:large="breadcrumbs.large"
								/>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Buttons
							</h2>
							<p class="mt-2">
								The btn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VSwitch
									v-model="button.block"
									label="Block"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.depressed"
									label="Depressed"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.disabled"
									label="Disabled"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.fab"
									label="Fab"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.flat"
									label="Flat"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.icon"
									label="Icon"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.large"
									label="Large"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.loading"
									label="Loading"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.outline"
									label="Outline"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.ripple"
									label="Ripple"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.round"
									label="Round"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="button.small"
									label="Small"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</VLayout>

							<VLayout
								align-center
								class="mt-3"
								wrap
							>
								<VBtn
									:block="button.block"
									:depressed="button.depressed"
									:disabled="button.disabled"
									:fab="button.fab"
									:flat="button.flat"
									:icon="button.icon"
									:large="button.large"
									:loading="button.loading"
									:outline="button.outline"
									:ripple="button.ripple"
									:round="button.round"
									:small="button.small"
									color="primary"
									primary
								>
									<span v-if="!button.fab && !button.icon">
										Success
									</span>

									<VIcon v-else>
										home
									</VIcon>
								</VBtn>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Buttons: Floating Action Button
							</h2>
							<p class="mt-2">
								The btn component can be used as a Floating action button. This provides an application a main point of action. Combined with the speed-dial component, you can create a diverse set of functions available for your users.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VBtn
									:color="fab.value ? 'error' : 'secondary'"
									secondary
									class="ma-0"
									@click="fab.value = !fab.value"
								>
									{{ fab.value ? 'Close' : 'Toggle' }}
								</VBtn>

								<VSelect
									v-model="fab.direction"
									:items="fab.items"
									label="Type"
									class="alert-el ml-4"
								/>

								<VSelect
									v-model="fab.transition.value"
									:items="fab.transition.items"
									:style="{ width: '250px' }"
									label="Transition"
									class="alert-el ml-4"
								/>

								<VSelect
									v-model="fab.position"
									:items="fab.positionItems"
									:style="{ width: '250px' }"
									label="Position"
									class="alert-el ml-4"
								/>

								<VSwitch
									v-model="fab.hover"
									:style="{ width: '160px' }"
									label="Open on hover"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VScaleTransition>
									<VSpeedDial
										v-if="fab.value"
										:top="!!fab.position.match('top')"
										:right="!!fab.position.match('right')"
										:left="!!fab.position.match('left')"
										:bottom="!!fab.position.match('bottom')"
										:direction="fab.direction"
										:open-on-hover="fab.hover"
										:transition="fab.transition.value"
										fixed
									>
										<VBtn
											slot="activator"
											v-model="fab.fab"
											color="blue darken-2"
											dark
											fab
										>
											<VIcon>account_circle</VIcon>
											<VIcon>close</VIcon>
										</VBtn>

										<VBtn
											fab
											dark
											small
											color="green"
										>
											<VIcon>edit</VIcon>
										</VBtn>

										<VBtn
											fab
											dark
											small
											color="indigo"
										>
											<VIcon>add</VIcon>
										</VBtn>

										<VBtn
											fab
											dark
											small
											color="red"
										>
											<VIcon>delete</VIcon>
										</VBtn>
									</VSpeedDial>
								</VScaleTransition>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Cards
							</h2>
							<p class="mt-2">
								The v-card component is a versatile component that can be used for anything from a panel to a static image. The card component has numerous helper components to make markup as easy as possible.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VSwitch
									v-model="card.flat"
									label="Flat"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="card.hover"
									label="Hover"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="card.raised"
									label="Raised"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="card.ripple"
									label="Ripple"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="card.tile"
									label="Tile"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="card.image"
									label="Image"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSlider
									v-model="card.width"
									:min="200"
									:max="1000"
									label="Width"
									thumb-label
									color="primary"
									hide-details
								/>
							</VLayout>

							<VLayout
								align-center
								class="custom-layout mt-3"
								wrap
							>
								<VCard
									:flat="card.flat"
									:hover="card.hover"
									:raised="card.raised"
									:ripple="card.ripple"
									:tile="card.tile"
									:width="card.width"
								>
									<VScaleTransition>
										<VImg
											v-if="card.image"
											src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
											aspect-ratio="2.75"
										/>
									</VScaleTransition>

									<VCardTitle primary-title>
										<div>
											<h3 class="headline mb-0">
												Kangaroo Valley Safari
											</h3>
											<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, etc.</div>
										</div>
									</VCardTitle>

									<VCardActions>
										<VBtn
											primary
											color="primary"
										>
											Share
										</VBtn>

										<VBtn
											color="primary"
											outline
											secondary
										>
											Explore
										</VBtn>
									</VCardActions>
								</VCard>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Carousels
							</h2>
							<p class="mt-2">
								The carousel component is used to display large numbers of visual content on a rotating timer.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VSwitch
									v-model="carousel.cycle"
									label="Cycle"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="carousel.hideControls"
									label="Hide controls"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="carousel.reverse"
									label="Reverse"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="carousel.vertical"
									label="Vertical"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSlider
									v-model="carousel.height"
									:min="200"
									:max="1000"
									label="Height"
									thumb-label
									color="primary"
									hide-details
								/>

								<VSwitch
									v-model="carousel.hideDelimiters"
									label="Hide delimiters"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</VLayout>

							<VLayout
								align-center
								class="custom-layout mt-4"
								wrap
							>
								<VCarousel
									:cycle="carousel.cycle"
									:hide-controls="carousel.hideControls"
									:hide-delimiters="carousel.hideDelimiters"
									:reverse="carousel.reverse"
									:vertical="carousel.vertical"
									:interval="carousel.interval"
									:height="carousel.height"
								>
									<VCarouselItem
										v-for="(item, i) in carousel.items"
										:key="i"
										:src="item.src"
									/>
								</VCarousel>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Chips
							</h2>
							<p class="mt-2">
								The chip component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction.
							</p>

							<h3 class="mt-4">
								Settings
							</h3>
							<VLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<VLayout
									align-center
									class="alert-el ml-4"
								>
									<p class="mb-0 mr-2">
										Color:
									</p>
									<VTextField
										v-model="chip.color"
										label="Color"
										color="primary"
										single-line
										hide-details
									/>
								</VLayout>

								<VLayout
									:style="{ width: '150px' }"
									class="alert-el ml-4"
									align-center
								>
									<p class="mb-0 mr-2">
										Text color:
									</p>
									<VTextField
										v-model="chip.textColor"
										label="Text color"
										color="primary"
										single-line
										hide-details
									/>
								</VLayout>

								<VSwitch
									v-model="chip.close"
									label="Close"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="chip.disabled"
									label="Disabled"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="chip.label"
									label="Label"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="chip.outline"
									label="Outline"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="chip.selected"
									label="Selected"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="chip.small"
									label="Small"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="chip.icon"
									label="Icon"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<VSwitch
									v-model="chip.avatar"
									label="Avatar"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</VLayout>

							<VLayout
								align-center
								class="custom-layout mt-3"
								wrap
							>
								<VChip
									:close="chip.close"
									:color="chip.color"
									:text-color="chip.textColor"
									:disabled="chip.disabled"
									:label="chip.label"
									:outline="chip.outline"
									:selected="chip.selected"
									:small="chip.small"
								>
									<VAvatar
										v-if="chip.avatar"
										class="primary"
									>
										A
									</VAvatar>

									Example Chip

									<VIcon
										v-if="chip.icon"
										right
									>
										star
									</VIcon>
								</VChip>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Custom - Typography
							</h2>
							<VLayout
								justify-start
								align-baseline
								class="custom-layout mt-3"
								column
							>
								<h1>H1 Title</h1>
								<h2>H2 Title</h2>
								<h3>H3 Title</h3>
								<h4>H4 Title</h4>
								<h5>H5 Title</h5>

								<a
									href="#"
									class="mt-3"
									aria-label="Demo link"
								>
									Link
								</a>

								<p class="mt-3 mb-1">
									Paragraph
								</p>
								<p class="font-weight-medium mb-1">
									Semi-bold paragraph
								</p>
								<p class="font-weight-bold mb-1">
									Bold paragraph
								</p>
								<p class="nota mb-1">
									Nota paragraph
								</p>
							</VLayout>

							<VDivider class="mt-5" />

							<h2 class="accent--text mt-5">
								Custom - Colors
							</h2>
							<p class="mt-2">
								These are generated from Vuetify theme, cutsom colors in theme and Material colors.
							</p>
							<ColorTable :dark="dark" />
						</div>
					</VFlex>
				</VLayout>
			</VContainer>
		</VContent>
		<VFooter
			color="primary"
			class="px-3"
			app
		>
			<VSpacer />

			<span class="white--text">
				v{{ pkg.version }} &copy; Dylan Broussard – 2018
			</span>
		</VFooter>
	</VApp>
</template>

<script lang="ts">
	// This is a playground, it is not tested because it isn't a part of the library
	import Vue from 'vue';

	import ColorTable from './components/ColorTable.vue';

	import { default as pkg } from '../package.json';

	export default Vue.extend({
		name: 'Playground',
		components: {
			ColorTable
		},
		data() {
			return {
				date: '',
				dark: false,
				drawer: null,
				alert: {
					value: false,
					type: 'info',
					items: [
						'success',
						'info',
						'warning',
						'error'
					],
					dismissible: true,
					outline: true,
					transition: {
						value: 'scale-transition',
						items: [
							'fade-transition',
							'scroll-x-transition',
							'scroll-x-reverse-transition',
							'scroll-y-transition',
							'scroll-y-reverse-transition',
							'slide-x-transition',
							'slide-x-reverse-transition',
							'slide-y-transition',
							'slide-y-reverse-transition',
							'scale-transition'
						]
					}
				},
				avatar: {
					slider: 56,
					tile: false,
					mode: 'image',
					items: [
						'image',
						'text',
						'icon'
					]
				},
				badge: {
					value: true,
					position: 'top-right',
					items: [
						'bottom-right',
						'bottom-left',
						'top-left',
						'top-right',
					],
					overlap: true,
					icon: 'done'
				},
				bottomNav: {
					value: false,
					active: 3,
					monochrome: true,
					shift: true
				},
				bottomSheet: {
					value: false,
					tiles: [
						{
							img: 'keep.png',
							title: 'Keep'
						},
						{
							img: 'inbox.png',
							title: 'Inbox'
						},
						{
							img: 'hangouts.png',
							title: 'Hangouts'
						},
						{
							img: 'messenger.png',
							title: 'Messenger'
						},
						{
							img: 'google.png',
							title: 'Google+'
						}
					],
					hideOverlay: false,
					inset: false,
					persistent: false
				},
				breadcrumbs: {
					items: [
						{
							text: 'Dashboard',
							disabled: false,
							href: 'breadcrumbs_dashboard'
						},
						{
							text: 'Demo Link 1',
							disabled: false,
							href: '#breadcrumbs_link_1'
						},
						{
							text: 'Demo Link 2',
							disabled: true,
							href: '#breadcrumbs_link_2'
						}
					],
					divider: '/',
					large: false
				},
				button: {
					block: false,
					depressed: true,
					disabled: false,
					fab: false,
					flat: false,
					icon: false,
					large: false,
					loading: false,
					outline: false,
					ripple: false,
					round: true,
					small: false
				},
				fab: {
					value: false,
					top: false,
					bottom: true,
					right: true,
					left: false,
					direction: 'top',
					hover: false,
					items: [
						'top',
						'bottom',
						'left',
						'right'
					],
					transition: {
						value: 'scale-transition',
						items: [
							'fade-transition',
							'scroll-x-transition',
							'scroll-x-reverse-transition',
							'scroll-y-transition',
							'scroll-y-reverse-transition',
							'slide-x-transition',
							'slide-x-reverse-transition',
							'slide-y-transition',
							'slide-y-reverse-transition',
							'scale-transition'
						]
					},
					position: 'bottom-right',
					positionItems: [
						'bottom-right',
						'bottom-left',
						'top-left',
						'top-right',
					]
				},
				card: {
					flat: false,
					hover: false,
					raised: false,
					ripple: false,
					tile: false,
					width: 550,
					image: true
				},
				carousel: {
					items: [
						{
							src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
						},
						{
							src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
						},
						{
							src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
						},
						{
							src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
						}
					],
					cycle: true,
					hideControls: false,
					hideDelimiters: false,
					interval: '6000',
					reverse: false,
					vertical: false,
					height: '500'
				},
				chip: {
					close: false,
					color: 'accent',
					textColor: 'white',
					disabled: false,
					label: false,
					outline: false,
					selected: false,
					small: false,
					icon: false,
					avatar: true
				},
				pkg
			};
		},
		computed: {
			avatarSize(): string {
				return `${this.avatar.slider}px`;
			},
			bottomNavColor(): string | undefined {
				switch (this.bottomNav.active) {
					case 0: return 'blue-grey';
					case 1: return 'teal';
					case 2: return 'brown';
					case 3: return 'indigo';
					default: return 'primary';
				}
			}
		},
		created() {
			setTimeout(() => this.alert.value = true, 200);
		}
	});
</script>

<style lang="scss">
	@font-face {
		font-family: 'OSP-DIN';
		src: url('./fonts/osp-din-webfont.woff') format('woff'),
			url('./fonts/osp-din-webfont.ttf') format('ttf');
		font-weight: 400;
	}

	html,
	body {
		font-size: 100% !important;
	}

	.v-sheet {
		max-width: 100% !important;
	}
</style>

<style lang="scss" scoped>
	.flex-ctn {
		padding-top: 60px;
	}

	.alert-el {
		margin-top: 0;
		width: 150px;
	}

	.avatar-border {
		box-shadow: inset 0 0 1px #000;
	}

	.custom-layout > * {
		flex: none;
	}
</style>
