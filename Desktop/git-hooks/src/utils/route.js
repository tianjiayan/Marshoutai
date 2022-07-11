// 获取一级路由
export const ObtainingLevel1Routing = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (item.meta && item.children && item.children.length > 0) {
      result.push(item)
    }
  })
  return result
}

// 判断是否为空
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '[]') return true
  if (JSON.stringify(data) === '{}') return true
  return false
}

// 生成路由数据
export const GeneratingMenuData = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (item.path === '/welcome') return
    if (isNull(item.meta) && isNull(item.children)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...GeneratingMenuData(item.children))
      return
    }
    const routePath = item.path
    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        meta: item.meta,
        path: routePath,
        children: []
      }
      if (item.meta.title) {
        result.push(route)
      }
    }
    if (item.children) {
      route.children.push(...GeneratingMenuData(item.children))
    }
  })
  return result
}
