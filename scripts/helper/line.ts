import chalk, { colors } from './chalk';

const line = () => {
	const cols = process.stdout.columns || 0;

	for (let index = 0; index < cols; index++) {
		process.stdout.write(chalk.hex(colors.primary)('─'));
	}
};

export default line;
