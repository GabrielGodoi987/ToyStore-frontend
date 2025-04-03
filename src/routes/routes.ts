import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../layouts/BlankLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("../pages/public/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/explore",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "catalogo",
        component: () => import("../pages/public/CategoryPage.vue"),
      },
      {
        path: "categorias/:categoryId",
        component: () => import("../pages/public/ToysPage.vue"),
      },
      {
        path: "team",
        component: () => import("../pages/public/GroupPage.vue"),
      }
    ],
  },
  {
    path: "/admin",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/adminPages/AdminIndexPage.vue"),
      },
      {
        path: "categorymanagement",
        component: () => import("../pages/adminPages/category/AdminCategoryPage.vue"),
      },
      {
        path: "toysmanagement",
        component: () => import("../pages/adminPages/toy/AdminToyPage.vue"),
      },
      {
        path: "adminusermanagement",
        component: () => import("../pages/adminPages/user/AdminUserPage.vue"),
      },
    ],
  },
];
