<template>
  <div>
    <div class="rMyBid">
      <p class="addressTitle">
        <router-link to="/mine">我的拍库</router-link> >
        <a href="javascript:;">已出价</a>
        <input type="hidden" id="cancelBidOrderId" />
      </p>
      <!--下单头部-->
      <ul class="bidUl1">
        <li style="width:230px">商品详情</li>
        <li style="width:11%;" class="bidStartTime">
          开拍时间
          <span  v-show="tabIndex===0" @click="sortGoods"></span>
        </li>
        <li style="width:10%;">起拍价</li>
        <li style="width:10%;">我的报价</li>
        <li style="width:13%;">货款总价</li>
        <li style="width:10%;">运费</li>
        <li style="width:10%;">状态</li>
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
            <dl style="width:210px;">
              <router-link :to="{name:'GoodsDetail',query:{goodId:item.goodsId}}" target="_blank">
                <dt><img :src="item.thumbnailUrl"></dt>
                <dd style="width:100px;">{{item.goodsName}}</dd>
              </router-link>
            </dl>
            <span style="width:11%">{{item.startTime}}</span>
            <span style="width:10%">{{item.priceUnit}}{{item.clientPrice}}</span>
            <span style="width:10%">{{item.priceUnit}}{{item.transPrice}}</span>
            <span style="width:13%">
              <b>￥{{item.goodsAmountRmb}}</b>
            </span>
            <span style="width:10%">￥{{item.realMoney}}</span>
            <span style="width:10%">{{item.orderStateMc}}</span>
            <span class="spanWuliu" onclick="expressShow('E-2017092200037')" style="width:11%">物流信息</span>
          </div>
        </li>
        <p v-if="totalIndex>=0&&orderArr.orders" style="font-size:14px; color:#666; text-align:center; line-height:60px;">暂无相关订单!</p>
      </ul>
    </div>
    <!--描述：分页-->
    <div class="pagePage">
      <p class="fl" style="font-size: 14px;color: rgb(102, 102, 102);" v-show="tabIndex===0">总共<span name="total">0</span>条已出价</p>
      <select id="selectPage" class="fr" onchange="changeColor(this.value);"></select>
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
    tabIndex: {
      type: Number,
      default: null
    },
    totalIndex: {
      type: Number,
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
      if (!this.sortchecked) {
        e.target.style.backgroundImage = 'url(' + require('../../../assets/images/mine/sanTop.png')
        this.sortchecked = true
        this.sortValue = 'startTime02'
      } else {
        e.target.style.backgroundImage = 'url(' + require('../../../assets/images/mine/sanBottom.png')
        this.sortchecked = false
        this.sortValue = 'startTime01'
      }
      this.getsortTime()
    },
    async getsortTime () {
      try {
        let response = await myBidgoods(this.tokenId, this.sortValue)
        if (response.data.code === '0000') {
          this.orderArr = response.data
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  watch: {
    tabIndex: async function () {
      if (this.totalIndex === 0) {
        switch (this.tabIndex) {
          case 0:
            this.getsortTime()
            break
          case 1:
            try {
              let response = await myBuctions(this.tokenId)
              if (response.data.code === '0000') {
                this.orderArr = response.data
              }
            } catch (error) {
              console.log(error)
            }
            break
          case 2:
            try {
              let response = await myPays(this.tokenId)
              if (response.data.code === '0000') {
                this.orderArr = response.data
              }
            } catch (error) {
              console.log(error)
            }
            break
          case 3:
            try {
              let response = await myShippers(this.tokenId)
              if (response.data.code === '0000') {
                this.orderArr = response.data
              }
            } catch (error) {
              console.log(error)
            }
            break
          case 4:
            try {
              let response = await myBuys(this.tokenId)
              if (response.data.code === '0000') {
                this.orderArr = response.data
              }
            } catch (error) {
              console.log(error)
            }
            break
          case 5:
            try {
              let response = await myBuyFails(this.tokenId)
              if (response.data.code === '0000') {
                this.orderArr = response.data
              }
            } catch (error) {
              console.log(error)
            }
            break
          default:
        }
      }
    }
  }
}
</script>
<style scoped>
@import '../../../assets/css/myBid.css';
</style>

