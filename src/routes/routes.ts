import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("../layouts/BlankLayout.vue"),
        children: [
            { path: "", component: () => import("../pages/IndexPage.vue") },
            { path: "categorias", component: () => import("../pages/CategoriaPage.vue") },
            { path: "categorias/bonecos", component: () => import("../pages/BonecosPage.vue") },
            { path: "categorias/quebra-cabeca", component: () => import("../pages/QuebraCabecaPage.vue") },
            { path: "categorias/fantasias", component: () => import("../pages/FantasiasPage.vue") },
            { path: "categorias/pelucias", component: () => import("../pages/PeluciasPage.vue") },
            { path: "equipe", component: () => import("../pages/EquipePage.vue") }
        ]
    }
];

];
