export default {
  path: "/admin",
  name: "admin",
  component: import("@/pages/admin/AdminPage.vue"),
  meta: {
    requiresAuth: true,
  },
};
