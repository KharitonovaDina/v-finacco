import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: HomeView,
  },
  {
    path: '/auth',
    name: 'auth',
    meta: { layout: 'empty' },
    component: () => import(/* webpackChunkName: "auth" */ '../views/AuthView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
