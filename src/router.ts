import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/accueil",
    alias: "/accueil",
    name: "accueil",
    component: () => import("./components/HelloWorld.vue"), // TODO: TBD
  },
  {
    path: "/parcours",
    alias: "/parcours",
    name: "parcours",
    component: () => import("./components/HelloWorld.vue"), // TODO: TBD
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
