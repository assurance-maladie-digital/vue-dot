declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}

declare module 'languages';
declare module 'dayjs';
declare module 'deepmerge';

declare module '*.json' {
	const value: any;
	export default value;
}
