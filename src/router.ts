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
    path: "/parcourir",
    alias: "/parcourir",
    name: "parcourir",
    component: () => import("./components/HelloWorld.vue"), // TODO: TBD
  },
  {
    path: "/mes-questions",
    alias: "/mes-questions",
    name: "mes-questions",
    component: () => import("./components/HelloWorld.vue"), // TODO: TBD
  },
  {
    path: "/mes-reponses",
    alias: "/mes-reponses",
    name: "mes-reponses",
    component: () => import("./components/HelloWorld.vue"), // TODO: TBD
  },
  {
    path: "/suivis",
    alias: "/suivis",
    name: "suivis",
    component: () => import("./components/HelloWorld.vue"), // TODO: TBD
  },
  {
    path: "/reponse-msg",
    alias: "/reponse-msg",
    name: "reponse-msg",
    component: () => import("./components/ReplyQuestion.vue"), // TODO: TBD
  },
  {
    path: "/reponse-msg-test",
    alias: "/reponse-msg-test",
    name: "reponse-msg-test",
    component: () => import("./components/ReplyComponentMocklyIntegrated.vue"), // TODO: TBD
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
