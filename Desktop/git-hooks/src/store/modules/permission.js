import { publicRoutes, prviteRoutes } from '@/router'

export default {
  namespaced: true,
  state: () => ({
    menus: publicRoutes
  }),
  mutations: {
    setMenus(state, routes) {
      state.menus = [...routes, ...publicRoutes]
    }
  },
  actions: {
    filterMenus({ commit }, actionList) {
      const routes = []
      actionList.forEach((name) => {
        routes.push(...prviteRoutes.filter((item) => item.name === name))
      })
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setMenus', routes.reverse())
      return routes
    }
  }
}
