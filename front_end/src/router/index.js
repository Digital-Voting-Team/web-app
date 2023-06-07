import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VotingView from '../views/VotingView.vue'
import RegisterView from "@/views/RegisterView.vue";
import BlockchainView from "@/views/BlockchainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      number: 'home',
      component: HomeView
    },
    {
      path: '/about',
      number: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/voting',
      number: 'voting',
      component: VotingView
    },
    {
      path: '/register',
      number: 'register',
      component: RegisterView
    }
    ,
    {
      path: '/blockchain',
      number: 'blockchain',
      component: BlockchainView
    }
  ]
})

export default router
