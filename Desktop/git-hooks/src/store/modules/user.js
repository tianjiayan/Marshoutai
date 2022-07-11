import { setItem, getItem, removeItem } from '../../utils/storage'
import user from '../../api/user'
import { setTimeStamp } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || '',
    actionList: [],
    menuList: []
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setuserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
      setTimeStamp()
    },
    setActionList(state, actionList) {
      state.actionList = actionList
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await user.login(payload)
      commit('setToken', response.token)
      commit('setuserInfo', response)
      return response
    },
    logout({ commit }) {
      commit('setuserInfo', {})
      commit('setToken', '')
      removeItem('token')
      removeItem('userInfo')
    },
    async userPermissionList({ commit }) {
      const { actionList } = await user.permissionList()
      commit('setActionList', actionList)
      return actionList
    }
  }
}
