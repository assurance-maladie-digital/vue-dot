// tslint:disable:max-line-length

import components from './data/vuetify';

// Clear console
import * as clear from 'clear';
clear();

// Display header…
import header from './helper/header';
header();

import chalk, { log, xLog, colors } from './helper/chalk';
import writeFile from './helper/writeFile';

// …and the purpose of the script
log(chalk.white.bold(`✨  Generate Vuetify components wrappers`));
process.stdout.write('\n');

const dist = 'custom-dist';

import * as fs from 'fs';
import * as path from 'path';

// Create dist dir if not exists
if (!fs.existsSync(dist)) {
	fs.mkdirSync(dist);
}

Object.keys(components).map((componentName: any) => {
	if (componentName.charAt(0) === 'V') {
		const customName = componentName.replace('V', 'X');
		const name = componentName.replace('V', '');

		const component = components[componentName];

		const slot = component.slots ?
		`
		<slot
			v-for="slot in Object.keys($slots)"
			:name="slot"
			:slot="slot"
		/>
	` : '';

		const scopedSlot = component.scopedSlots ?
		`
		<template
			v-for="slot in Object.keys($scopedSlots)"
			:slot="slot"
			slot-scope="scope"
		>
			<slot
				:name="slot"
				v-bind="scope"
			/>
		</template>
	` : '';

		const modelBind = component.model.value ?
		`@change="$emit('change', $event)"
		v-model="localValue"` : '';

		const modelData = component.model.value ? `,
				localValue: this.value` : '';

		const model = component.model.value ? `,
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			value: {
				type: [String, Boolean],
				default: undefined
			}
		}` : '';

		const content = slot || scopedSlot;

		const template =
`// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<${componentName}
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"
		${modelBind}
	${content ? '' : '/'}>${slot}${scopedSlot}${content ? '</' + componentName + '>' : ''}
</template>

<script lang="ts">
	import Vue from 'vue';
	const name = '${customName}';

	import merge from '@/mixins/merge';

	export default Vue.extend({
		name,
		data() {
			return {
				name${modelData}
			};
		},
		mixins: [merge]${model}
	});
</script>
`;

		writeFile(template, `custom-dist/${name}.vue`);
	} else {
		xLog(`Name '${componentName}' is invalid`, 'error');
	}
});

xLog(`🍻  Generated ${Object.keys(components).length} files in ${chalk.cyan(path.join(__dirname, dist))}!`, 'event');
