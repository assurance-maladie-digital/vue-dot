import Vue from 'vue';
import VueI18n from 'vue-i18n';

import translations from './translations/';

Vue.use(VueI18n);

let defaultLang;

// Get default language from previously selected, or from the browser, or fallback to French
if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
	defaultLang = window.localStorage.getItem('lang') || navigator.language.substr(0, 2) || 'fr';
} else {
	defaultLang = 'fr';
}

if (!translations.includes(defaultLang)) {
	defaultLang = 'fr';
}

const i18n = new VueI18n({
	locale: defaultLang,
	fallbackLocale: 'en', // By default, fallback to English if translation isn't found
	silentTranslationWarn: true // Remove warnings from the console, as suggested by the author of vue-i18n
});

const loadedLanguages = [];

// Set the language everywhere in the app where it needs to be
// This means i18n locale, axios headers, localstorage and html lang attribute
function setI18nLanguage(lang) {
	i18n.locale = lang;
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('lang', lang);
	}

	if (typeof document !== 'undefined') {
		const html = document.querySelector('html');
		html.setAttribute('lang', lang);
	}

	return lang;
}

// The function to use to change language, which loads the traduction file if needed with webpack dynamic import
export function loadLanguageAsync(lang) {
	if (!loadedLanguages.includes(lang)) {
		return import(/* webpackChunkName: "translations-[request]" */ `./translations/${lang}`).then((messages) => {
			i18n.setLocaleMessage(lang, messages.default);
			loadedLanguages.push(lang);
			return setI18nLanguage(lang);
		});
	}

	return Promise.resolve(setI18nLanguage(lang));
}

// Load default language
loadLanguageAsync(defaultLang);

export default i18n;
