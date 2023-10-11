import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import veeValidatePlugins from "@/plugins/vee-validate.js";

import VueMask from "vue-the-mask";

import Vue3Toasity, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(veeValidatePlugins);
app.use(VueMask);
app.use(Vue3Toasity, {
  autoClose: 3000,
  position: toast.POSITION.TOP_RIGHT,
  theme: "colored",
});

app.mount("#app");
