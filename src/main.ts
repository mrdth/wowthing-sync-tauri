import { createApp } from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.mount("#app");
