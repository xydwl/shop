import {CHANGE_LOGINWAY, CHANGE_SHOW} from './mutations-type.js'
import { queryInfo } from '../api/restApi'
export default {
  // 改变登录方式
  changeLoginway ({ commit }, type) {
    commit('CHANGE_LOGINWAY', type)
  },
  changeFootway ({ commit }, type) {
    commit('CHANGE_FOOTWAY', type)
  },
  changeShow ({ commit }, type) {
    commit('CHANGE_SHOW', type)
  },
  async getUserInfo ({commit, state}) {
    let tokenId = localStorage.getItem('tokenId')
    let response = await queryInfo(tokenId)
    if (response.data.code === '0000') {
      commit('userInfo', response.data)
    }
  }
}
