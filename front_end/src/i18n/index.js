import { createI18n } from "vue-i18n";

const messages = {
    en: {
        navbar: {
            home: 'Home',
            votings: 'Votings',
            register: 'Register',
            about: 'About'
        }
    },
    ua: {
        navbar: {
            home: 'Головна',
            votings: 'Голосування',
            register: 'Реєстрація',
            about: 'Про нас'
        }
    }
}



export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages
})