const EVN = 'DEV' // 'DEV' OR 'PROD'
const devBasePath = 'http://www.pecoo.com/pecooservice/api'
const prodBasePath = ''

const Auth = {}
const PecooIndex = {}
const userCenter = {}

// 登录
Auth.LoginIn = { url: '/login/loginIn.htm', method: 'post'}
// 获取手机验证码
Auth.phoneNum = {url: '/login/getVerificationCode.htm', method: 'post'}
// 图片图形验证码
Auth.ValidateImgUrl = {url: '/login/getValidateImgCode.htm', method: 'post'}
// 图片验证码上的验证码
Auth.getcaptchas = {url: '/login/getVerificationCodeTemp.htm', method: 'post'}
// 注册
Auth.resginUser = {url: '/login/userRegister.htm', method: 'post'}
// 忘记重置密码
Auth.resetPsd = {url: '/login/resetPassword.htm', method: 'post'}
// 修改手机号
Auth.updateMobileUrl = {url: '/login/updateMobile.htm', method: 'post'}
// 重置密码
Auth.resetPsd = {url: '/login/resetPassword.htm', method: 'post'}

// 关键词
PecooIndex.KeywordsUrl = {url: '/indexPage/queryHotKeywords.htm', method: 'get'}
// 三级菜单
PecooIndex.Subwords = {url: '/indexPage/getSubKinds.htm', method: 'get'}
// banner
PecooIndex.queryBanner = {url: '/indexPage/queryBanner.htm', method: 'post'}
// 首页今日推荐部分
PecooIndex.queryQualityGoodsUrl = {url: '/indexPage/queryQualityGoods.htm', method: 'post'}
// 首页拍卖会部分
PecooIndex.queryQualityAuctionUrl = {url: '/indexPage/queryQualityAuction.htm', method: 'get'}
// 首页奢侈品部分
PecooIndex.queryQualityFlashGoodsUrl = {url: '/indexPage/queryQualityGoods.htm', method: 'post'}
// 搜索列表页
PecooIndex.queryIndexPageGoodsUrl = {url: '/indexPage/queryIndexPageGoods.htm', method: 'post'}
// 猜你喜欢接口
PecooIndex.queryPopularGoods = {url: '/indexPage/queryPopularGoods.htm', method: 'get'}
// 根据关键词查询分页显示
PecooIndex.searchKeywordsUrl = {url: '/indexPage/searchKeywords.htm', method: 'get'}
// 全球拍卖会
PecooIndex.pageAuctionUrl = {url: '/auction/pageAuctionPc.htm', method: 'get'}
// 拍卖会详情
PecooIndex.queryAuctionGoodsUrl = {url: '/auction/queryAuctionGoods.htm', method: 'get'}

// 拍品详情展示
PecooIndex.queryGoodsMessUrl = {url: '/goods/queryGoodsMess.htm', method: 'post'}
// 判断是否有保证金出价
PecooIndex.vcreateOrderUrl = {url: '/verify/createOrder.htm', method: 'get'}

// 用户收货地址列表
userCenter.getAddressList = {url: '/verify/address/getAddressList.htm', method: 'get'}
// 添加收货地址
userCenter.getAddressUrl = {url: '/verify/address/addAddress.htm', method: 'get'}
// 查询默认收货地址
userCenter.queryDefaultAddress = {url: '/verify/address/queryDefaultAddress.htm', method: 'get'}
// 编辑收货地址
userCenter.updateAddressUrl = {url: '/verify/address/updateAddress.htm', method: 'get'}
// 删除收货地址
userCenter.deleteAddress = {url: '/verify/address/deleteAddress.htm', method: 'get'}
// 用户详情
userCenter.queryMyPecoo = {url: '/verify/account/queryMyPecoo.htm', method: 'post'}
// 我的拍品
userCenter.queryAllBidGoodsUrl = {url: '/verify/order/queryAllBidGoods.htm', method: 'get'}
// 已出价
userCenter.queryHaveBidGoodsUrl = {url: '/verify/order/queryHaveBidGoods.htm', method: 'get'}
// 竞拍成功
userCenter.querySuccBidGoodsUrl = {url: '/verify/order/querySuccBidGoods.htm', method: 'get'}
// 已付款
userCenter.queryPaidBidGoodsUrl = {url: '/verify/order/queryPaidBidGoods.htm', method: 'get'}
// 已发货
userCenter.queryDeliverBidGoodsUrl = {url: '/verify/order/queryDeliverBidGoods.htm', method: 'get'}
// 已完成
userCenter.queryCompleteBidGoodsUrl = {url: '/verify/order/queryCompleteBidGoods.htm', method: 'get'}
// 竞拍失败
userCenter.queryFailedBidGoodsUrl = {url: '/verify/order/queryFailedBidGoods.htm', method: 'get'}
// 取消订单
userCenter.cancelBidOrderUrl = {url: '/verify/order/cancelBidOrder.htm', method: 'get'}
// 确认收货
userCenter.receiptBidOrderUrl = {url: '/verify/order/receiptBidOrder.htm', method: 'get'}

toggleEVN([Auth, PecooIndex, userCenter], EVN)
/**
 * 根据evn的输入改变所有请求路径
 * @param  {Array} paths [description]
 * @param  {String} evn   当前环境 'dev' || 'prod'
 * @return {[type]}       [description]
 */
function toggleEVN (paths, evn) {
  switch (evn) {
    case 'DEV':
      paths.forEach(object => {
        for (let key in object) {
          object[key].url = devBasePath + object[key].url
        }
      })
      break
    case 'PROD':
      paths.forEach(object => {
        for (let key in object) {
          object[key].url = prodBasePath + object[key].url
        }
      })
      break
    default:
      console.error('bad parame')
  }
}
export {Auth, PecooIndex, userCenter}
