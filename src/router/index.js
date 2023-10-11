import { createRouter, createWebHistory } from "vue-router";

import admin from "./admin";
import director from "@/router/director";
import notFound from "@/router/notFound";
import student from "@/router/student";
import teacher from "@/router/teacher";
import auth from "@/router/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [auth, admin, director, teacher, student, notFound],
});

export default router;
