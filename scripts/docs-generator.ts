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
log(chalk.white.bold(`✨  Generate documentation for Vuetify components wrappers`));
process.stdout.write('\n');

// process.chdir('./src/components');
const dist = './docs/next/guide/vuetify';

import * as fs from 'fs';
import * as path from 'path';

// Create dist dir if not exists
if (!fs.existsSync(dist)) {
	fs.mkdirSync(dist);
}

Object.keys(components).map((componentName: any) => {
	log(componentName);
	const name = componentName.replace('V', 'X');
	const template = `# ${name}

<ComponentDoc current="${name}" />
`;

	writeFile(template, `${dist}/${name}.md`);
});
