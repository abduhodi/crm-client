export default {
  path: "/director",
  name: "director",
  component: () => import("@/layouts/MainLayout.vue"),
  meta: {
    requiresDirector: true,
  },
  children: [
    {
      path: "/staffs",
      name: "director_staffs",
      component: () => import("@/pages/director/StaffsPage.vue"),
      meta: {
        child: "staffs",
      },
    },
    {
      path: "/staffs/:id",
      name: "director_single_staffs",
      component: () => import("@/pages/director/StaffsPage.vue"),
      meta: {
        child: "staffs",
      },
    },
  ],
};
