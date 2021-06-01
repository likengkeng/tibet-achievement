import { createApp } from 'vue' // Vue 3.x 引入 vue 的形式
import router from './router/index'
import store from './store/index'
import App from './App.vue' // 引入 APP 页面组建
import directive from '@/common/directives'; //注册全局自定义指令
import '../../static/styles/common.css';

const app = createApp(App) // 通过 createApp 初始化 app
Object.keys(directive).forEach(key => {
  // @ts-ignore
  app.directive(key, directive[key]);
});
app.use(router).use(store).mount('#app') // 将页面挂载到 root 节点
