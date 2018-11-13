import { default as theme } from '@/theme.json';

// Automatic props creation, excluding 'default' keyword
const propsGenerator = (component: string) => {
	const propsObj: any = {};

	Object.keys(theme.config.components[component]).map((prop: any) => {
		if (prop !== 'default') {
			propsObj[prop] = {};

			propsObj[prop].type = Boolean;
			propsObj[prop].default = false;
		}
	});

	return propsObj;
};

export default propsGenerator;
