import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from '../views/Inicio.vue'
//import Contacto from '../views/Contacto.vue'
import SobreMi from '../views/SobreMi'
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', 
  routes: [
    {
      path: "/notFound",
      component: NotFound
    },
    {
      path: "*",
      component: NotFound,
    },
    {
      path: "",
      redirect: "/inicio"
    },
    {
      path: '/inicio',
      component: Inicio,
      name: 'inicio'
    },
    {
      path: '/sobremi',
      component: SobreMi,
      name: 'sobremi'
    },
    {
      path: '/contacto',
      //component: Contacto
      //LAZYLOADING
      component: () => import("../views/Contacto.vue")
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: () => import("../views/Post.vue"),
      children: [
        {
          path: '/',
          //name: 'Articulo',
          component: () => import("../views/Articulo.vue")
        }
      ]
    }
  ],
});

export default router;
