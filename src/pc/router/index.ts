/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router';
// 路由懒加载
const HelloWorld = () => import('@/pc/components/HelloWorld.vue');
const Home = () => import('@/pc/views/Home.vue');
const router = createRouter({
  history: createWebHashHistory(),
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
