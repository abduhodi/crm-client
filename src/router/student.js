export default {
  path: "/student",
  name: "student",
  component: () => import("@/pages/student/StudentPage.vue"),
  meta: {
    requiresAuth: true,
  },
};
