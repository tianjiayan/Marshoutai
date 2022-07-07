import {setItem,getItem} from '../../utils/storage'
import user from '../../api/user'
import getters from '../getters'
export default {
  namespaced: true,
  state: () => ({
    token:getItem('token') || '',
  }),
  mutations: {
    setToken(state,token){
        state.token = token
        setItem('token',token)
    }
  },
  actions: {
    async login({commit},payload){
        try{
            const response = await user.login(payload)
            commit('setToken',response.token)
            return response
        }catch{
            console.log(err);
        }
    }
  }
}
