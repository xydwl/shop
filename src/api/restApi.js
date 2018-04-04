import {Auth, PecooIndex, userCenter, flash} from './path'
import {requestControl} from './requestControl'
import axios from 'axios'
import qs from 'qs'

var poster = axios.create({
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    return qs.stringify(data)
  }]
})

// 图片验证码
export function getcaptchas () {
  return requestControl(Auth.getcaptchas, {})
}
/**
 * 登录
 */
export function LoginIn (data) {
  return requestControl(Auth.LoginIn, data)
}

/**
 * 获取手机验证码
 */
export function phoneNum (data) {
  return requestControl(Auth.phoneNum, data)
}

/**
 * 注册
 */
export function resginUser (data) {
  return requestControl(Auth.resginUser, data)
}

/**
 * 登出
 */
export function loginOutValue () {
  localStorage.clear()
}

/**
 * 忘记密码重新设置密码
 */
export function resetPsd (data) {
  return requestControl(Auth.resetPsd, data)
}

// 搜索关键词
export function KeywordsUrl () {
  return requestControl(PecooIndex.KeywordsUrl, {sourceMode: 'PC', tokenId: ''})
}
// 根据关键词查询分页
export function searchKeywordsUrl () {
  return requestControl(PecooIndex.searchKeywordsUrl, {sourceMode: 'PC', tokenId: ''})
}
// 三级菜单
export function queryBanner () {
  return requestControl(PecooIndex.queryBanner, {sourceMode: 'PC', tokenId: '', type: '01'})
}

// 今日推荐
export function queryQualityGoodsUrl (data) {
  return requestControl(PecooIndex.queryQualityGoodsUrl, data)
}

// 拍卖会
export function queryQualityAuctionUrl () {
  return requestControl(PecooIndex.queryQualityAuctionUrl, {sourceMode: 'PC', tokenId: ''})
}

// 列表其他
export function queryIndexPageGoodsUrl (indexNum) {
  return requestControl(PecooIndex.queryIndexPageGoodsUrl, {sourceMode: 'PC', tokenId: '', type: indexNum})
}
// 猜你喜欢
export function likes () {
  return requestControl(PecooIndex.queryPopularGoods, {})
}

export function queryQualityFlashGoodsUrl (indexNum) {
  return requestControl(PecooIndex.queryQualityFlashGoodsUrl, {sourceMode: 'PC', tokenId: ''})
}

// 拍卖会列表
export function pageAuction (page, perPage) {
  return requestControl(PecooIndex.pageAuctionUrl, {sourceMode: 'PC', tokenId: '', pageNo: page, pageSize: perPage})
}

// 拍卖会详情列表
export function auctionDetail (auctionId, page, perPage) {
  return requestControl(PecooIndex.queryAuctionGoodsUrl, {auctionId: auctionId, pageNo: page, pageSize: perPage})
}
// 其他列表二级筛选
export function queryKindsUrl (kindCode) {
  return requestControl(PecooIndex.queryKindsUrl, {sourceMode: 'PC', kindCode: kindCode})
}
// 拍卖其他详情列表
export function querySecondGooodsUrl (kindType, pageNo, sort) {
  return requestControl(PecooIndex.querySecondGooodsUrl, {sourceMode: 'PC', tokenId: '', kindType: kindType, pageNo: pageNo, sort: sort})
}
// 闪购系列的接口
export function getLuxuryList (kindType, pageNo, sort) {
  return requestControl(flash.getLuxuryList, {sourceMode: 'PC', tokenId: '', kindType: kindType, pageNo: pageNo, sort: sort})
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
