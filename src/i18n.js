// i18n.js
const messages = {
  en: {
    welcome: "Welcome!",
    greeting: "Hello, {name}!",
  },
  fr: {
    welcome: "Bienvenue!",
    greeting: "Bonjour, {name}!",
  },
};

const i18n = new VueI18n({
  locale: "en", // set the initial locale
  messages,
});

export { i18n };
