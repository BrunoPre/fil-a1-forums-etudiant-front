import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/accueil",
    alias: "/accueil",
    name: "accueil",
    component: () => import("./components/HelloWorld.vue"),
  },
  {
    path: "/parcours",
    alias: "/parcours",
    name: "parcours",
    component: () => import("./components/HelloWorld.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
