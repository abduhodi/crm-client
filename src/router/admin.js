export default {
  path: "/admin",
  name: "admin",
  component: () => import("@/layouts/MainLayout.vue"),
  children: [
    {
      path: "/students",
      name: "students",
      component: () => import("@/pages/admin/StudentPage.vue"),
    },
    {
      path: "/student/:id",
      name: "single_student",
      component: () => import("@/pages/admin/SingleStudent.vue"),
    },
    {
      path: "/groups",
      name: "groups",
      component: () => import("@/pages/admin/GroupPage.vue"),
    },
    {
      path: "/rooms",
      name: "rooms",
      component: () => import("@/pages/admin/GroupPage.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/pages/admin/GroupPage.vue"),
    },
  ],
  meta: {
    requiresAuth: true,
  },
};
