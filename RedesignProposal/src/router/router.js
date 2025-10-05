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

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
