import type { IMenu } from "../../interfaces/IMenu";

export const menuConfig: IMenu[] = [
  {
    label: "Home",
    description: "Página inicial",
    icon: "home",
    link: "/",
  },
  {
    label: "Catalogo",
    description: "Explorar brinquedos",
    icon: "explore",
    link: "/explore/catalogo",
  },
  {
    label: "Administração",
    description: "Gerenciar brinquedos",
    icon: "admin_panel_settings",
    link: "/admin",
  },
  {
    label: "Equipe",
    description: "Conheça nossa equipe",
    icon: "people",
    link: "/",
  },
];
