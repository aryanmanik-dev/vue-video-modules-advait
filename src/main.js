import "./assets/main.css";

import { createApp } from "vue";
import { createStore } from 'vuex'

import App from "./App.vue";
import router from "./router";
import courseStore from "./stores/courseStore";


// import i18n from './i18n'
// import { createI18n } from "vue-i18n";
// const i18n = createI18n({
//   en: {
//     welcome: "Welcome!",
//     greeting: "Hello, {name}!",
//   },
//   fr: {
//     welcome: "Bienvenue!",
//     greeting: "Bonjour, {name}!",
//   },
//   locale: "en"
// });
const app = createApp(App);

app.use(createStore);
app.use(router);
// app.use(i18n);
app.use(courseStore);
app.mount("#app");
