import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/accueil",
    alias: "/accueil",
    name: "accueil",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/parcourir",
    alias: "/parcourir",
    name: "parcourir",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/mes-questions",
    alias: "/mes-questions",
    name: "mes-questions",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/mes-reponses",
    alias: "/mes-reponses",
    name: "mes-reponses",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/suivis",
    alias: "/suivis",
    name: "suivis",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/reponse-msg",
    alias: "/reponse-msg",
    name: "reponse-msg",
    component: () => import("./components/ReplyToQuestionInput.vue"), // TODO: TBD
  },
  {
    path: "/question",
    alias: "/question",
    name: "question",
    component: () => import("./components/QuestionPage.vue"), // TODO: TBD
  },
  {
    path: "/sujet",
    alias: "/sujet",
    name: "sujet",
    component: () => import("./components/SubjectPage.vue"), // TODO: TBD
  },
  {
    path: "/sujet/modifier",
    alias: "/sujet/modifier",
    name: "Modifier sujet",
    component: () => import("./components/ModifySubject.vue"), // TODO: TBD
  },
  {
    path: "/connexion",
    alias: "/login",
    name: "connexion",
    component: () => import("./components/LoginPage.vue"), // TODO: TBD
  },
  {
    path: "/register",
    alias: "/signup",
    name: "inscription",
    component: () => import("./components/CreateAccountPage.vue"), // TODO: TBD
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
