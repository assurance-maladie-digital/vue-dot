import Vue from 'vue';
// Import VueDot from src
import VueDot from '../../src/';

// Import dayjs locale
import 'dayjs/locale/fr';

// Import the theme
import theme from '../theme/theme.json';

Vue.use(VueDot, {
	theme
});

// Import the theme styles
import '../theme/theme.scss';
