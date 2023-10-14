export default {
  path: "/:catchAll(.*)",
  name: "notFound",
  component: () => import("@/pages/notFound/NotFoundPage.vue"),
  meta: {
    requiresAuth: false,
  },
};
