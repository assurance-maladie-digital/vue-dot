// tslint:disable:max-line-length

import * as clear from 'clear';
clear();

import header from './helper/header';
header();

import chalk, { log, xLog, colors } from './helper/chalk';

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
	process.stdout.write('\n');
	shell.echo(chalk.hex(colors.primary)(`Releasing ${chalk.bold(version)} on ${chalk.bold(branch)}`));
	shell.echo(chalk.hex(colors.primary)(`Tag: ${chalk.bold(tag)}`));
	process.stdout.write('\n');

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
	spawnSync('yarn', ['lint'], { stdio: 'inherit' });
}

function release(version: any) {
	const { spawnSync } = require('child_process');
	spawnSync('yarn', ['version', '--new-version', version, '--no-commit-hooks'], { stdio: 'inherit' });
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
	spawnSync('yarn', ['build-bundle'], { stdio: 'inherit' });
}

function changelog(version: any) {
	const versions: any = shell.exec('yarn info @cnamts/vue-dot versions --json', { silent: true });
	const versionsArray = JSON.parse(versions.stdout).data;
	const previousVersion = versionsArray[versionsArray.length - 1];

	const today = new Date();

	const dd: string = today.getDate().toString().padStart(2, '0');
	const mm: string = (today.getMonth() + 1).toString().padStart(2, '0'); // January is 0
	const yyyy: string = today.getFullYear().toString();

	const date = `${dd}-${mm}-${yyyy}`;

	inquirer.prompt({
		type: 'editor',
		name: 'changelog',
		message: 'Tell what changed in this version:',
		default: '### No changes specified.'
	})
	.then((answers: any) => {
		log(answers.changelog);

		const data = `### [v${version}](https://github.com/assurance-maladie-digital/vue-dot/compare/v${previousVersion}...v${version}) (${date})

${answers.changelog}
`;

		prepend('./CHANGELOG.md', data, (error: any) => {
			if (error) {
				log(error);
			}
		});
	});
}

// function githubRelease(version: any) {
// 	const email = shell.exec('git config user.email', { silent: true }).toString().replace(/^\s+|\s+$/g, '');

// 	const { spawnSync } = require('child_process');
// 	spawnSync('curl', ['-u', `"deraw-"`, 'https://api.github.com'], { stdio: 'inherit' });

// 	const https = require('https');

// 	const options = {
// 		hostname: 'api.github.com',
// 		path: '/repos/assurance-maladie-digital/vue-dot/releases/1',
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		}
// 	};

// 	const req = https.request(options, (res: any) => {
// 		console.log('Status: ' + res.statusCode);
// 		console.log('Headers: ' + JSON.stringify(res.headers));
// 		res.setEncoding('utf8');
// 		res.on('data', function(body: any) {
// 			console.log('Body: ' + body);
// 		});
// 	});
// 	req.on('error', function(e: any) {
// 		console.log('problem with request: ' + e.message);
// 	});
// 	// write data to request body
// 	req.write(`
// 	{
// 		"tag_name": "v${version}",
// 		"target_commitish": "master",
// 		"name": "v${version}",
// 		"body": "Description of the release",
// 		"draft": false,
// 		"prerelease": ${tag === 'master' ? 'false' : 'true'}
// 	}
// 	`);
// 	req.end();
// }

function publish() {
	const { spawnSync } = require('child_process');
	spawnSync('yarn', ['publish', '--access', 'public', '--tag', tag], { stdio: 'inherit' });
}

function deployDocs() {
	const { spawnSync } = require('child_process');
	spawnSync('./deploy.sh', { stdio: 'inherit' });
}

promptForVersion()
.then(verifyBranch)
.then(confirmVersion)
.then((version) => {
	// lint();
	// build();
	// changelog(version);
	// release(version);
	// publish();
	// githubRelease(version);
	// deployDocs();
});
