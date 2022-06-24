import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
    path: "/question/:id",
    alias: "/question",
    name: "question",
    component: () => import("./components/QuestionPage.vue"), // TODO: TBD
  },
  {
    path: "/ecole/:id",
    alias: "/ecole",
    name: "ecole",
    component: () => import("./components/SchoolPage.vue"), // TODO: TBD
  },
  {
    path: "/ecole/creer",
    alias: "/ecole/creer",
    name: "Créer une école",
    component: () => import("./components/CreateSchool.vue"), // TODO: TBD
  },
  {
    path: "/ecole/modifier",
    alias: "/ecole/modifier",
    name: "Modifier une école",
    component: () => import("./components/ModifySchool.vue"), // TODO: TBD
  },
  {
    path: "/sujet/:id",
    alias: "/sujet",
    name: "sujet",
    component: () => import("./components/SubjectPage.vue"), // TODO: TBD
  },
  {
    path: "/sujet/creer",
    alias: "/sujet/creer",
    name: "Créer sujet",
    component: () => import("./components/CreateSubject.vue"), // TODO: TBD
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
    component: () => import("./components/LoginPage.vue"),
    //meta: { requiredAuth: false },
  },
  {
    path: "/register",
    alias: "/signup",
    name: "inscription",
    component: () => import("./components/CreateAccountPage.vue"),
    //meta: { requiredAuth: false },
  },
  {
    path: "/login-success",
    alias: "/login-success",
    name: "login-success",
    component: () => import("./components/LoginSuccess.vue"),
    meta: { requiredAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const publicPages = ["/login", "/register", "/login-success"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
