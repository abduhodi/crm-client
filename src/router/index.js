import { createRouter, createWebHistory } from "vue-router";

import admin from "./admin";
import director from "@/router/director";
import notFound from "@/router/notFound";
import student from "@/router/student";
import teacher from "@/router/teacher";
import auth from "@/router/auth";
// import profile from "@/router/profile";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [auth, admin, director, teacher, student, notFound],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (!token && to.path !== "/") return next({ path: "/" });
  else if (token && to.path == "/") return next({ path: "/admin" });

  return next();
});

export default router;
