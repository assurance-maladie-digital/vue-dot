import * as clear from 'clear';
clear();

import header from './helper/header';
header();

import chalk, { log, xLog } from './helper/chalk';

log(chalk.white.bold(`✨  New release`));
process.stdout.write('\n');


import * as shell from 'shelljs';
import * as inquirer from 'inquirer';
import * as semver from 'semver';
import * as prepend from 'prepend';

shell.set('-e');

if (!shell.which('git')) {
	xLog('this script requires git', 'error');
	shell.exit(1);
}

if (!shell.which('npm')) {
	xLog('this script requires npm', 'error');
	shell.exit(1);
}

const branch = shell.exec('git symbolic-ref --short HEAD', { silent: true }).toString().replace(/^\s+|\s+$/g, '');
const latest = shell.exec('yarn info @cnamts/vue-dot version', { silent: true }).toString().replace(/^\s+|\s+$/g, '');
const latestGit = shell.exec('git describe --abbrev=0 --tags', { silent: true }).toString().replace(/^\s+|\s+$/g, '');

let tag: any;

log(`
Current branch is ${chalk.cyan(branch)}.
Last git version (from the current location) was ${chalk.cyan(latestGit)}.
Latest npm version is ${chalk.cyan(latest)}.
`);

function createVersionOption(name: any) {
	const prerelease = (semver.prerelease(latestGit) || [])[0];
	const version = semver.inc(latestGit, name.toLowerCase(), false, prerelease || 'beta');

	return {
		name: `${name} (${version})`,
		value: version,
		short: version
	};
}

function promptForVersion() {
	return inquirer.prompt({
		type: 'list',
		name: 'version',
		message: 'Select new version:',
		choices: [
			createVersionOption('Major'),
			createVersionOption('Minor'),
			createVersionOption('Patch'),
			createVersionOption('Prerelease'),
			createVersionOption('Premajor'),
			createVersionOption('Preminor'),
			createVersionOption('Prepatch'),
			{
				name: 'Other',
				value: 'other'
			}
		],
		default: () => (
			semver.prerelease(latestGit) == null
			? createVersionOption('Patch').value
			: createVersionOption('Prerelease').value
		),
		pageSize: 8
	})
	.then((answers: any) => {
		if (answers.version === 'other') {
			return inquirer.prompt({
				type: 'input',
				name: 'version',
				message: 'Enter new version:',
				validate: (val: any) => !!semver.valid(val) || `'${val}' is not a valid version number`
			})
			.then((answers: any) => answers.version);
		}
		return answers.version;
	});
}

function verifyBranch(version: any) {
	tag = semver.prerelease(version) == null ? 'latest' : 'next';

	if (tag === 'latest' && branch !== 'master') {
		shell.echo('\nReleasing on a branch other than \'master\'');
		shell.echo('This may have unintended side-effects');

		return inquirer.prompt({
			type: 'confirm',
			name: 'yes',
			message: 'Do you want to continue',
			default: false
		}).
		then((answers: any) => answers.yes ? version : shell.exit(1));
	}

	return Promise.resolve(version);
}

function confirmVersion(version: any) {
	shell.echo(`Releasing ${version} on ${branch}`);
	shell.echo(`Tag: ${tag}`);

	return inquirer.prompt({
		type: 'confirm',
		name: 'yes',
		message: 'Are you sure',
		default: true
	})
	.then((answers: any) => answers.yes ? version : shell.exit(1));
}

function lint() {
	const { spawnSync } = require('child_process');
	const child = spawnSync('yarn', ['lint'], { stdio: 'inherit' });

	// shell.exec('npm run test');
}

function release(version: any) {
	// process.env.npm_config_commit_hooks = 'false';

	// shell.exec(`yarn version --new-version ${version}`);

	const { spawnSync } = require('child_process');
	const child = spawnSync('yarn', ['version', '--new-version', version, '--no-commit-hooks'], { stdio: 'inherit' });
	// shell.exec(`git push --no-verify --follow-tags`)

	// if (branch === 'master') {
	// 	shell.exec('git checkout dev')
	// 	branch = 'dev'
	// 	shell.exec('git pull --ff-only')
	// 	shell.exec('git merge master')

	// 	if (exec('git status --porcelain') === '') {
	// 		shell.exec('git push --no-verify')
	// 	} else {
	// 		shell.echo('Please resolve conflicts then push the current branch')
	// 	}
	// }
}

function build() {
	const { spawnSync } = require('child_process');
	const child = spawnSync('yarn', ['build-bundle'], { stdio: 'inherit' });
}

function changelog(version: any) {
	const versions = shell.exec('yarn info @cnamts/vue-dot versions', { silent: true })
	.toString().replace(/^\s+|\s+$/g, '');
	const previousVersion = versions[versions.length - 1];

	// tslint:disable:max-line-length
	const data = `
### [v${version}](https://github.com/assurance-maladie-digital/vue-dot/compare/v${previousVersion}...v${version}) (01-10-2018)
	`;

	log('test');
	prepend('./CHANGELOG.md', data, (error: any) => log(error));
}

function publish() {
	const { spawnSync } = require('child_process');
	const child = spawnSync('yarn', ['publish', '--access', 'public', '--tag', tag], { stdio: 'inherit' });
}

function deployDocs() {
	const { spawnSync } = require('child_process');
	const child = spawnSync('./deploy.sh', { stdio: 'inherit' });
}

promptForVersion()
.then(verifyBranch)
.then(confirmVersion)
.then((version) => {
	lint();
	build();
	changelog(version);
	release(version);
	publish();
	deployDocs();
});
