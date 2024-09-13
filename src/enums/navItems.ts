import { NavbarItemType } from "@/components/navbar/items/NavbarItem";

export const navItems: NavbarItemType[] = [
  {
    id: "home",
    title: "home",
  },
  {
    id: "toys",
    title: "toys",
    children: [
      {
        id: "toys_type",
        title: "",
      },
    ],
  },
  {
    id: "clothes",
    title: "clothes",
    children: [
      {
        id: "clothes_type",
        title: "",
      },
    ],
  },
];
