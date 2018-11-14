<template>
	<v-app :dark="dark">
		<v-navigation-drawer
			v-model="drawer"
			fixed
			app
		>
			<v-list dense>
				<v-list-tile>
					<v-list-tile-action>
						<v-icon>home</v-icon>
					</v-list-tile-action>

					<v-list-tile-content>
						<v-list-tile-title>Home</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>

				<v-list-tile>
					<v-list-tile-action>
						<v-icon>contact_mail</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Contact</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>

		<v-toolbar
			color="primary"
			dark
			fixed
			app
		>
			<v-toolbar-side-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title>Application</v-toolbar-title>

			<v-spacer />
			<v-btn
				@click="dark = !dark"
				:color="dark ? 'white' : 'primary darken-3'"
				:light="dark"
			>
				<span v-if="!dark">Dark mode</span>
				<span v-else>Light mode</span>
			</v-btn>
		</v-toolbar>

		<v-content>
			<v-container
				fluid
				fill-height
				class="pa-0"
			>
				<v-layout
					justify-center
					align-baseline
				>
					<v-flex
						class="flex-ctn pb-5 mb-5"
					>
						<v-alert
							v-model="alert.value"
							:dismissible="alert.dismissible"
							:type="alert.type"
							:outline="alert.outline"
							class="mt-0"
							:transition="alert.transition.value"
						>
							This is an {{ alert.type }} alert!
						</v-alert>

						<div class="px-4 py-3 pb-5 mb-5">
							<h2 class="font-weight-bold headline primary--text">Alerts</h2>
							<p class="mt-2">The alert component is used to convey important information to the user. It comes in 4 variations, success, info, warning and error. These have default icons assigned which can be changed and represent different actions.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-2"
								wrap
							>
								<v-btn
									outline
									color="primary"
									@click="alert.value = !alert.value"
									class="ma-0"
								>
									Toggle
								</v-btn>

								<v-select
									color="primary"
									:items="alert.items"
									label="Type"
									v-model="alert.type"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									label="Dismissible"
									color="primary"
									v-model="alert.dismissible"
									hide-details
									class="alert-el ml-4"
								/>

								<v-switch
									label="Outline"
									color="primary"
									v-model="alert.outline"
									hide-details
									class="alert-el ml-4"
								/>

								<v-select
									color="primary"
									:items="alert.transition.items"
									label="Transition"
									v-model="alert.transition.value"
									class="alert-el ml-4"
									hide-details
								/>
							</v-layout>

							<v-divider class="mt-5" />

							<h2 class="font-weight-bold headline primary--text mt-5">Avatars</h2>
							<p class="mt-2">The avatar component is used to control the size and border radius of responsive images, typically used to show profile pictures.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-slider
									v-model="avatar.slider"
									:min="16"
									:max="256"
									label="Size"
									thumb-label
									color="primary"
									hide-details
								/>

								<v-select
									color="primary"
									:items="avatar.items"
									label="Mode"
									v-model="avatar.mode"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="avatar.tile"
									label="Tile"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</v-layout>

							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-flex
									align-center
									justify-center
									layout
									text-xs-center
								>
									<v-avatar
										:tile="avatar.tile"
										:size="avatarSize"
										color="white"
										class="avatar-border"
									>
										<img
											src="https://firebasestorage.googleapis.com/v0/b/vue-dot.appspot.com/o/vue.js.svg?alt=media&token=8de281bf-97bf-4c1e-a07c-aa859450a7a3"
											alt="Vue logo"
											v-if="avatar.mode === 'image'"
										>
										<v-icon v-if="avatar.mode === 'icon'">notifications</v-icon>
										<span
											class="headline"
											v-if="avatar.mode === 'text'"
										>
											J
										</span>
									</v-avatar>
								</v-flex>
							</v-layout>

							<v-divider class="mt-5" />

							<h2 class="font-weight-bold headline primary--text mt-5">Badges</h2>
							<p class="mt-2">The badge component can wrap any type of content to highlight information to a user or to just draw attention to a specific element.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-btn
									outline
									color="primary"
									@click="badge.value = !badge.value"
									class="ma-0"
								>
									Toggle
								</v-btn>

								<v-select
									color="primary"
									:items="badge.items"
									label="Position"
									v-model="badge.position"
									class="alert-el ml-4"
									hide-details
								/>

								<v-text-field
									v-model="badge.icon"
									label="Icon"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="badge.overlap"
									label="Overlap"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</v-layout>

							<v-layout
								align-center
								class="mt-3"
								wrap
							>
								 <v-badge
									color="primary"
									:overlap="badge.overlap"
									:left="badge.position.match('left')"
									:bottom="badge.position.match('bottom')"
									:value="badge.value"
								>
									<v-icon
										slot="badge"
										dark
										small
									>
										{{ badge.icon }}
									</v-icon>

									<v-icon
										color="grey"
										large
									>
										account_circle
									</v-icon>
								</v-badge>
							</v-layout>

							<v-divider class="mt-5" />

							<h2 class="font-weight-bold headline primary--text mt-5">Bottom navs</h2>
							<p class="mt-2">The bottom-nav is an alternative to the sidebar. It is primarily used on mobile and comes in two variants, icons and text, and shift.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-btn
									outline
									color="primary"
									@click="bottomNav.value = !bottomNav.value"
									class="ma-0"
								>
									Toggle
								</v-btn>

								<v-switch
									v-model="bottomNav.monochrome"
									label="Monochrome"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="bottomNav.shift"
									label="Shift"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-bottom-nav
									:active.sync="bottomNav.active"
									:color="bottomNav.monochrome ? 'info' : bottomNavColor"
									:value="bottomNav.value"
									fixed
									:shift="bottomNav.shift"
								>
									<v-btn dark>
										<span>Video</span>
										<v-icon>ondemand_video</v-icon>
									</v-btn>

									<v-btn dark>
										<span>Music</span>
										<v-icon>music_note</v-icon>
									</v-btn>

									<v-btn dark>
										<span>Book</span>
										<v-icon>book</v-icon>
									</v-btn>

									<v-btn dark>
										<span>Image</span>
										<v-icon>image</v-icon>
									</v-btn>
								</v-bottom-nav>
							</v-layout>

							<v-divider class="mt-5" />

							<h2 class="font-weight-bold headline primary--text mt-5">Bottom sheets</h2>
							<p class="mt-2">The bottom sheet is a modified dialog that slides from the bottom of the screen, similar to a bottom-nav. Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet can contain anything.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-bottom-sheet
									:hide-overlay="bottomSheet.hideOverlay"
									v-model="bottomSheet.value"
									:inset="bottomSheet.inset"
									:persistent="bottomSheet.persistent"
								>
									<v-btn
										outline
										color="primary"
										slot="activator"
										class="ma-0"
									>
										Toggle
									</v-btn>

									<v-list>
										<v-subheader>Open in</v-subheader>

										<v-list-tile
											v-for="tile in bottomSheet.tiles"
											:key="tile.title"
											@click="bottomSheet.value = false"
										>
											<v-list-tile-avatar>
												<v-avatar
													size="32px"
													tile
												>
													<img
														:src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
														:alt="tile.title"
													>
												</v-avatar>
											</v-list-tile-avatar>

											<v-list-tile-title>{{ tile.title }}</v-list-tile-title>
										</v-list-tile>
									</v-list>
								</v-bottom-sheet>

								<v-switch
									v-model="bottomSheet.hideOverlay"
									label="Hide overlay"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="bottomSheet.inset"
									label="Inset"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="bottomSheet.persistent"
									label="Persistent"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</v-layout>

							<v-divider class="mt-5" />

							<h2 class="font-weight-bold headline primary--text mt-5">Breadcrumbs</h2>
							<p class="mt-2">The breadcrumbs component is a navigational helper for pages. It can accept a Material Icons icon or text characters as a divider. An array of objects can be passed to the items property of the component. Additionally, a scoped slot exists for more control of the breadcrumbs, either utilizing breadcrumbs-item or other custom markup.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-text-field
									v-model="breadcrumbs.divider"
									label="Divider"
									color="primary"
									class="alert-el ml-4"
									hide-details
									:style="{ maxWidth: '60px' }"
								/>

								<v-switch
									v-model="breadcrumbs.large"
									label="Large"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</v-layout>

							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-breadcrumbs
									:items="breadcrumbs.items"
									:divider="breadcrumbs.divider"
									:large="breadcrumbs.large"
								/>
							</v-layout>

							<v-divider class="mt-5" />

							<h2 class="font-weight-bold headline primary--text mt-5">Buttons</h2>
							<p class="mt-2">The btn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-switch
									v-model="button.block"
									label="Block"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.depressed"
									label="Depressed"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.disabled"
									label="Disabled"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.fab"
									label="Fab"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.flat"
									label="Flat"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.icon"
									label="Icon"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.large"
									label="Large"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.loading"
									label="Loading"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.outline"
									label="Outline"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.ripple"
									label="Ripple"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.round"
									label="Round"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="button.small"
									label="Small"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</v-layout>


							<v-layout
								align-center
								class="mt-3"
								wrap
							>
								<v-btn
									color="success"
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
								>
									<span v-if="!button.fab && !button.icon">Success</span>

									<v-icon v-else>home</v-icon>
								</v-btn>
							</v-layout>

							<v-divider class="mt-5" />

							<h2 class="font-weight-bold headline primary--text mt-5">Buttons: Floating Action Button</h2>
							<p class="mt-2">The btn component can be used as a Floating action button. This provides an application a main point of action. Combined with the speed-dial component, you can create a diverse set of functions available for your users.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-btn
									outline
									color="primary"
									class="ma-0"
									@click="fab.value = !fab.value"
								>
									Toggle
								</v-btn>

								<v-select
									color="primary"
									:items="fab.items"
									label="Type"
									v-model="fab.direction"
									class="alert-el ml-4"
									hide-details
								/>

								<v-select
									color="primary"
									:items="fab.transition.items"
									label="Transition"
									v-model="fab.transition.value"
									class="alert-el ml-4"
									hide-details
								/>

								<v-select
									color="primary"
									:items="fab.positionItems"
									label="Position"
									v-model="fab.position"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="fab.hover"
									label="Open on hover"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-scale-transition>
									<v-speed-dial
										fixed
										:top="fab.position.match('top')"
										:right="fab.position.match('right')"
										:left="fab.position.match('left')"
										:bottom="fab.position.match('bottom')"
										:direction="fab.direction"
										:open-on-hover="fab.hover"
										:transition="fab.transition.value"
										v-if="fab.value"
									>
										<v-btn
											slot="activator"
											v-model="fab.fab"
											color="blue darken-2"
											dark
											fab
										>
											<v-icon>account_circle</v-icon>
											<v-icon>close</v-icon>
										</v-btn>
										<v-btn
											fab
											dark
											small
											color="green"
										>
											<v-icon>edit</v-icon>
										</v-btn>
										<v-btn
											fab
											dark
											small
											color="indigo"
										>
											<v-icon>add</v-icon>
										</v-btn>
										<v-btn
											fab
											dark
											small
											color="red"
										>
											<v-icon>delete</v-icon>
										</v-btn>
									</v-speed-dial>
								</v-scale-transition>
							</v-layout>

							<v-divider class="mt-5" />

							<h2 class="font-weight-bold headline primary--text mt-5">Cards</h2>
							<p class="mt-2">The v-card component is a versatile component that can be used for anything from a panel to a static image. The card component has numerous helper components to make markup as easy as possible.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-switch
									v-model="card.flat"
									label="Flat"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="card.hover"
									label="Hover"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="card.raised"
									label="Raised"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="card.ripple"
									label="Ripple"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="card.tile"
									label="Tile"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="card.image"
									label="Image"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-slider
									v-model="card.width"
									:min="200"
									:max="1000"
									label="Width"
									thumb-label
									color="primary"
									hide-details
								/>
							</v-layout>

							<v-layout
								align-center
								class="custom-layout mt-3"
								wrap
							>
								<v-card
									:flat="card.flat"
									:hover="card.hover"
									:raised="card.raised"
									:ripple="card.ripple"
									:tile="card.tile"
									:width="card.width"
								>
									<v-scale-transition>
										<v-img
											src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
											aspect-ratio="2.75"
											v-if="card.image"
										/>
									</v-scale-transition>

									<v-card-title primary-title>
										<div>
											<h3 class="headline mb-0">Kangaroo Valley Safari</h3>
											<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, etc.</div>
										</div>
									</v-card-title>

									<v-card-actions>
										<v-btn
											flat
											color="primary"
										>Share</v-btn>
										<v-btn
											flat
											color="primary"
										>Explore</v-btn>
									</v-card-actions>
								</v-card>
							</v-layout>

							<v-divider class="mt-5" />

							<h2 class="font-weight-bold headline primary--text mt-5">Carousels</h2>
							<p class="mt-2">The carousel component is used to display large numbers of visual content on a rotating timer.</p>

							<h3 class="subheading font-weight-bold primary--text mt-4">Settings</h3>
							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-switch
									v-model="carousel.cycle"
									label="Cycle"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="carousel.hideControls"
									label="Hide controls"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="carousel.reverse"
									label="Reverse"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-switch
									v-model="carousel.vertical"
									label="Vertical"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>

								<v-slider
									v-model="carousel.height"
									:min="200"
									:max="1000"
									label="Height"
									thumb-label
									color="primary"
									hide-details
								/>

								<v-switch
									v-model="carousel.hideDelimiters"
									label="Hide delimiters"
									color="primary"
									class="alert-el ml-4"
									hide-details
								/>
							</v-layout>

							<v-layout
								align-center
								class="custom-layout mt-1"
								wrap
							>
								<v-carousel
									:cycle="carousel.cycle"
									:hide-controls="carousel.hideControls"
									:hide-delimiters="carousel.hideDelimiters"
									:reverse="carousel.reverse"
									:vertical="carousel.vertical"
									:interval="carousel.interval"
									:height="carousel.height"
								>
									<v-carousel-item
										v-for="(item, i) in carousel.items"
										:key="i"
										:src="item.src"
									/>
								</v-carousel>
							</v-layout>
						</div>
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
		<v-footer
			color="primary"
			class="px-3"
			app
		>
			<span class="white--text">&copy; 2018</span>
		</v-footer>
	</v-app>
</template>

<script lang="ts">
	// This is a playground, it is not tested because it isn't a part of the library
	import Vue from 'vue';

	export default Vue.extend({
		name: 'XPlayground',
		data() {
			return {
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
					monochrome: false,
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
							text: 'Link 1',
							disabled: false,
							href: 'breadcrumbs_link_1'
						},
						{
							text: 'Link 2',
							disabled: true,
							href: 'breadcrumbs_link_2'
						}
					],
					divider: '/',
					large: false
				},
				button: {
					block: false,
					depressed: false,
					disabled: false,
					fab: false,
					flat: false,
					icon: false,
					large: false,
					loading: false,
					outline: false,
					ripple: true,
					round: false,
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
				}
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

<style lang="scss" scoped>
	.flex-ctn {
		padding-top: 60px;
	}

	.v-alert {
		top: 0;
		width: 100%;
		position: absolute;
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
