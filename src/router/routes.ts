/*
 * @Author: cyy
 * @Date: 2021-06-16 13:01:50
 * @LastEditors: cyy
 * @LastEditTime: 2021-06-16 13:25:06
 * @Description: 
 */
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/login', name:'Login', component: Login },
  { path: '/', name:'Home', component: Home },
  { path: '/about', name:'About', component: About },
]

export default routes