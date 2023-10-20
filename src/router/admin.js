export default {
  path: "/admin",
  name: "admin",
  component: () => import("@/layouts/MainLayout.vue"),
  children: [
    {
      path: "/students",
      name: "students",
      meta: {
        child: "students",
        requiresAdminRole: true,
      },
      component: () => import("@/pages/admin/StudentPage.vue"),
    },
    {
      path: "/students/:id",
      name: "single_student",
      meta: {
        child: "students",
        requiresAdminRole: true,
      },
      component: () => import("@/pages/admin/SingleStudent.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      meta: {
        child: "courses",
        requiresAdminRole: true,
      },
      component: () => import("@/pages/admin/CoursePage.vue"),
    },
    {
      path: "/courses/:id",
      name: "single_course",
      meta: {
        child: "courses",
        requiresAdminRole: true,
      },
      component: () => import("@/pages/admin/CoursePage.vue"),
    },
    {
      path: "/groups",
      name: "groups",
      meta: {
        child: "groups",
        requiresAdminRole: true,
      },
      component: () => import("@/pages/admin/GroupPage.vue"),
    },
    {
      path: "/groups/:id",
      name: "single_group",
      meta: {
        child: "groups",
        requiresAdminRole: true,
      },
      component: () => import("@/pages/admin/GroupPage.vue"),
    },
    {
      path: "/rooms",
      name: "rooms",
      meta: {
        child: "rooms",
        requiresAdminRole: true,
      },
      component: () => import("@/pages/admin/RoomPage.vue"),
    },
    {
      path: "/rooms/:id",
      name: "single_room",
      meta: {
        child: "rooms",
        requiresAdminRole: true,
      },
      component: () => import("@/pages/admin/RoomPage.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        child: "profile",
        requiresAdminRole: true,
      },
      component: () => import("@/pages/profile/ProfilePage.vue"),
    },
  ],
  meta: {
    requiresAdminRole: true,
  },
};
