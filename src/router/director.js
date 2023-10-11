export default {
  path: "/director",
  name: "director",
  component: import("@/pages/director/DirectorPage.vue"),
  meta: {
    requiresAuth: true,
  },
};
