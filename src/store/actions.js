
import { queryInfo } from '../api/restApi'
export default {
  // 改变登录方式
  changeLoginway ({ commit }, type) {
    commit('getLoginway', type)
  },
  changeFootway ({ commit }, type) {
    commit('getFootway', type)
  },
  changeShow ({ commit }, type) {
    commit('getShow', type)
  },
  async getUserInfo ({commit, state}) {
    let tokenId = localStorage.getItem('tokenId')
    let response = await queryInfo(tokenId)
    if (response.data.code === '0000') {
      commit('userInfo', response.data)
    }
  }
}
