import Vue from 'vue';
// Import local VueDot
import VueDot from '../../src/';

// Import the theme
import theme from '../theme/theme.json';

Vue.use(VueDot, {
	theme
});

// Import the theme styles
import '../theme/theme.scss';
