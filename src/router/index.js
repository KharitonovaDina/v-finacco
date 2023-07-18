import Vue from 'vue';
import VueRouter from 'vue-router';
// import Store from '@/store';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

// function authGuard(from, to, next) {
//   if (Store.getters.isUserAuthenticated) next();
//   else next('/');
// }

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'empty' },
    component: HomeView,
  },
  {
    path: '/auth',
    name: 'auth',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "auth" */ '../views/AuthView.vue'),
    // beforeEnter: authGuard,
  },
  {
    path: '/plan',
    name: 'plan',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "plan" */ '../views/PlanView.vue'),
  },
  {
    path: '/credits',
    name: 'credits',
    meta: { layout: 'main' },
    component: () => import(/* webpackChunkName: "credits" */ '../views/CreditsView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
