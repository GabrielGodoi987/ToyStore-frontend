import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../layouts/BlankLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("../pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/explore",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "catalogo",
        component: () => import("../pages/CategoryPage.vue"),
      },
      {
        path: "categorias/:categoryId",
        component: () => import("../pages/ToysPage.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/adminPages/AdminCategoryPage.vue"),
      },
    ],
  },
];
