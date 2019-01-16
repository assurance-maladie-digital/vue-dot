<template>
	<XApp :dark="dark">
		<XNavigationDrawer
			v-model="drawer"
			app
			fixed
		>
			<XList dense>
				<XListTile>
					<XListTileAction>
						<XIcon>home</XIcon>
					</XListTileAction>

					<XListTileContent>
						<XListTileTitle>Home</XListTileTitle>
					</XListTileContent>
				</XListTile>

				<XListTile>
					<XListTileAction>
						<XIcon>contact_mail</XIcon>
					</XListTileAction>
					<XListTileContent>
						<XListTileTitle>Contact</XListTileTitle>
					</XListTileContent>
				</XListTile>
			</XList>
		</XNavigationDrawer>

		<XToolbar
			color="primary"
			dark
			fixed
			app
		>
			<XToolbarSideIcon @click.stop="drawer = !drawer" />
			<XToolbarTitle>Application</XToolbarTitle>

			<XSpacer />
			<XBtn
				:light="!dark"
				:dark="dark"
				color="white"
				primary
				flat
				@click="dark = !dark"
			>
				<span v-if="!dark">Dark mode</span>
				<span v-else>Light mode</span>
			</XBtn>
		</XToolbar>

		<XContent>
			<XContainer
				fluid
				fill-height
				class="pa-0"
			>
				<XLayout
					justify-center
					align-baseline
				>
					<XFlex
						class="flex-ctn pb-5 mb-5"
					>
						<XAlert
							:value="alert.value"
							:dismissible="alert.dismissible"
							:type="alert.type"
							:outline="alert.outline"
							:transition="alert.transition.value"
							class="mt-0"
						>
							This is an {{ alert.type }} alert!
						</XAlert>

						<div class="px-4 py-3 pb-5 mb-5">
							<VLayout wrap>
								<XDataList
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

							<XDivider class="my-5" />

							<XSvgIcon x-large>
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
							</XSvgIcon>

							<XDivider class="my-5" />

							<XDatePicker birthdate />

							<XDivider class="my-5" />

							<XLangBtn />

							<XDivider class="my-5" />

							<XDatePicker v-model="date" />

							<p class="mb-0 mt-3">Date: {{ date }}</p>

							<XDivider class="my-5" />

							<h1>Playground</h1>
							<h2 class="accent--text">Alerts</h2>
							<p class="mt-2">The alert component is used to convey important information to the user. It comes in 4 variations, success, info, warning and error. These have default icons assigned which can be changed and represent different actions.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XBtn
									:color="alert.value ? 'error' : 'secondary'"
									secondary
									class="ma-0"
									@click="alert.value = !alert.value"
								>
									{{ alert.value ? 'Close' : 'Toggle' }}
								</XBtn>

								<XSelect
									:items="alert.items"
									v-model="alert.type"
									label="Type"
									class="alert-el ml-4"
								/>

								<XSwitch
									v-model="alert.dismissible"
									label="Dismissible"
									color="blueGreen"
									hide-details
									class="alert-el ml-4"
								/>

								<XSwitch
									v-model="alert.outline"
									label="Outline"
									color="primary"
									hide-details
									class="alert-el ml-4"
								/>

								<XSelect
									:items="alert.transition.items"
									v-model="alert.transition.value"
									:style="{ width: '320px' }"
									label="Transition"
									class="alert-el ml-4"
								/>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Avatars</h2>
							<p class="mt-2">The avatar component is used to control the size and border radius of responsive images, typically used to show profile pictures.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XSlider
									v-model="avatar.slider"
									:min="16"
									:max="256"
									label="Size"
									thumb-label
									color="primary"
									hide-details
								/>

								<XSelect
									:items="avatar.items"
									v-model="avatar.mode"
									label="Mode"
									class="alert-el ml-4"
								/>

								<XSwitch
									v-model="avatar.tile"
									label="Tile"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</XLayout>

							<XLayout
								align-center
								class="custom-layout mt-3"
								wrap
							>
								<XFlex
									align-center
									justify-center
									layout
									text-xs-center
								>
									<XAvatar
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
										<XIcon v-if="avatar.mode === 'icon'">notifications</XIcon>
										<span
											v-if="avatar.mode === 'text'"
											class="headline"
										>
											J
										</span>
									</XAvatar>
								</XFlex>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Badges</h2>
							<p class="mt-2">The badge component can wrap any type of content to highlight information to a user or to just draw attention to a specific element.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XBtn
									:color="badge.value ? 'error' : 'secondary'"
									secondary
									class="ma-0"
									@click="badge.value = !badge.value"
								>
									{{ badge.value ? 'Close' : 'Toggle' }}
								</XBtn>

								<XSelect
									:items="badge.items"
									v-model="badge.position"
									:style="{ width: '200px' }"
									label="Position"
									class="alert-el ml-4"
								/>

								<XLayout
									class="alert-el ml-4"
									align-center
								>
									<p class="mb-0 mr-2">Icon:</p>
									<XTextField
										v-model="badge.icon"
										label="Icon"
										single-line
										color="primary"
										hide-details
									/>
								</XLayout>

								<XSwitch
									v-model="badge.overlap"
									label="Overlap"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</XLayout>

							<XLayout
								align-center
								class="mt-3"
								wrap
							>
								<XBadge
									:overlap="badge.overlap"
									:left="badge.position.match('left')"
									:bottom="badge.position.match('bottom')"
									:value="badge.value"
									color="primary"
								>
									<XIcon
										slot="badge"
										dark
										small
									>
										{{ badge.icon }}
									</XIcon>

									<XIcon
										color="grey darken-1"
										large
									>
										account_circle
									</XIcon>
								</XBadge>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Bottom navs</h2>
							<p class="mt-2">The bottom-nav is an alternative to the sidebar. It is primarily used on mobile and comes in two variants, icons and text, and shift.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XBtn
									:color="bottomNav.value ? 'error' : 'secondary'"
									secondary
									class="ma-0"
									@click="bottomNav.value = !bottomNav.value"
								>
									{{ bottomNav.value ? 'Close' : 'Toggle' }}
								</XBtn>

								<XSwitch
									v-model="bottomNav.monochrome"
									label="Monochrome"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="bottomNav.shift"
									label="Shift"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XBottomNav
									:active.sync="bottomNav.active"
									:color="bottomNav.monochrome ? 'secondary' : bottomNavColor"
									:value="bottomNav.value"
									:shift="bottomNav.shift"
									fixed
								>
									<XBtn dark>
										<span>Video</span>
										<XIcon>ondemand_video</XIcon>
									</XBtn>

									<XBtn dark>
										<span>Music</span>
										<XIcon>music_note</XIcon>
									</XBtn>

									<XBtn dark>
										<span>Book</span>
										<XIcon>book</XIcon>
									</XBtn>

									<XBtn dark>
										<span>Image</span>
										<XIcon>image</XIcon>
									</XBtn>
								</XBottomNav>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Bottom sheets</h2>
							<p class="mt-2">The bottom sheet is a modified dialog that slides from the bottom of the screen, similar to a bottom-nav. Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet can contain anything.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XBottomSheet
									:hide-overlay="bottomSheet.hideOverlay"
									v-model="bottomSheet.value"
									:inset="bottomSheet.inset"
									:persistent="bottomSheet.persistent"
								>
									<XBtn
										slot="activator"
										:color="bottomSheet.value ? 'error' : 'secondary'"
										secondary
										class="ma-0"
									>
										{{ bottomSheet.value ? 'Close' : 'Toggle' }}
									</XBtn>

									<XList>
										<XSubheader>Open in</XSubheader>

										<XListTile
											v-for="tile in bottomSheet.tiles"
											:key="tile.title"
											@click="bottomSheet.value = false"
										>
											<VListTileAvatar>
												<XAvatar
													size="32px"
													tile
												>
													<img
														:src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
														:alt="tile.title"
													>
												</XAvatar>
											</VListTileAvatar>

											<XListTileTitle>{{ tile.title }}</XListTileTitle>
										</XListTile>
									</XList>
								</XBottomSheet>

								<XSwitch
									v-model="bottomSheet.hideOverlay"
									label="Hide overlay"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="bottomSheet.inset"
									label="Inset"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="bottomSheet.persistent"
									label="Persistent"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Breadcrumbs</h2>
							<p class="mt-2">The breadcrumbs component is a navigational helper for pages. It can accept a Material Icons icon or text characters as a divider. An array of objects can be passed to the items property of the component. Additionally, a scoped slot exists for more control of the breadcrumbs, either utilizing breadcrumbs-item or other custom markup.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XLayout
									:style="{ maxWidth: '80px' }"
									class="alert-el ml-4"
									align-center
								>
									<p class="mb-0 mr-2">Divider:</p>
									<XTextField
										v-model="breadcrumbs.divider"
										label="Divider"
										color="primary"
										single-line
										hide-details
									/>
								</XLayout>

								<XSwitch
									v-model="breadcrumbs.large"
									label="Large"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</XLayout>

							<XLayout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-breadcrumbs
									:items="breadcrumbs.items"
									:divider="breadcrumbs.divider"
									:large="breadcrumbs.large"
								/>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Buttons</h2>
							<p class="mt-2">The btn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XSwitch
									v-model="button.block"
									label="Block"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.depressed"
									label="Depressed"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.disabled"
									label="Disabled"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.fab"
									label="Fab"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.flat"
									label="Flat"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.icon"
									label="Icon"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.large"
									label="Large"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.loading"
									label="Loading"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.outline"
									label="Outline"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.ripple"
									label="Ripple"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.round"
									label="Round"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="button.small"
									label="Small"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</XLayout>

							<XLayout
								align-center
								class="mt-3"
								wrap
							>
								<XBtn
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
									<span v-if="!button.fab && !button.icon">Success</span>

									<XIcon v-else>home</XIcon>
								</XBtn>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Buttons: Floating Action Button</h2>
							<p class="mt-2">The btn component can be used as a Floating action button. This provides an application a main point of action. Combined with the speed-dial component, you can create a diverse set of functions available for your users.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XBtn
									:color="fab.value ? 'error' : 'secondary'"
									secondary
									class="ma-0"
									@click="fab.value = !fab.value"
								>
									{{ fab.value ? 'Close' : 'Toggle' }}
								</XBtn>

								<XSelect
									:items="fab.items"
									v-model="fab.direction"
									label="Type"
									class="alert-el ml-4"
								/>

								<XSelect
									:items="fab.transition.items"
									v-model="fab.transition.value"
									:style="{ width: '250px' }"
									label="Transition"
									class="alert-el ml-4"
								/>

								<XSelect
									:items="fab.positionItems"
									v-model="fab.position"
									:style="{ width: '250px' }"
									label="Position"
									class="alert-el ml-4"
								/>

								<XSwitch
									v-model="fab.hover"
									:style="{ width: '160px' }"
									label="Open on hover"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XScaleTransition>
									<XSpeedDial
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
										<XBtn
											slot="activator"
											v-model="fab.fab"
											color="blue darken-2"
											dark
											fab
										>
											<XIcon>account_circle</XIcon>
											<XIcon>close</XIcon>
										</XBtn>
										<XBtn
											fab
											dark
											small
											color="green"
										>
											<XIcon>edit</XIcon>
										</XBtn>
										<XBtn
											fab
											dark
											small
											color="indigo"
										>
											<XIcon>add</XIcon>
										</XBtn>
										<XBtn
											fab
											dark
											small
											color="red"
										>
											<XIcon>delete</XIcon>
										</XBtn>
									</XSpeedDial>
								</XScaleTransition>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Cards</h2>
							<p class="mt-2">The v-card component is a versatile component that can be used for anything from a panel to a static image. The card component has numerous helper components to make markup as easy as possible.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XSwitch
									v-model="card.flat"
									label="Flat"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="card.hover"
									label="Hover"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="card.raised"
									label="Raised"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="card.ripple"
									label="Ripple"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="card.tile"
									label="Tile"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="card.image"
									label="Image"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSlider
									v-model="card.width"
									:min="200"
									:max="1000"
									label="Width"
									thumb-label
									color="primary"
									hide-details
								/>
							</XLayout>

							<XLayout
								align-center
								class="custom-layout mt-3"
								wrap
							>
								<XCard
									:flat="card.flat"
									:hover="card.hover"
									:raised="card.raised"
									:ripple="card.ripple"
									:tile="card.tile"
									:width="card.width"
								>
									<XScaleTransition>
										<XImg
											v-if="card.image"
											src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
											aspect-ratio="2.75"
										/>
									</XScaleTransition>

									<XCardTitle primary-title>
										<div>
											<h3 class="headline mb-0">Kangaroo Valley Safari</h3>
											<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, etc.</div>
										</div>
									</XCardTitle>

									<XCardActions>
										<XBtn
											primary
											color="primary"
										>Share</XBtn>
										<XBtn
											color="primary"
											outline
											secondary
										>Explore</XBtn>
									</XCardActions>
								</XCard>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Carousels</h2>
							<p class="mt-2">The carousel component is used to display large numbers of visual content on a rotating timer.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XSwitch
									v-model="carousel.cycle"
									label="Cycle"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="carousel.hideControls"
									label="Hide controls"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="carousel.reverse"
									label="Reverse"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="carousel.vertical"
									label="Vertical"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSlider
									v-model="carousel.height"
									:min="200"
									:max="1000"
									label="Height"
									thumb-label
									color="primary"
									hide-details
								/>

								<XSwitch
									v-model="carousel.hideDelimiters"
									label="Hide delimiters"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</XLayout>

							<XLayout
								align-center
								class="custom-layout mt-4"
								wrap
							>
								<XCarousel
									:cycle="carousel.cycle"
									:hide-controls="carousel.hideControls"
									:hide-delimiters="carousel.hideDelimiters"
									:reverse="carousel.reverse"
									:vertical="carousel.vertical"
									:interval="carousel.interval"
									:height="carousel.height"
								>
									<XCarouselItem
										v-for="(item, i) in carousel.items"
										:key="i"
										:src="item.src"
									/>
								</XCarousel>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Chips</h2>
							<p class="mt-2">The chip component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction.</p>

							<h3 class="mt-4">Settings</h3>
							<XLayout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<XLayout
									align-center
									class="alert-el ml-4"
								>
									<p class="mb-0 mr-2">Color:</p>
									<XTextField
										v-model="chip.color"
										label="Color"
										color="primary"
										single-line
										hide-details
									/>
								</XLayout>

								<XLayout
									:style="{ width: '150px' }"
									class="alert-el ml-4"
									align-center
								>
									<p class="mb-0 mr-2">Text color:</p>
									<XTextField
										v-model="chip.textColor"
										label="Text color"
										color="primary"
										single-line
										hide-details
									/>
								</XLayout>

								<XSwitch
									v-model="chip.close"
									label="Close"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="chip.disabled"
									label="Disabled"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="chip.label"
									label="Label"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="chip.outline"
									label="Outline"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="chip.selected"
									label="Selected"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="chip.small"
									label="Small"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="chip.icon"
									label="Icon"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<XSwitch
									v-model="chip.avatar"
									label="Avatar"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</XLayout>

							<XLayout
								align-center
								class="custom-layout mt-3"
								wrap
							>
								<XChip
									:close="chip.close"
									:color="chip.color"
									:text-color="chip.textColor"
									:disabled="chip.disabled"
									:label="chip.label"
									:outline="chip.outline"
									:selected="chip.selected"
									:small="chip.small"
								>
									<XAvatar
										v-if="chip.avatar"
										class="primary"
									>A</XAvatar>
									Example Chip
									<XIcon
										v-if="chip.icon"
										right
									>star</XIcon>
								</XChip>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Custom - Typography</h2>
							<XLayout
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
								>Link</a>

								<p class="mt-3 mb-1">Paragraph</p>
								<p class="font-weight-medium mb-1">Semi-bold paragraph</p>
								<p class="font-weight-bold mb-1">Bold paragraph</p>
								<p class="nota mb-1">Nota paragraph</p>
							</XLayout>

							<XDivider class="mt-5" />

							<h2 class="accent--text mt-5">Custom - Colors</h2>
							<p class="mt-2">These are generated from Vuetify theme, cutsom colors in theme and Material colors.</p>
							<XColorTable :dark="dark" />
						</div>
					</XFlex>
				</XLayout>
			</XContainer>
		</XContent>
		<XFooter
			color="primary"
			class="px-3"
			app
		>
			<XSpacer />
			<span class="white--text">v{{ pkg.version }} &copy; Dylan Broussard – 2018</span>
		</XFooter>
	</XApp>
</template>

<script lang="ts">
	// This is a playground, it is not tested because it isn't a part of the library
	import Vue from 'vue';

	import XColorTable from './components/ColorTable.vue';

	import { default as pkg } from '../package.json';

	export default Vue.extend({
		name: 'XPlayground',
		components: {
			XColorTable
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
