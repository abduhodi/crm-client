import {
  mdiAccount,
  mdiAccountGroup,
  mdiDoorOpen,
  mdiCog,
  mdiBookOpenBlankVariant,
} from "@mdi/js";

export const AdminMenu = [
  {
    path: "/students",
    name: "students",
    label: "Students",
    keys: "students",
    icon: mdiAccount,
  },
  {
    path: "/courses",
    name: "courses",
    label: "Courses",
    keys: "courses",
    icon: mdiBookOpenBlankVariant,
  },
  {
    path: "/groups",
    name: "groups",
    label: "Groups",
    keys: "groups",
    icon: mdiAccountGroup,
  },
  {
    path: "/rooms",
    name: "rooms",
    label: "Rooms",
    keys: "rooms",
    icon: mdiDoorOpen,
  },
  {
    path: "/profile",
    name: "profile",
    label: "Profile",
    keys: "profile",
    icon: mdiCog,
  },
];
