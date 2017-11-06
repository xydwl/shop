import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
Vue.use(Vuex)

var local = window.location.href.split('/')
local = local[local.length - 1]
let tokenId = localStorage.getItem('tokenId') || ''

const state = {
  userInfo: [],
  loginway: 'login',
  footway: local,
  tokenId: tokenId,
  brandsArr: [
    {
      name: 'footRegister',
      navName: '注册新用户'
    }, {
      name: 'footProcess',
      navName: '拍卖流程'
    }, {
      name: 'footAppraisel',
      navName: '专家鉴定'
    }, {
      name: 'footInsurance',
      navName: '货品保险'
    }, {
      name: 'footTranport',
      navName: '货品物流'
    }
  ],
  headerList: [
    {
      name: '首页',
      Ename: 'index'
    }, {
      name: '今日推荐',
      Ename: 'today'
    }, {
      name: '拍卖会',
      Ename: 'auction'
    }, {
      name: '艺术品',
      Ename: 'artList'
    }, {
      name: '名表',
      Ename: 'artList'
    }, {
      name: '珠宝',
      Ename: 'artList'
    }, {
      name: '收藏品',
      Ename: 'artList'
    }, {
      name: '老爷车',
      Ename: 'artList'
    }, {
      name: '相机&乐器',
      Ename: 'artList'
    }, {
      name: '奢侈品',
      Ename: 'light'
    }
  ],
  allItems: [
    {
      name: '拍卖订单',
      indexs: 0,
      center: [
        {
          cName: '已出价',
          eName: 'myBid'
        }, {
          cName: '竞拍成功',
          eName: 'myBuction'
        }, {
          cName: '已付款',
          eName: 'myPay'
        }, {
          cName: '已发货',
          eName: 'myShipper'
        }, {
          cName: '已完成',
          eName: 'myBuy'
        }, {
          cName: '竞拍失败',
          eName: 'myBuyFail'
        }
      ]
    }, {
      name: '奢侈品订单',
      indexs: 1,
      center: [
        {
          cName: '已下单',
          eName: 'myPlaced'
        }, {
          cName: '待付运费',
          eName: 'myWait'
        }, {
          cName: '已发货',
          eName: 'myShip'
        }, {
          cName: '已完成',
          eName: 'myComplete'
        }, {
          cName: '失败订单',
          eName: 'myFailCard'
        }
      ]
    }, {
      name: '个人中心',
      indexs: 2,
      center: [
        {
          cName: '我的账户',
          eName: 'myAccount'
        }, {
          cName: '代金券',
          eName: 'myCode'
        }, {
          cName: '我的收藏',
          eName: 'myCollect'
        }, {
          cName: '账户安全',
          eName: 'mySecuty'
        }, {
          cName: '收货地址',
          eName: 'myAdress'
        }, {
          cName: '站内信',
          eName: 'myLetter'
        }, {
          cName: '添加银行卡',
          eName: 'myBank'
        }
      ]
    }, {
      name: '我的推荐',
      indexs: 3,
      center: [
        {
          cName: '我的推荐',
          eName: 'myReccond'
        }, {
          cName: '推荐订单',
          eName: 'myCard'
        }
      ]
    }
  ]
}

export default new Vuex.Store({state, getters, actions, mutations})
