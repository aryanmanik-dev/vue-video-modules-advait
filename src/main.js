import "./assets/main.css";
import { createApp } from "vue";
import { createStore } from 'vuex'
import App from "./App.vue";
import router from "./router";
import courseStore from "./stores/courseStore";
const app = createApp(App);
app.use(createStore);
app.use(router);
app.use(courseStore);
app.mount("#app");
