/*
 * @Author: cyy
 * @Date: 2021-06-16 12:59:21
 * @LastEditors: cyy
 * @LastEditTime: 2021-06-16 13:59:40
 * @Description: 
 */

import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

const isAuthenticated = () => {
  return true
}

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated()) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
