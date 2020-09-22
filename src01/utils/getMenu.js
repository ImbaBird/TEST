import {forEach} from "./tools";

/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list) => {
  let res = []
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if ((hasChild(item) || (item.meta && item.meta.showAlways)) ) {
        obj.children = getMenuByRouter(item.children)
      }
      if (item.meta && item.meta.href)
        obj.href = item.meta.href
      res.push(obj)
    }
  })
  return res
}


