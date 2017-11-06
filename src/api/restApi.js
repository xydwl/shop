import { Auth, PecooIndex, userCenter } from './path'
// import { hex_md5 } from '../assets/js/common/md5.js'
import axios from 'axios'
import qs from 'qs'

var poster = axios.create({
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    return qs.stringify(data)
  }]
})

/**
 * 登录
 */
export function LoginIn (mobile, pwd, picCode, verificationCodeTempLogin) {
  return poster({
    url: Auth.LoginIn.url,
    method: Auth.LoginIn.method,
    data: {
      sourceMode: 'PC',
      mobile: mobile,
      // pwd: hex_md5(pwd),
      picCode: picCode,
      verificationCodeTemp: verificationCodeTempLogin
    }
  })
}

/**
 * 获取手机验证码
 */
export function phoneNum (mobile, picCode, verificationCodeTemp) {
  return poster({
    url: Auth.phoneNum.url,
    method: Auth.phoneNum.method,
    data: {
      sourceMode: 'PC',
      mobile: mobile,
      picCode: picCode,
      verificationCodeTemp: verificationCodeTemp,
      reset: '0'
    }
  })
}

/**
 * 注册
 */
export function resginUser (mobile, pwd, picCode, resCode, validate) {
  return poster({
    url: Auth.resginUser.url,
    method: Auth.resginUser.method,
    data: {
      sourceMode: 'PC',
      mobile: mobile,
      // pwd: hex_md5(pwd),
      picCode: picCode,
      verificationCodeTemp: resCode,
      messageCode: validate
    }
  })
}

/**
 * 登出
 */
export function loginOutValue () {
  localStorage.clear()
}

/**
 * 注册
 */
export function resetPsd (mobile, pwd, picCode, resCode, validate) {
  return poster({
    url: Auth.resetPsd.url,
    method: Auth.resetPsd.method,
    data: {
      sourceMode: 'PC',
      mobile: mobile,
      // pwd: hex_md5(pwd),
      picCode: picCode,
      verificationCodeTemp: resCode,
      messageCode: validate
    }
  })
}

// 搜索关键词
export function KeywordsUrl () {
  return poster({
    url: PecooIndex.KeywordsUrl.url,
    method: PecooIndex.KeywordsUrl.method,
    data: {
      sourceMode: 'PC',
      tokenId: ''
    }
  })
}
// 根据关键词查询分页
export function searchKeywordsUrl () {
  return poster({
    url: PecooIndex.searchKeywordsUrl.url,
    method: PecooIndex.searchKeywordsUrl.method,
    data: {
      sourceMode: 'PC',
      tokenId: ''
    }
  })
}
// 三级菜单
export function queryBanner () {
  return poster({
    url: PecooIndex.queryBanner.url,
    method: PecooIndex.queryBanner.method,
    data: {
      sourceMode: 'PC',
      tokenId: '',
      type: '01'
    }
  })
}

// 今日推荐
export function queryQualityGoodsUrl (page, perPage, sort) {
  return poster({
    url: PecooIndex.queryQualityGoodsUrl.url + '?pageNo=' + page + '&pageSize=' + perPage + '&sort=' + sort,
    method: PecooIndex.queryQualityGoodsUrl.method,
    data: {
      sourceMode: 'PC',
      tokenId: ''
    }
  })
}

// 拍卖会
export function queryQualityAuctionUrl () {
  return poster({
    url: PecooIndex.queryQualityAuctionUrl.url,
    method: PecooIndex.queryQualityAuctionUrl.method,
    data: {
      sourceMode: 'PC',
      tokenId: ''
    }
  })
}

// 列表其他
export function queryIndexPageGoodsUrl (indexNum) {
  return poster({
    url: PecooIndex.queryIndexPageGoodsUrl.url,
    method: PecooIndex.queryIndexPageGoodsUrl.method,
    data: {
      sourceMode: 'PC',
      tokenId: '',
      type: indexNum
    }
  })
}
// 猜你喜欢
export function likes () {
  return poster({
    url: PecooIndex.queryPopularGoods.url,
    method: PecooIndex.queryPopularGoods.method
  })
}

export function queryQualityFlashGoodsUrl (indexNum) {
  return poster({
    url: PecooIndex.queryQualityFlashGoodsUrl.url,
    method: PecooIndex.queryQualityFlashGoodsUrl.method,
    data: {
      sourceMode: 'PC',
      tokenId: ''
    }
  })
}

// 拍卖会列表
export function pageAuction (page, perPage) {
  return poster({
    url: PecooIndex.pageAuctionUrl.url + '?pageNo=' + page + '&pageSize=' + perPage,
    method: PecooIndex.pageAuctionUrl.method,
    data: {
      sourceMode: 'PC',
      tokenId: ''
    }
  })
}

// 拍卖会详情列表
export function auctionDetail (auctionId, page, perPage) {
  return poster({
    url: PecooIndex.queryAuctionGoodsUrl.url + '?auctionId=' + auctionId + '&pageNo=' + page + '&pageSize=' + perPage,
    method: PecooIndex.queryAuctionGoodsUrl.method
  })
}

// 物品detail详情
export function GoodsDetail (goodId) {
  return poster({
    url: PecooIndex.queryGoodsMessUrl.url,
    method: PecooIndex.queryGoodsMessUrl.method,
    data: {
      goodId: goodId
    }
  })
}

// 用户中心详情
export function queryInfo (tokenId) {
  return poster({
    url: userCenter.queryMyPecoo.url,
    method: userCenter.queryMyPecoo.method,
    data: {
      sourceMode: 'PC',
      tokenId: tokenId
    }
  })
}
// 我的拍品
export function AllGoods (tokenId, page, perPage, startDate, endDate) {
  return poster({
    url: userCenter.queryAllBidGoodsUrl.url + '?sourceMode=PC&tokenId=' + tokenId + '&pageNo=' + page + '&pageSize=' + perPage + '&startDate=' + startDate + '&endDate=' + endDate,
    method: userCenter.queryAllBidGoodsUrl.method
  })
}
// 已出价
export function myBidgoods (tokenId, page, perPage, sortCol) {
  return poster({
    url: userCenter.queryHaveBidGoodsUrl.url + '?sourceMode=PC&tokenId=' + tokenId + '&pageNo=' + page + '&pageSize=' + perPage + '&sortCol' + sortCol,
    method: userCenter.queryHaveBidGoodsUrl.method
  })
}
// 竞拍成功
export function myBuctions (tokenId, page, perPage, sortCol) {
  return poster({
    url: userCenter.querySuccBidGoodsUrl.url + '?sourceMode=PC&tokenId=' + tokenId + '&pageNo=' + page + '&pageSize=' + perPage + '&sortCol' + sortCol,
    method: userCenter.querySuccBidGoodsUrl.method
  })
}
// 已付款
export function myPays (tokenId, page, perPage, sortCol) {
  return poster({
    url: userCenter.queryPaidBidGoodsUrl.url + '?sourceMode=PC&tokenId=' + tokenId + '&pageNo=' + page + '&pageSize=' + perPage + '&sortCol' + sortCol,
    method: userCenter.queryPaidBidGoodsUrl.method
  })
}
// 已发货
export function myShippers (tokenId, page, perPage, sortCol) {
  return poster({
    url: userCenter.queryDeliverBidGoodsUrl.url + '?sourceMode=PC&tokenId=' + tokenId + '&pageNo=' + page + '&pageSize=' + perPage + '&sortCol' + sortCol,
    method: userCenter.queryDeliverBidGoodsUrl.method
  })
}
// 已完成
export function myBuys (tokenId, page, perPage, sortCol) {
  return poster({
    url: userCenter.queryCompleteBidGoodsUrl.url + '?sourceMode=PC&tokenId=' + tokenId + '&pageNo=' + page + '&pageSize=' + perPage + '&sortCol' + sortCol,
    method: userCenter.queryCompleteBidGoodsUrl.method
  })
}
// 竞拍失败
export function myBuyFails (tokenId, page, perPage, sortCol) {
  return poster({
    url: userCenter.queryFailedBidGoodsUrl.url + '?sourceMode=PC&tokenId=' + tokenId + '&pageNo=' + page + '&pageSize=' + perPage + '&sortCol' + sortCol,
    method: userCenter.queryFailedBidGoodsUrl.method
  })
}
