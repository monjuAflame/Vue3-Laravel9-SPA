import "./bootstrap";

import { createApp } from "vue/dist/vue.esm-bundler";

import LaravelVuePagination from "laravel-vue-pagination";
import VueSweetalert2 from "vue-sweetalert2";

// import App from "./App.vue";
import router from "./routes/index";

const app = createApp({});
app.use(router);
app.use(VueSweetalert2);
app.component("Pagination", LaravelVuePagination);
app.mount("#app");
