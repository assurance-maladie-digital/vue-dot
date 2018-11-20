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

process.chdir('./src/components');
const dist = 'Vuetify';

import * as fs from 'fs';
import * as path from 'path';

// Create dist dir if not exists
if (!fs.existsSync(dist)) {
	fs.mkdirSync(dist);
}

// Generate Vuetify wrappers
Object.keys(components).map((componentName: any) => {
	if (componentName.charAt(0) === 'V') {
		const customName = componentName.replace('V', 'X');
		const name = componentName.replace('V', '');

		const component = components[componentName];

		const slot = component.slots ?
		`
		<slot
			v-for="slot in Object.keys($slots)"
			v-if="slot !== 'default'"
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
		`
		@change="$emit('change', $event)"
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
				type: [String, Boolean, Number],
				default: undefined
			}
		}` : '';

		const template =
`// AUTO GENERATED FILE, DO NOT EDIT

<template>
	<${componentName}
		v-on="$listeners"
		v-bind="merged"
		:class="merged.classes"
		:style="merged.styles"${modelBind}
	>
		<slot name="default" />${slot}${scopedSlot}</${componentName}>
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

		writeFile(template, `${dist}/${name}.vue`);
	} else {
		xLog(`Name '${componentName}' is invalid`, 'error');
	}
});

import * as glob from 'glob';

// Generate components/index.ts
const y = `import XSvgIcon from './SvgIcon.vue';
import XLangBtn from './LangBtn.vue';
import XDatePicker from './DatePicker.vue';

import XBtn from './Vuetify/Btn.vue';
import XBreadcrumbs from './Vuetify/Breadcrumbs.vue';
import XDivider from './Vuetify/Divider.vue';
import XExpansionPanel from './Vuetify/ExpansionPanel.vue';
import XSwitch from './Vuetify/Switch.vue';

import { VueConstructor } from 'vue';

const components: any = {
	XSvgIcon,
	XLangBtn,
	XDatePicker,
	XBtn,
	XBreadcrumbs,
	XDivider,
	XExpansionPanel,
	XSwitch
};

export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
`;

let indexTs = ``;

glob('**/*.vue', {}, (er, files) => {
	// files is an array of filenames.
	// If the `nonull` option is set, and nothing
	// was found, then files is ["**/*.js"]
	// er is an error object or null.
	let componentsObj =
`const components: any = {
`;

	files.forEach((file: string) => {
		const name = file.replace('Vuetify/', '').replace('.vue', '');

		const isLast = files.indexOf(file) === files.length - 1;
		componentsObj +=
`	X${name}${isLast ? '' : ',\n'}`;

		const importStr =
`import X${name} from './${file.includes('Vuetify') ? 'Vuetify/' : ''}${name}.vue';
`;

		indexTs += importStr;
	});

	componentsObj +=
`
};
`;

	indexTs +=
`
import { VueConstructor } from 'vue';

`;

	indexTs += componentsObj;
	indexTs +=
`
export default (Vue: VueConstructor) => {
	Object.keys(components).forEach((name: string) => {
		Vue.component(name, components[name]);
	});
};
`;

	writeFile(indexTs, `index.ts`);
});

xLog(`🍻  Generated ${Object.keys(components).length} files in ${chalk.cyan(path.join(__dirname, dist))}!`, 'event');
