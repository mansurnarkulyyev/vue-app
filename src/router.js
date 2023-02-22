// import VueRouter from 'vue-router';
import ErrorPage from './pages/ErrorPage';
// import store from './store';
import { createRouter, createWebHistory } from "vue-router"
const HomePage = () => import('./pages/HomePage');
const Product = () => import('./pages/Product.vue');
// const LoginPage = () => import('./pages/Login');
// const RegistrationPage = () => import('./pages/Registration');
// const MyOrdersPage = () => import('./pages/MyOrders');

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
  // {
  //   path: '/my-orders',
  //   component: MyOrdersPage,
  //   name: 'my-orders',
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  // {
  //   path: '/login',
  //   component: LoginPage,
  //   name: 'login-page',
  //   meta: {
  //     hideForAuth: true,
  //   },
  // },
  // {
  //   path: '/registration',
  //   component: RegistrationPage,
  //   name: 'registration-page',
  //   meta: {
  //     hideForAuth: true,
  //   },
  // },
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
    name: 'error-page',
  },
];

// const router = new VueRouter({
//   routes,
//   mode: 'history',
// });

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



   