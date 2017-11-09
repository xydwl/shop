const EVN = 'DEV' // 'DEV' OR 'PROD'
const devBasePath = 'http://www.pecoo.com/pecooservice/api'
const prodBasePath = ''

const Auth = {}
const PecooIndex = {}
const userCenter = {}

// 登录
Auth.LoginIn = {url: '/login/loginIn.htm', method: 'post'}
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

// var baseUrl ="http://wuwu8023.iok.la/api";//五
// var baseUrl ="http://http://dailuu.vicp.io/api";
// var baseUrl ="http://www.pecoo.com/pecooservice/api";
// var baseUrl="http://192.168.1.103:8080/api";//真
// var baseUrl="http://wuwu8023.iok.la:25805/api";
// var baseUrl="http://192.168.1.87:8080/api";//甘
// var baseUrl="http://test.pecoo.cn/API/api";
// 登录、注册、密码
// var loginUrl =baseUrl+'/login/loginIn.htm'; /*登录*/
// var registerUrl=baseUrl+'/login/userRegister.htm';/*注册*/
// var resetPasswordUrl=baseUrl+'/login/resetPassword.htm';/*重置密码*/
// var ValidateImgUrl=baseUrl+'/login/getValidateImgCode.htm'/*获取图形验证码*/
// var VerificationCodeUrl=baseUrl+'/login/getVerificationCode.htm'/*获取短信验证码*/
// var changePasswordUrl=baseUrl+'/login/changePassword.htm'/*修改密码*/
// var VerificationCodeTempUrl=baseUrl+'/login/getVerificationCodeTemp.htm'//图片验证码上的验证码
// var updateMobileUrl=baseUrl+'/login/updateMobile.htm'/*修改手机号*/
// //首页接口
// var KeywordsUrl=baseUrl+'/indexPage/queryHotKeywords.htm';/*搜索关键字*/
// var SubwordsUrl=baseUrl+'/indexPage/getSubKinds.htm';/*三级菜单*/
// var queryBannerUrl=baseUrl+'/indexPage/queryBanner.htm';/*首页banner部分*/
// var queryQualityGoodsUrl=baseUrl+'/indexPage/queryQualityGoods.htm';/*首页今日推荐部分*/
// var queryQualityAuctionUrl=baseUrl+'/indexPage/queryQualityAuction.htm';/*首页拍卖会部分*/
// var queryQualityFlashGoodsUrl=baseUrl+'/indexPage/queryQualityFlashGoods.htm';/*首页奢侈品部分*/
// var queryIndexPageGoodsUrl=baseUrl+'/indexPage/queryIndexPageGoods.htm';//搜索列表页
// var queryPopularGoods=baseUrl+'/indexPage/queryPopularGoods.htm';//猜你喜欢接口
// var searchKeywordsUrl=baseUrl+'/indexPage/searchKeywords.htm';//根据关键词查询分页显示
// //拍卖会接口
// var pageAuctionUrl=baseUrl+'/auction/pageAuctionPc.htm'; //全球拍卖会
// var queryAuctionGoodsUrl=baseUrl+'/auction/queryAuctionGoods.htm'; //拍卖会详情

// //收货地址接口
// var getAddressList=baseUrl+'/verify/address/getAddressList.htm';/*用户收货地址列表*/
// var getAddressUrl=baseUrl+'/verify/address/addAddress.htm';/*添加收货地址*/
// var queryDefaultAddress=baseUrl+'/verify/address/queryDefaultAddress.htm';/*查询默认收货地址*/
// var updateAddressUrl=baseUrl+'/verify/address/updateAddress.htm';/*编辑收货地址*/
// var deleteAddress=baseUrl+'/verify/address/deleteAddress.htm';/*删除收货地址*/

// //分类列表
// var queryKindsUrl=baseUrl+'/goods/queryKinds.htm';/*二级三级名称*/
// var querySecondGooodsUrl=baseUrl+'/goods/querySecondGooods.htm';/*分类下的拍品列表*/

// //拍品详情接口
// var queryGoodsMessUrl=baseUrl+'/goods/queryGoodsMess.htm';//拍品详情展示
// var transGoodsMessUrl=baseUrl+'/goods/transGoodsMess';//翻译
// var vcreateOrderUrl=baseUrl+'/verify/createOrder.htm';//判断是否有保证金出价

// //收藏、取消收藏
// var addUserCollectionUrl=baseUrl+'/verify/collection/addUserCollection.htm';//收藏
// var delUserCollectionUrl=baseUrl+'/verify/collection/delUserCollection.htm';//取消收藏

// //奢侈品
// var querySecondGooodsfUrl=baseUrl+'/goods/querySecondGooodsf';//奢侈品列表
// var queryFgoodsMessUrl=baseUrl+'/goods/queryFlashsaleGood.htm'; //奢侈品详情
// var getSubSaleHotKindsUrl=baseUrl+'/indexPage/getSubSaleHotKinds';//奢侈品分类
// var createFOrderUrl=baseUrl+'/verify/createFOrder';//奢侈品下单
// var queryHaveFlashGoods=baseUrl+'/verify/flashOrder/queryHaveFlashGoods.htm';//已下单
// var queryUnDeliverFlashGoods=baseUrl+'/verify/flashOrder/queryUnDeliverFlashGoods';//奢侈品待付运费
// var queryDeliverFlashGoods=baseUrl+'/verify/flashOrder/queryDeliverFlashGoods';//已发货
// var receiptFlashOrder=baseUrl+'/verify/flashOrder/receiptFlashOrder';//确认收货
// var queryCompleteFlashGoods=baseUrl+'/verify/flashOrder/queryCompleteFlashGoods';//已完成
// var queryFaildFlashGoods=baseUrl+'/verify/flashOrder/queryFaildFlashGoods';//购买失败订单
// var setFlashOrderPayWeb=baseUrl+'/verify/flashOrder/setFlashOrderPayWeb';//奢侈品支付
// var cancelFlashOrderUrl=baseUrl+'/verify/flashOrder/cancelFlashOrder';//取消订单
// //支付奢侈品订单
// var setFlashOrderPayWebUrl=baseUrl+'/verify/flashOrder/setFlashOrderPayWeb.htm';
// //var setFlashOrderPayWebUrl=baseUrl+'/verify/orderNew/setFlashOrderPayWeb.htm';
// var setFlashOrderPayMobileUrl=baseUrl+'/verify/orderNew/setFlashOrderPayMobile.htm';//闪购发送验证码

// //我的奢侈品订单-付款页面详情
// var getFlashOrderPayMessUrl=baseUrl+'/verify/flashOrder/getFlashOrderPayMess.htm';

// //个人中心
// var queryMyCollectionUrl=baseUrl+'/verify/collection/queryMyCollection.htm';//查个人中心收藏
// var queryMyMessagesStateCountUrl=baseUrl+'/verify/pecooMessage/queryMyMessagesStateCount.htm'//查找我的站内信未读数量
// var queryMyMessagesUrl=baseUrl+'/verify/pecooMessage/queryMyMessages.htm'//站内信列表
// var readMessageUrl=baseUrl+'/verify/pecooMessage/readMessage.htm'//阅读站内信
// var delMessageUrl=baseUrl+'/verify/pecooMessage/delMessage.htm'//站内信删除

// //未做部分
// //我的推荐记录myReferrer.html//
// var queryUserRecommendsUrl=baseUrl+'/verify/account/queryUserRecommends.htm';
// //我要推荐myReferrer.html
// var getRecommendCodeUrl=baseUrl+'/verify/account/getRecommendCode.htm';//我要推荐
// //推荐订单
// var ChannelOrderListUrl=baseUrl+'/verify/order/queryChannelOrderList.htm';
// //代金券myVoucher.html
// var queryVoucherUrl=baseUrl+'/verify/account/queryVoucher.htm';//代金券
// //兑换代金券myVoucher.html
// var convertVoucherUrl=baseUrl+'/verify/account/updatePecooVoucherProvideStart.htm';//兑换代金券
// //个人中心首页mine.html//  var userWebCenterUrl=baseUrl+'/verify/account/userWebCenter.htm';//个人中心首页
// var queryMyPecooUrl=baseUrl+'/verify/account/queryMyPecoo.htm';//我的拍库

// //收货地址，详情页有写，但样式不同。
// //用户收货地址列表myAddress.html//
// var getAddressList=baseUrl+'/verify/address/getAddressList.htm';/*用户收货地址列表*/
// //添加收货地址
// var addAddressUrl=baseUrl+'/verify/address/addAddress.htm';/*添加收货地址*/
// //查询默认收货地址var queryDefaultAddress=baseUrl+'/verify/address/queryDefaultAddress.htm';/*查询默认收货地址*/
// //编辑收货地址
// var updateAddressUrl=baseUrl+'/verify/address/updateAddress.htm';/*编辑收货地址*/
// //删除收货地址
// var deleteAddressUrl=baseUrl+'/verify/address/deleteAddress.htm';/*删除收货地址*/
// //设置默认收货地址 var setDefaultAddressUrl=baseUrl+'/verify/address/setDefaultAddress.htm';//设置默认收货地址

// //拍卖订单（每个订单会多个状态改变，可以借鉴线上拍卖订单）
// //专享拍品myShop.html
// var queryAllBidGoodsUrl=baseUrl+'/verify/order/queryAllBidGoods.htm';//专享拍品
// //已出价myBid.html
// var queryHaveBidGoodsUrl=baseUrl+'/verify/order/queryHaveBidGoods.htm';//已出价
// //竞拍成功myBuction.html
// var querySuccBidGoodsUrl=baseUrl+'/verify/order/querySuccBidGoods.htm';//竞拍成功
// //已付款myPay.html
// var queryPaidBidGoodsUrl=baseUrl+'/verify/order/queryPaidBidGoods.htm';//已付款
// //已发货myShipper.html
// var queryDeliverBidGoodsUrl=baseUrl+'/verify/order/queryDeliverBidGoods.htm';//已发货
// //已完成myBuy.html
// var queryCompleteBidGoodsUrl=baseUrl+'/verify/order/queryCompleteBidGoods.htm';//已买到
// //竞拍失败myBuctionFail.html
// var queryFailedBidGoodsUrl=baseUrl+'/verify/order/queryFailedBidGoods.htm';//竞拍失败
// //取消订单
// var cancelBidOrderUrl=baseUrl+'/verify/order/cancelBidOrder.htm';
// //确认收货
// var receiptBidOrderUrl=baseUrl+'/verify/order/receiptBidOrder.htm';
// //支付订单
// var setOrderPaymentUrl=baseUrl+'/verify/order/setOrderPayment.htm';
// //var setOrderPaymentUrl=baseUrl+'/verify/orderNew/setOrderPayment.htm';//支付
// var setOrderPayMobileUrl=baseUrl+'/verify/orderNew/setOrderPayMobile.htm';//快捷支付中发短信
// var orderQuickPaymentUrl = baseUrl+'/verify/orderNew/orderQuickPayment.htm';//快捷支付

// //我的订单-获取付款页面信息
// var getOrderPayMessUrl=baseUrl+'/verify/order/getOrderPayMess.htm';

// //我的账户（充值提现等）
// //我的钱包 myAccount.html
// var queryMyAssetsUrl=baseUrl+'/verify/account/queryMyPecoo.htm'//我的钱包
// //保证金与余额互转
// var transferAccountsUrl=baseUrl+'/verify/account/transferAccounts.htm';//保证金与余额互转
// //充值记录
// var queryMyRechargeUrl=baseUrl+'/verify/rechargelog.htm';//充值记录
// //提现记录
// var queryMyWithdrawUrl=baseUrl+'/verify/withdrawlog.htm';//提现记录
// //消费记录
// var queryMyDebitUrl=baseUrl+'/verify/orderpaylog.htm';//消费记录

// var creatRechargeOrderUrl=baseUrl+'/verify/creatRechargeOrder.htm';//生成充值订单
// var getRechargeOrderUrl=baseUrl+'/verify/getRechargeOrder.htm';//查询充值订单
// var rechargeUrl=baseUrl+'/verify/recharge.htm';//支付充值订单
// //var rechargeUrl=baseUrl+'/verify/rechargeNew.htm';
// //var rechargeUrl=baseUrl+'/verify/rechargeLin.htm';
// var rechargeKuaiUrl=baseUrl+'/verify/rechargeAppNew.htm';

// var getOrderByUserUrl=baseUrl+'/verify/account/getOrderByUser.htm';//我的拍品

// var creatWithdrawOrderUrl=baseUrl+'/verify/creatWithdrawOrder.htm';//提现

// var getRechargeOrderState=baseUrl+'/verify/getRechargeOrderState.htm';//订单支付自查
// var querySaveTokenUrl=baseUrl+'/verify/account/querySaveToken.htm';//防重复提交获得Token

// //第三方支付接口--甘
// var userCertificationUrl = baseUrl+'/verify/account/userCertification';//实名认证
// var sendUserCertMsgUrl = baseUrl+'/verify/account/sendUserCertMsg';//实名认证短信验证码
// var getUserCerInfoUrl = baseUrl+'/verify/account/getUserCerInfo';//实名认证信息查询接口
// //绑卡接口
// var getBankNameByCardUrl= baseUrl+'/verify/account/getBankNameByCard';//根据银行卡号查询发卡行
// var userBindCardUrl= baseUrl+'/verify/account/userBindCard';//用户绑定银行卡
// var getUserBindCardsUrl= baseUrl+'/verify/account/getUserBindCards';//查询绑卡列表
// var getAllBanksUrl= baseUrl+'/verify/account/getAllBanks';//查询所有银行
// var getBankPayVerificationCodeUrl= baseUrl+'/verify/getBankPayVerificationCode.htm';//快捷支付短信验证码
// var userUnBindCardUrl= baseUrl+'/verify/account/userUnBindCard';//解除绑定

// //查看物流
// var queryOrderExpressUrl = baseUrl+'/verify/express/queryOrderExpress';
// //连连支付充值
// var doLinApprovePageUrl = baseUrl+'/verify/rechargeLin.htm';//连连支付
// //连连支付拍单
// var orderLianUrl = baseUrl +'/verify/orderLian/setOrderPayment.htm';
// //连连支付闪购
// var orderFlashLianUrl = baseUrl +'/verify/orderLian/setFlashOrderPayWeb.htm';
