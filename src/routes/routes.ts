import type { RouteRecordRaw } from "vue-router";

// aqui ficam todas as nossas rotas
export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("../layouts/GroupLayout.vue"),
        children: [
            {
                path: "/",
                component: () => import("../pages/IndexPage.vue")
            }
        ]
    }
]