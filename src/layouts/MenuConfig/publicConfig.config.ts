import type { IMenu } from "../../interfaces/IMenu";

export const PublicmenuConfig: IMenu[] = [
  {
    label: "Home",
    description: "Página inicial",
    icon: "home",
    link: "/",
  },
  {
    label: "Catalogo",
    description: "Explorar brinquedos",
    icon: "catalog",
    link: "/explore/catalogo",
  },
  {
    label: "Equipe",
    description: "Conheça nossa equipe",
    icon: "people",
    link: "/",
  },
];
