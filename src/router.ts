import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/accueil",
    alias: "/",
    name: "accueil",
    component: () => import("./components/HomePage.vue"),
  },
  {
    path: "/parcourir",
    name: "parcourir",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/mes-questions",
    name: "mes-questions",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/mes-reponses",
    name: "mes-reponses",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/suivis",
    name: "suivis",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/question/:id",
    name: "question",
    component: () => import("./components/QuestionPage.vue"),
  },
  {
    path: "/ecole/:id",
    name: "ecole",
    component: () => import("./components/SchoolPage.vue"),
  },
  {
    path: "/ecole/creer",
    name: "Créer une école",
    component: () => import("./components/CreateSchool.vue"),
  },
  {
    path: "/ecole/:id/modifier",
    name: "Modifier une école",
    component: () => import("./components/ModifySchool.vue"),
  },
  {
    path: "/ecole/:id1/sujet/:id2",
    name: "sujet",
    component: () => import("./components/SubjectPage.vue"),
  },
  {
    path: "/sujet/creer",
    alias: "/sujet/creer",
    name: "Créer sujet",
    component: () => import("./components/CreateSubject.vue"),
  },
  {
    path: "/ecole/:id1/sujet/:id2/modifier",
    name: "Modifier sujet",
    component: () => import("./components/ModifySubject.vue"),
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
  {
    path: "/:pathMatch(.*)*",
    alias: "/error",
    component: () => import("./components/ErrorPage.vue"),
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
