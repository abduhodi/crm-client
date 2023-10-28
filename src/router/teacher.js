export default {
  path: "/teacher",
  name: "teacher",
  component: () => import("@/layouts/MainLayout.vue"),
  meta: {
    requiresTeacher: true,
  },
  children: [
    {
      path: "/teacher-groups",
      name: "teacher_groups",
      meta: {
        child: "groups",
        requiresTeacher: true,
      },
      component: () => import("@/pages/teacher/GroupPage.vue"),
    },
    {
      path: "/teacher-groups/:id",
      name: "teacher_single_groups",
      meta: {
        child: "groups",
        requiresTeacher: true,
      },
      component: () => import("@/pages/teacher/SingleGroup.vue"),
    },
  ],
};
