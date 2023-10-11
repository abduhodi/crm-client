export default {
  path: "/",
  name: "auth",
  component: () => import("@/pages/auth/AuthPage.vue"),
  meta: {
    requiresAuth: false,
  },
};
