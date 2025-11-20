import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../views/LandingPage.vue";
import ClientNewsletter from "../views/ClientNewsletter.vue";
import UserNewsletter from "../views/UserNewsletter.vue";

// Define las rutas de la aplicación
const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
    meta: { title: "Página de Inicio" },
  },
  {
    path: "/cliente",
    name: "ClientNewsletter",
    component: ClientNewsletter,
    meta: { title: "Boletín del Cliente" },
  },
  {
    path: "/usuario",
    name: "UserNewsletter",
    component: UserNewsletter,
    meta: { title: "Boletín del Usuario" },
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: {
      template:
        '<div class="p-8 text-center text-red-600">404 - Página No Encontrada</div>',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} `;
  } else {
    document.title = "Mi Aplicación Vue";
  }
  next();
});

export default router;
