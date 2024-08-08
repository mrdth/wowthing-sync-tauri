import { createApp } from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/en-GB";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
});
app.mount("#app");
