import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },

  {
    path: '/#Nosotros',
    name: 'Nosotros',
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },

  {
    path: '/contacto',
    name: 'Contacto',
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  
  {
    path: '/probando',
    name: 'Probando',
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Probando.vue')
  },


  {
    path: '/blogs/:id',
    name: 'Blog',
    props: true,
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Blogs/Blog.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
