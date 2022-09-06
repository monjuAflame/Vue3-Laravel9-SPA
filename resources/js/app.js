import "./bootstrap";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./layouts/App.vue";
import LaravelVuePagination from "laravel-vue-pagination";
import PostsIndex from "./components/Posts/Index.vue";
import PostsCreate from "./components/Posts/Create.vue";
// import App from "./App.vue";

const routes = [
    { path: "/", component: PostsIndex },
    { path: "/posts/create", component: PostsCreate },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.component("Pagination", LaravelVuePagination);
app.mount("#app");
