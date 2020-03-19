import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");
const Trabajos = () => import("../views/Trabajos.vue");
const Trabajo = () => import("../views/Trabajo.vue");
const Contacto = () => import("../views/Contacto.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "No Büro?"
    }
  },
  {
    path: "/trabajos",
    name: "Trabajos",
    component: Trabajos,
    meta: {
      title: "Trabajos - No Büro"
    }
  },
  {
    path: "/trabajos/:slug",
    name: "Trabajo",
    component: Trabajo,
    props: true,
    meta: {
      title: "Trabajos - No Büro"
    }
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
    meta: {
      title: "Contacto - No Büro"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});
router.beforeEach((to, from, next) => {
  /* It will change the title when the router is change*/
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
