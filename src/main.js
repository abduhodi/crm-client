import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import veeValidatePlugins from "@/plugins/vee-validate.js";

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import VueMask from "vue-the-mask";

import Vue3Toasity, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "../node_modules/nprogress/nprogress.css";

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
app.use(VueAwesomePaginate);
app.use(ElementPlus);

app.mount("#app");
