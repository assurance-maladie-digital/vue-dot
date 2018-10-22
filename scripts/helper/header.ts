import chalk, { colors, log } from './chalk';
import line from './line';
import * as figlet from 'figlet';

// display 'VueDot' with 'Georgia11' font, and 'primay' color
const header = () => {
	log(
	chalk.hex(colors.primary)
		(figlet.textSync('VueDot', {
			font: 'Georgia11',
			horizontalLayout: 'default',
			verticalLayout: 'default'
		})
	));
	line();
	process.stdout.write('\n\n');
};

export default header;
