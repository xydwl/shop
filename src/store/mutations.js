import { CHANGE_LOGINWAY, CHANGE_SHOW} from './mutations-type.js'

export default{
  CHANGE_LOGINWAY (state, type) {
    state.loginway = type
  },
  CHANGE_SHOW (state, type) {
    state.show = type
  },
  CHANGE_FOOTWAY (state, type) {
    state.footway = type
  },
  userInfo (state, obj) {
    state.userInfo = obj
  }
}

