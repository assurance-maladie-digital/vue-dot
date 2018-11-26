// tslint:disable:max-line-length

// Clear console
import * as clear from 'clear';
clear();

// Display header…
import header from './helper/header';
header();

import chalk, { log, xLog, colors } from './helper/chalk';

// …and the purpose of the script
log(chalk.white.bold(`✨  Building VueDot library`));
process.stdout.write('\n');

const dist = 'dist';

import * as rfs from 'fs';
import * as fs from 'fs-extra';
import * as path from 'path';

// tslint:disable-next-line:no-var-requires
const { execSync } = require('child_process');

// Create dist dir if not exists
if (!fs.existsSync(dist)) {
	fs.mkdirSync(dist);
}

function getPath(...args: any) {
	return path.resolve(__dirname, ...args);
}

fs.emptyDirSync(getPath(dist));

const vueCliServicePath = getPath('../node_modules/.bin/vue-cli-service');

execSync(
	`${vueCliServicePath} build src/index.ts --target lib --name vue-dot --dest dist/`,
	{ stdio: 'inherit' }
);

import * as glob from 'glob';

glob('src/**/*.vue', {}, (er, files) => {
	files.forEach((file: string) => {
		const name = file.replace('src/components/', '').replace('.vue', '');

		execSync(
			`${vueCliServicePath} build ${file} --target lib --name index --dest dist/${name}/`,
			{ stdio: 'inherit' }
		);

		rfs.rename(`dist/${name}/index.common.js`, `dist/${name}/index.js`, (e: any) => xLog(e, 'error'));
	});
});
