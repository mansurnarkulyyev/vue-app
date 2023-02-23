import ErrorPage from './pages/ErrorPage';
import { createRouter, createWebHistory } from "vue-router"
const HomePage = () => import('./pages/HomePage');
const Product = () => import('./pages/Product.vue');

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'homepage',
  },
  {
    path: '/products/:id',
    component: Product,
    name: 'product',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
    name: 'error-page',
  },
];

  const router = createRouter({
        history : createWebHistory(),
        routes
    })

router.beforeEach((to, from, next) => {
  // const isLoggedIn = store.getters['auth/isLoggedIn'];

  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   if (!isLoggedIn) {
  //     next({ name: 'login-page' });
  //   }
  // }

  // if (to.matched.some((record) => record.meta.hideForAuth)) {
  //   if (isLoggedIn) {
  //     next({ name: 'homepage' });
  //   }
  // }

  next();
});

export default router;



   