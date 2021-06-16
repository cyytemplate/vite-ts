/*
 * @Author: cyy
 * @Date: 2021-06-15 18:18:21
 * @LastEditors: cyy
 * @LastEditTime: 2021-06-16 10:30:12
 * @Description: 
 */
import { createStore, useStore as baseUseStore, Store, createLogger } from "vuex"
import { InjectionKey } from "vue"
import { loadModules, context, modules } from "./modules"
const IS_DEV = process.env.NODE_ENV !== 'production'

export interface State {
  [key: string]: any
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore({
  modules,
  strict: IS_DEV,
  plugins: IS_DEV ? [createLogger()] : []
});

export function useStore() {
  // return baseUseStore(key);
  return baseUseStore();
}

// 热重载
if (import.meta.hot) {
  import.meta.hot?.accept(context.id, () => {
    const { modules } = loadModules()
    store.hotUpdate({
      modules
    })
  })
}

export default store;