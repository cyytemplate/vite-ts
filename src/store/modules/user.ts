/*
 * @Author: cyy
 * @Date: 2021-06-15 18:20:30
 * @LastEditors: cyy
 * @LastEditTime: 2021-06-16 13:56:41
 * @Description: 示例
 */
import { Module } from 'vuex'
const debug: boolean = process.env.NODE_ENV !== 'production'

// 为 store state 声明类型
export interface StoreUser {
  name: string
  age: number
}

const store: Module<StoreUser, unknown> = {
  namespaced: true,
  state() {
    return {
      name: 'xxx',
      age: 20
    }
  },
  mutations: {
    setUser(state: StoreUser, user:StoreUser) {
      state.name = user.name;
      state.age = user.age;
    }
  },
  actions: {
    setUser(context, user) {
      context.commit('setUser', user);
    }
  },
  getters: {
    getAge(state: StoreUser) {
      return state.age
    }
  }
}

export default store