import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import TankView from '../views/TankView.vue'
import TanksView from '../views/TanksView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import store from '../store';

const routes = [
  {
    path: '/',
    redirect: '/tanks',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '/tanks', name: 'Tanks', component: TanksView },
      { path: '/tank/:id?', name: 'Tank', component: TankView },
    ]
  },
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    component: AuthLayout,
    meta: { isGuest: true },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: LoginView
      },
      {
        path: '/register',
        name: 'Register',
        component: RegisterView
      },
    ]
  },
  { 
    path: '/:pathMatch(.*)*',
    redirect: '/login',
    name: 'NotFound',
    component: LoginView,
    meta: { isGuest: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' })
  } else if(store.state.user.token && to.meta.isGuest) {
    next({ name: 'Tanks' })
  } else {
    next()
  }
})

export default router
