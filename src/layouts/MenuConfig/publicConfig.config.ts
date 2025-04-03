import type { IMenu } from "../../interfaces/IMenu";

export const PublicmenuConfig: IMenu[] = [
  {
    label: "Home",
    description: "Página inicial",
    icon: "@/assets/images/Home.svg",
    link: "/",
  },
  {
    label: "Catalogo",
    description: "Explorar brinquedos",
    icon: "@/assets/images/Catalogo.svg",
    link: "/explore/catalogo",
  },
  {
    label: "Equipe",
    description: "Conheça nossa equipe",
    icon: "@/assets/images/Group.svg",
    link: "/",
  },
];
