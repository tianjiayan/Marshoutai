import { setItem, getItem, removeItem } from '../../utils/storage'
import user from '../../api/user'
import getters from '../getters'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setuserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await user.login(payload)
        commit('setToken', response.data.token)
        commit('setuserInfo', response.data)
        return response
      } catch {
        console.log(err)
      }
    },
    logout({ commit }) {
      commit('setuserInfo', {})
      commit('setToken', '')
      removeItem('token')
      removeItem('userInfo')
    }
  }
}
