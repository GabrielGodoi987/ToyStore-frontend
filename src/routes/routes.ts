import type { RouteRecordRaw } from "vue-router";

// aqui ficam todas as nossas rotas
export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("../layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("../pages/IndexPage.vue")
            }
            
        ]
    }
];
