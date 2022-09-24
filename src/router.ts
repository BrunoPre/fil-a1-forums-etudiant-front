import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    alias: "/",
    name: "home",
    component: () => import("./components/HomePage.vue"),
  },
  {
    path: "/explore",
    name: "explore",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/my-questions",
    name: "my-questions",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/my-answers",
    name: "my-answers",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/bookmarks",
    name: "bookmarks",
    component: () => import("./components/EmptyComponent.vue"), // TODO: TBD
  },
  {
    path: "/question/:id",
    name: "question",
    component: () => import("./components/QuestionPage.vue"),
  },
  {
    path: "/school/:id",
    name: "school",
    component: () => import("./components/SchoolPage.vue"),
  },
  {
    path: "/school/create",
    name: "Create a school",
    component: () => import("./components/CreateSchool.vue"),
  },
  {
    path: "/school/:id/edit",
    name: "Edit a school",
    component: () => import("./components/ModifySchool.vue"),
  },
  {
    path: "/school/:id1/subject/:id2",
    name: "subject",
    component: () => import("./components/SubjectPage.vue"),
  },
  {
    path: "/subject/create",
    alias: "/subject/create",
    name: "Create a subject",
    component: () => import("./components/CreateSubject.vue"),
  },
  {
    path: "/school/:id1/subject/:id2/edit",
    name: "Ddit subject",
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
    name: "Sign up",
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
