
export default{
  getLoginway (state, type) {
    state.loginway = type
  },
  getShow (state, type) {
    state.show = type
  },
  getFootway (state, type) {
    state.footway = type
  },
  userInfo (state, obj) {
    state.userInfo = obj
  }
}

