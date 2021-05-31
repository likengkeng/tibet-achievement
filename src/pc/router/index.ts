/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';
// 路由懒加载
const HelloWorld = () => import('@/pc/components/HelloWorld.vue');
const Home = () => import('@/pc/components/Home.vue');
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: { name: 'home' } },
    {
      path: '/introduce',
      name: 'introduce',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
})

export default router;
