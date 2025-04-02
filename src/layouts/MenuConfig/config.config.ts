import type { IMenu } from "../../interfaces/IMenu";

export const menuConfig: IMenu[] = [
  {
    label: "category",
    description: "category management",
    icon: "category",
    link: "/admin/categorymanagement",
  },
  {
    label: "Toys",
    description: "Toys management",
    icon: "shopping_cart",
    link: "/admin/toysmanagement",
  },
  {
    label: "user",
    description: "Usuários",
    icon: "people management",
    link: "/admin/adminusermanagement",
  }
];
