export default {
  path: "/teacher",
  name: "teacher",
  component: () => import("@/pages/teacher/TeacherPage.vue"),
  meta: {
    requiresAuth: true,
  },
};
