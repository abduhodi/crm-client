import {
  mdiAccount,
  mdiAccountGroup,
  mdiDoorOpen,
  mdiCog,
  mdiBookOpenBlankVariant,
} from "@mdi/js";

export const TeacherMenu = [
  // {
  //   path: "/courses",
  //   name: "courses",
  //   label: "Courses",
  //   keys: "courses",
  //   icon: mdiBookOpenBlankVariant,
  // },
  {
    path: "/teacher-groups",
    name: "teacher_groups",
    label: "Groups",
    keys: "groups",
    icon: mdiAccountGroup,
  },

  {
    path: "/profile",
    name: "profile",
    label: "Profile",
    keys: "profile",
    icon: mdiCog,
  },
];
