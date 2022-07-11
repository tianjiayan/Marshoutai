const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  actionList: (state) => state.user.actionList
}
export default getters
