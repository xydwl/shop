import {Auth, PecooIndex, userCenter, flash} from './path'
import {requestControl} from './requestControl'

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
  return requestControl(PecooIndex.queryGoodsMessUrl, {goodId: goodId})
}

// 用户中心详情
export function queryInfo (tokenId) {
  return requestControl(userCenter.queryMyPecoo, {sourceMode: 'PC', tokenId: tokenId})
}
// 我的拍品
export function AllGoods (tokenId, page, perPage, startDate, endDate) {
  return requestControl(userCenter.queryAllBidGoodsUrl, {sourceMode: 'PC', tokenId: tokenId, pageNo: page, pageSize: perPage, startDate: startDate, endDate: endDate})
}
// 已出价
export function myBidgoods (tokenId, sortCol) {
  return requestControl(userCenter.queryHaveBidGoodsUrl, {sourceMode: 'PC', tokenId: tokenId, pageNo: 1, pageSize: 10, sortCol: sortCol})
}
// 竞拍成功
export function myBuctions (tokenId) {
  return requestControl(userCenter.querySuccBidGoodsUrl, {sourceMode: 'PC', tokenId: tokenId, pageNo: 1, pageSize: 10})
}
// 已付款
export function myPays (tokenId) {
  return requestControl(userCenter.queryPaidBidGoodsUrl, {sourceMode: 'PC', tokenId: tokenId, pageNo: 1, pageSize: 10})
}
// 已发货
export function myShippers (tokenId) {
  return requestControl(userCenter.queryDeliverBidGoodsUrl, {sourceMode: 'PC', tokenId: tokenId, pageNo: 1, pageSize: 10})
}
// 已完成
export function myBuys (tokenId) {
  return requestControl(userCenter.queryCompleteBidGoodsUrl, {sourceMode: 'PC', tokenId: tokenId, pageNo: 1, pageSize: 10})
}
// 竞拍失败
export function myBuyFails (tokenId) {
  return requestControl(userCenter.queryFailedBidGoodsUrl, {sourceMode: 'PC', tokenId: tokenId, pageNo: 1, pageSize: 10})
}
