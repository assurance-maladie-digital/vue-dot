import debounce from './debounce';

const directives: any = {
	debounce
};

export default (Vue: any) => {
	Object.keys(directives).forEach((name: string) => {
		Vue.directive(name, directives[name]);
	});
};
