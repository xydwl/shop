import axios from 'axios'
import config from './api.js'
import md5 from 'js-md5'

const instrance = axios.create({
  baseURL: config.baseUrl,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})
// 解码函数
function encodePicList (data) {
  let ret = []
  for (let it in data) {
    ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]))
  }
  ret = ret.join('&')
  return ret
}
var namekey = 'userName'
var userkey = 'userId'
var tokenkey = 'tokenId'
var mobilekey = 'mobile'
var isManagerkey = 'isManager'
var isChannelkey = 'isChannel'
var isCertificated = 'isCertificated'
var isBindCard = 'isBindCard'
// 图片验证码
export function getcaptchas () {
  return instrance({
    url: '/login/getVerificationCodeTemp.htm',
    method: 'POST'
  }).then(function (data) {
    var res = data.data
    return res
  }).catch(function (error) {
    console.log(error)
  })
}

// 登录
export function LoginIn (mobile, pwd, picCode, verificationCodeTempLogin) {
  var data = {
    'sourceMode': 'PC',
    'userID': '',
    'tokenId': '',
    'mobile': mobile,
    'pwd': md5(pwd),
    'picCode': picCode,
    'verificationCodeTemp': verificationCodeTempLogin
  }
  return instrance({
    url: '/login/loginIn.htm',
    method: 'POST',
    data: encodePicList(data)
  }).then(function (data) {
    var datas = data.data
    if (datas.code === '0000') {
      localStorage.setItem(userkey, datas.userId)
      localStorage.setItem(tokenkey, datas.tokenId)
      localStorage.setItem(namekey, datas.userName)
      localStorage.setItem(mobilekey, datas.mobile)
      localStorage.setItem(isManagerkey, datas.isManager)
      localStorage.setItem(isChannelkey, datas.isChannel)
      localStorage.setItem(isCertificated, datas.isCertificated)
      localStorage.setItem(isBindCard, datas.isBindCard)
    }
    return data
  }).catch(function (error) {
    console.log(error)
  })
}

// 获取手机验证码
export function phoneNum (mobile, picCode, verificationCodeTemp) {
  var data = {
    'sourceMode': 'PC',
    'mobile': mobile,
    'picCode': picCode,
    'verificationCodeTemp': verificationCodeTemp,
    reset: '0'
  }
  return instrance({
    url: '/login/getVerificationCode.htm',
    method: 'POST',
    data: encodePicList(data)
  }).then(function (data) {
    console.log(data.data)

    return data.data
  }).catch(function (error) {
    console.log(error)
  })
}

// 注册
export function resginUser (mobile, pwd, picCode, resCode, validate) {
  var data = {
    'sourceMode': 'PC',
    'userID': '',
    'tokenId': '',
    'mobile': mobile,
    'pwd': md5(pwd),
    'picCode': picCode,
    'verificationCodeTemp': resCode,
    'messageCode': validate,
    'regCode': ''
  }
  return instrance({
    url: '/login/userRegister.htm',
    method: 'POST',
    data: encodePicList(data)
  }).then(function (data) {
    console.log(data.data)
    return data.data
  }).catch(function (error) {
    console.log(error)
  })
}

// 登出
export function loginOutValue () {
  localStorage.clear()
}

// 忘记重置密码
export function resetPsd (mobile, pwd, picCode, resCode, validate) {
  var data = {
    'sourceMode': 'PC',
    'tokenId': '',
    'mobile': mobile,
    'pwd': md5(pwd),
    'picCode': picCode,
    'verificationCodeTemp': resCode,
    'messageCode': validate,
    'regCode': ''
  }
  return instrance({
    url: '/login/resetPassword.htm',
    method: 'POST',
    data: encodePicList(data)
  }).then(function (data) { // console.log(data.data);
    return data.data
  }).catch(function (error) {
    alert(error)
  })
}
// 。。。。。。。。。。。。home页。。。。。。。。。。。。
// 三级菜单
export function Subwords () {
  var data = {
    'sourceMode': 'PC',
    'tokenId': '',
    'userID': ''
  }
  return instrance({
    url: '/indexPage/getSubKinds.htm',
    method: 'GET',
    data: encodePicList(data)
  }).then(function (data) {
    var datas = data.data.firstKinds
    return datas
  }).catch(function (error) {
    alert(error)
  })
}

// banner
export function queryBanner () {
  var data = {
    'sourceMode': 'PC',
    'tokenId': '',
    'type': '01'
  }
  return instrance({
    url: '/indexPage/queryBanner.htm',
    method: 'POST',
    data: encodePicList(data)
  }).then(function (data) { // console.log(data.data.banners);
    return data.data.banners
  }).catch(function (error) {
    alert(error)
  })
}

// 今日推荐
export function todayGoods () {
  var data = {
    'sourceMode': 'PC',
    'tokenId': ''
  }
  return instrance({
    url: '/indexPage/queryQualityGoods.htm',
    method: 'GET',
    data: encodePicList(data)
  }).then(function (data) { // console.log(data.data.goods);
    return data.data.goods
  }).catch(function (error) {
    alert(error)
  })
}

// 拍卖会
export function auctionGoods () {
  var data = {
    'sourceMode': 'PC',
    'tokenId': ''
  }
  return instrance({
    url: '/indexPage/queryQualityAuction.htm',
    method: 'GET',
    data: encodePicList(data)
  }).then(function (data) {
    console.log(data.data)
    return data.data.auctions
  }).catch(function (error) {
    alert(error)
  })
}

// 艺术品---相机
export function pageGoods (indexNum) {
  var data = {
    'sourceMode': 'PC',
    'tokenId': '',
    'type': indexNum
  }
  return instrance({
    url: '/indexPage/queryPopularGoods.htm',
    method: 'post',
    data: encodePicList(data)
  }).then(function (data) { // console.log(data.data);
    return data.data
  }).catch(function (error) {
    alert(error)
  })
}
// 猜你喜歡
export function likes () {
  var data = {
    'sourceMode': 'PC',
    'tokenId': ''
  }
  return instrance({
    url: '/indexPage/queryPopularGoods.htm',
    method: 'post',
    data: encodePicList(data)
  }).then(function (data) { // console.log(data.data);
    return data.data.goods
  }).catch(function (error) {
    alert(error)
  })
}

export function luxurys () {
  var data = {
    'sourceMode': 'PC',
    'tokenId': '',
    'type': '001'
  }
  return instrance({
    url: '/indexPage/queryQualityFlashGoods.htm',
    method: 'post',
    data: encodePicList(data)
  }).then(function (data) {
    console.log(data.data)
    return data.data
  }).catch(function (error) {
    alert(error)
  })
}

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
