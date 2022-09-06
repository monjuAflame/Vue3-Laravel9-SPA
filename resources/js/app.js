import "./bootstrap";

import { createApp } from "vue";

import App from "./layouts/App.vue";
import LaravelVuePagination from "laravel-vue-pagination";

// import App from "./App.vue";
import router from "./routes/index";

const app = createApp(App);
app.use(router);
app.component("Pagination", LaravelVuePagination);
app.mount("#app");
