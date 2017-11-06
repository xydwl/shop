<template>
  <div>
    <div class="rMyBid">
      <p class="addressTitle">
        <a href="mine.html">我的拍库</a> >
        <a href="javascript:;">已出价</a>
        <input type="hidden" id="cancelBidOrderId" />
      </p>
      <!--下单头部-->
      <ul class="bidUl1">
        <li style="width:30%;">商品详情</li>
        <li style="width :11%;" class="bidStartTime">
          开拍时间
          <span @click="sortGoods"></span>
        </li>
        <li style="width:11%;">起拍价</li>
        <li style="width:11%;">我的报价</li>
        <li style="width:15%;">货款总价</li>
        <li style="width:11%;">状态</li>
        <li style="width:11%;">操作</li>
      </ul>
      <!--订单详情-->
      <ul class="bidUl2">
        <li class="clearfix" v-for="item in orderArr.orders" :key="item.pkId">
          <div class="bidUl2D1">
            <p>下单时间：
              <span>{{item.createdTime}}</span>
            </p>
            <p>订单号：
              <span>{{item.orderNo}}</span>
            </p>
          </div>
          <div class="bidUl2D2">
            <dl>
              <router-link :to="{name:'GoodsDetail',query:{goodId:item.goodsId}}" target="_blank">
                <dt><img :src="item.thumbnailUrl"></dt>
                <dd>{{item.goodsName}}</dd>
              </router-link>
            </dl>
            <span>{{item.startTime}}</span>
            <span>{{item.priceUnit}}{{item.clientPrice}}</span>
            <span>{{item.priceUnit}}{{item.transPrice}}</span>
            <span>
              <b>￥{{item.goodsAmountRmb}}</b>
            </span>
            <span>￥{{item.realMoney}}</span>
            <span>{{item.orderStateMc}}</span>
            <span class="spanWuliu" onclick="expressShow('E-2017092200037')">物流信息</span>
          </div>
        </li>
        <p v-if="orderArr.orders" style="font-size:14px; color:#666; text-align:center; line-height:60px;">暂无数据!</p>
      </ul>
    </div>
    <!--描述：分页-->
    <div class="pagePage">
      <p class="fl">总共
        <span name="total">0</span>条已出价</p>
      <select id="selectPage" class="fr" onchange="changeColor(this.value);">
      </select>
      <div class="orderlistFooter fr" unselectable="on" style="-moz-user-select: -moz-none;" onselectstart="return false;">
        <div id="pagination"></div>
      </div>
    </div>
    <!--取消订单提示框-->
    <div class="promptDiv rel">
      <p>
        温馨提示
        <img src="../../../assets/images/mine/X.png" class="promptDivX" onclick="promptHide()" />
      </p>
      <div>
        尊敬的拍库网用户：
        <p>您确定取消该订单吗？</p>
      </div>
      <p>
        <span class="promptYes">确定</span>
        <span class="promptNo" onclick="promptHide()">放弃</span>
      </p>
    </div>
  </div>
</template>
<script>
import { myBidgoods, myBuctions, myPays, myShippers, myBuys, myBuyFails } from '../../../api/restApi'
export default {
  props: {
    mineType: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      orderArr: [],
      sortchecked: false,
      sortValue: ''
    }
  },
  computed: {
    tokenId () {
      return this.$store.state.tokenId
    }
  },
  async created () {

  },
  methods: {
    sortGoods (e) {
      console.log(this.sortchecked)
      if (!this.sortchecked) {
        e.target.style.backgroundImage = 'url(' + require('../../../assets/images/mine/sanTop.png')
        this.sortchecked = true
        this.sortValue = 'startTime02'
      } else {
        e.target.style.backgroundImage = 'url(' + require('../../../assets/images/mine/sanBottom.png')
        this.sortchecked = false
        this.sortValue = 'startTime01'
      }
    }
  },
  watch: {
    '$route.query': async function () {
      let response
      switch (this.mineType) {
        case 'myBid':
          response = await myBidgoods(this.tokenId, 1, 10, this.sortValue)
          console.log(response)
          if (response.data.code === '0000') {
            this.orderArr = response.data
          }
          break
        case 'myBuction':
          response = await myBuctions(this.tokenId, 1, 10, this.sortValue)
          console.log(response)
          if (response.data.code === '0000') {
            this.orderArr = response.data
          }
          break
        case 'myPay':
          response = await myPays(this.tokenId, 1, 10, this.sortValue)
          console.log(response)
          if (response.data.code === '0000') {
            this.orderArr = response.data
          }
          break
        case 'myShipper':
          response = await myShippers(this.tokenId, 1, 10, this.sortValue)
          console.log(response)
          if (response.data.code === '0000') {
            this.orderArr = response.data
          }
          break
        case 'myBuy':
          response = await myBuys(this.tokenId, 1, 10, this.sortValue)
          console.log(response)
          if (response.data.code === '0000') {
            this.orderArr = response.data
          }
          break
        case 'myBuyFail':
          response = await myBuyFails(this.tokenId, 1, 10, this.sortValue)
          console.log(response)
          if (response.data.code === '0000') {
            this.orderArr = response.data
          }
          break
        default:

          break
      }
    }
  }
}
</script>
<style scoped>
@import '../../../assets/css/myBid.css';
</style>

