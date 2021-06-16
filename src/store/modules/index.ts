/*
 * @Author: cyy
 * @Date: 2021-06-16 10:26:19
 * @LastEditors: cyy
 * @LastEditTime: 2021-06-16 10:28:33
 * @Description: 
 */
export function loadModules() {
  const context = import.meta.globEager("./*.ts") as AnyObject;

  const modules: AnyObject = {};

  Object.keys(context).forEach((key: string) => {
      if (key === './index.ts') return;
      modules[key.replace(/(\.\/|\.ts)/g, '')] = context[key].default
  });
  
  return { context, modules }
}

export const { context, modules } = loadModules();