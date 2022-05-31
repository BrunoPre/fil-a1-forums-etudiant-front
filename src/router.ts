import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/accueil",
    alias: "/accueil",
    name: "accueil",
    component: () => {}, // TODO: TBD
  },
  {
    path: "/parcourir",
    alias: "/parcourir",
    name: "parcourir",
    component: () => {}, // TODO: TBD
  },
  {
    path: "/mes-questions",
    alias: "/mes-questions",
    name: "mes-questions",
    component: () => {}, // TODO: TBD
  },
  {
    path: "/mes-reponses",
    alias: "/mes-reponses",
    name: "mes-reponses",
    component: () => {}, // TODO: TBD
  },
  {
    path: "/suivis",
    alias: "/suivis",
    name: "suivis",
    component: () => {}, // TODO: TBD
  },
  {
    path: "/reponse-msg",
    alias: "/reponse-msg",
    name: "reponse-msg",
    component: () => import("./components/ReplyToQuestionInput.vue"), // TODO: TBD
  },
  {
    path: "/reponse-msg-test",
    alias: "/reponse-msg-test",
    name: "reponse-msg-test",
    component: () => import("./components/ReplyComponentMocklyIntegrated.vue"), // TODO: TBD
  },
  {
    path: "/question",
    alias: "/question",
    name: "question",
    component: () => import("./components/QuestionPage.vue"), // TODO: TBD
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
