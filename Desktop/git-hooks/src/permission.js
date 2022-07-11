import router from '@/router'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      const actions = store.getters.actionList
      if (JSON.stringify(actions) === '[]') {
        const menus = await store.dispatch('user/userPermissionList')
        const routes = await store.dispatch('permission/filterMenus', menus)
        routes.forEach((item) => router.addRoute(item))
        return next(to.path)
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
