import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "trabajos" */ "../views/Trabajos.vue"),
    meta: {
      title: "Trabajos - No Büro"
    }
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/Contacto.vue"),
    meta: {
      title: "Contacto - No Büro"
    }
  }
];

const router = new VueRouter({
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
