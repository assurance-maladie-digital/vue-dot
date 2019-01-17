<template>
	<VCard>
		<VToolbar
			card
			dense
			flat
		>
			<VSpacer />

			<VBtn
				icon
				@click="dark = !dark"
			>
				<VIcon>invert_colors</VIcon>
			</VBtn>

			<VBtn
				icon
				@click="sendToCodepen"
			>
				<SvgIcon icon="codepen" />
			</VBtn>

			<VBtn
				:href="`https://github.com/assurance-maladie-digital/vue-dot/tree/master/docs/examples/${file}.vue`"
				icon
				target="_blank"
				rel="noopener noreferrer"
			>
				<SvgIcon icon="github" />
			</VBtn>

			<VBtn
				icon
				@click="expand = !expand"
			>
				<VIcon>code</VIcon>
			</VBtn>
		</VToolbar>

		<VExpandTransition v-if="parsed">
			<VCard
				v-if="expand"
				color="#2d2d2d"
				dark
				flat
				tile
			>
				<VItemGroup
					v-model="selected"
					class="pa-2"
					mandatory
				>
					<VItem
						v-for="(section, i) in sections"
						v-if="parsed[section]"
						:key="`item-${i}`"
						:value="section"
					>
						<VBtn
							slot-scope="{ active, toggle }"
							:color="active ? 'white' : 'transparent'"
							:light="active"
							class="mr-0"
							depressed
							round
							@click="toggle"
						>
							{{ section }}
						</VBtn>
					</VItem>
				</VItemGroup>

				<VDivider />

				<VWindow
					v-model="selected"
					class="code-window"
				>
					<VWindowItem
						v-for="(section, i) in sections"
						v-if="parsed[section]"
						:key="`window-${i}`"
						:value="section"
					>
						<div :class="$vuetify.breakpoint.smAndUp ? 'v-example__container' : ''">
							<Code
								class="ma-0"
								lang="html"
								:code="parsed[section]"
							/>
						</div>
					</VWindowItem>
				</VWindow>
			</VCard>
		</VExpandTransition>

		<VSheet
			:dark="dark"
			tile
		>
			<VCardText>
				<div data-app="true">
					<component :is="component" />
				</div>
			</VCardText>
		</VSheet>

		<Codepen
			ref="codepen"
			:pen="parsed"
		/>
	</VCard>
</template>

<script>
	export default {
		props: {
			value: {
				type: [Object, String],
				default: undefined
			}
		},
		data() {
			return {
				component: undefined,
				dark: false,
				expand: false,
				parsed: undefined,
				sections: ['template', 'style', 'script'],
				selected: 'template'
			};
		},
		computed: {
			internalValue() {
				if (this.value === Object(this.value)) {
					return this.value;
				}

				return { file: this.value };
			},
			file() {
				return `${this.internalValue.file}`;
			},
			newIn() {
				return this.internalValue.newIn;
			}
		},
		created() {
			this.expand = Boolean(this.internalValue.show);
		},
		mounted() {
			import(
				/* webpackChunkName: "examples" */
				/* webpackMode: "lazy-once" */
				`../../examples/${this.file}.vue`
			).then(comp => (this.component = comp.default));

			import(
				/* webpackChunkName: "examples-source" */
				/* webpackMode: "lazy-once" */
				`!raw-loader!../../examples/${this.file}.vue`
			).then(comp => this.boot(comp.default));
		},
		methods: {
			parseTemplate(target, template) {
				const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`;
				const regex = new RegExp(string, 'g');
				const parsed = regex.exec(template) || [];
				return parsed[1] || '';
			},
			boot(res) {
				const template = this.parseTemplate('template', res);
				const style = this.parseTemplate('style', res);
				const script = this.parseTemplate('script', res);
				const codepenResources = this.parseTemplate('codepen-resources', res);
				const codepenAdditional = this.parseTemplate('codepen-additional', res);

				this.parsed = {
					template,
					style,
					script,
					codepenResources,
					codepenAdditional
				};
			},
			toggle() {
				this.active = !this.active;
			},
			sendToCodepen() {
				this.$refs.codepen.submit();
			},
			togglePanel() {
				const panel = this.$refs.panel.items[0]._uid;

				this.$refs.panel.panelClick(panel);
			}
		}
	}
</script>

<style scoped>
	.code-window {
		height: 100%;
		overflow-y: auto;
		max-height: calc(100vh - 275px);
	}
</style>

