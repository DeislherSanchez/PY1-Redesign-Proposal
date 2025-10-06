import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TiendaMonge",
    component: () => import("@/views/TiendaMonge.vue")
  },
  {
    path: "/SolicitarTarjetaMonge",
    name: "SolicitarTarjetaMonge",
    component: () => import("@/views/SolicitarTarjetaMonge.vue")
  },
  {
    path: "/SolicitarTasaCero",
    name: "SolicitarTasaCero",
    component: () => import("@/views/SolicitarTasaCero.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/Registro",
    name: "Registro",
    component: () => import("@/views/Registro.vue")
  },
  {
    path: "/CatalogoProductos",
    name: "CatalogoProductos",
    component: () => import("@/views/CatalogoProductos.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Siempre scroll al inicio de la página en cada navegación
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
