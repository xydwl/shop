<template>
  <div>
    <div class="mine clearfix">
      <div class="mineMain">
        <!--左侧订单menu部分-->
        <div class="mineMenu fl">
          <h3 class="myPecoo" @click="goSelf">我的拍库</h3>
          <ul class="mineUl">
            <li v-for="(item,indexs) in listItems" @click="talIndex(indexs)" :key="item.name">
              <p>{{item.name}}</p>
              <ul>
                <li v-for="(itemm,index) in item.center" :class="{active:index===tabIndex && totalIndex === indexs||itemm.eName===mineType }" @click="addIndex(index)"  :key="itemm.cName">
                  <router-link  :to="{name:'Mine',query:{type:itemm.eName}}">
                    {{itemm.cName}}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!--右侧部分-->
        <div class="mineRight fr">
          <div class="rMyPecoo" v-if="!mineType">
            <!--详细介绍部分-->
            <div class="MyPecooDiv1">
              <dl class="myPecooDl1">
                <dt>
                  <img src="../../assets/images/mine/myPecooLogo.png" />
                </dt>
                <dd>
                  <p>用户名：
                    <span id="userNameSpan">{{queryInfos.userName}}</span>
                  </p>
                  <p>绑定手机：
                    <span id="mobileSpan">{{queryInfos.mobile}}</span>
                  </p>
                  <p class="changePassword">
                    <a href="javascript:;" class="mySafe">修改登录密码</a>
                  </p>
                </dd>
              </dl>
              <dl class="myPecooDl2">
                <dt>
                  账户余额
                </dt>
                <dd>
                  <p>保证金：
                    <span></span>
                    <span id="marginBalenceSpan">{{queryInfos.marginBalence}}</span>元</p>
                  <p>(可用</span>
                    <span id="trasferMarginBalenceSpan">{{queryInfos.trasferMarginBalence}}</span>元)</p>
                  <p>余&nbsp;&nbsp;&nbsp;额：
                    <span></span>
                    <span id="accountMoneySpan">{{queryInfos.accountMoney}}</span>元</p>
                  <p>(可用
                    <span></span>
                    <span id="usedMoneySpan">{{queryInfos.usedMoney}}</span>元)</p>
                  <p>
                    <a href="javascript:;" class="chongzhi myAccount">充值</a>
                    <a href="javascript:;" class="tixian myAccount">提现</a>
                    <a href="javascript:;" class="duihuan myVoucher">兑换代金券</a>
                  </p>
                </dd>
              </dl>
              <dl class="myPecooDl3">
                <dt>
                  其他信息
                </dt>
                <dd>
                  <p>
                    <a href="mine.html?type=myBuction">
                      竞拍成功：
                      <span id="orderCountSpan">{{queryInfos.orderCount}}</span>件
                    </a>
                  </p>
                  <p>
                    <a href="mine.html?type=myCollect">
                      我的收藏：
                      <span id="assetsCountSpan">{{queryInfos.assetsCount}}</span>件
                    </a>
                  </p>
                  <p>
                    <a href="mine.html?type=myVoucher">
                      代 &nbsp;金&nbsp;劵：
                      <span id="voucherCountSpan">{{queryInfos.voucherCount}}</span>张
                    </a>
                  </p>
                </dd>
              </dl>
            </div>
            <!--专属拍品-->
            <p class="myPecooXiao">
              专属拍品
            </p>
            <!--交易记录查询-->
            <div class="mineJiluData">
              <span class="startEnd">起止日期查询：</span>
              <span class="block">
                <el-date-picker v-model="dateStart" type="date" placeholder="选择日期" :picker-options="pickerOne"></el-date-picker>
              </span>
              <span class="transverseLine">&nbsp; -- &nbsp; </span>
              <span class="block">
                <el-date-picker v-model="dateEnd" type="date" placeholder="选择日期" :picker-options="pickerTwo"></el-date-picker>
              </span>
              <span class="searchbtn">
                <button @click="checkALlBid">查询</button>
              </span>
            </div>
            <!--订单表格-->
            <table class="table">
              <tbody>
                <tr class="trFirst">
                  <td v-for="item in tableArr" :key="item">{{item}}</td>
                </tr>
                <tfoot id="queryMyDebitId" style="display:block;">
                  <tr v-for="item in allItems.orders" :key="item.pkId">
                    <td>
                      <dl class="tableDl clearfix">
                        <router-link :to="{name:'GoodsDetail',query:{goodId:item.goodsId}}" target="_blank">
                          <dt>
                            <span><img :src="item.thumbnailUrl"></span>
                          </dt>
                          <dd>
                            <p>{{item.goodsName}}</p>
                          </dd>
                        </router-link>
                      </dl>
                    </td>
                    <td>{{item.createdTime}}</td>
                    <td>{{item.priceUnit}}{{item.clientPrice}}</td>
                    <td>{{item.priceUnit}}{{item.transPrice}}</td>
                    <td>￥{{item.goodsAmountRmb}}</td>
                    <td>￥{{item.totalFreightRmb}}</td>
                    <td>{{item.orderStateMc}}</td>
                  </tr>
                  <p v-if="allLength===0" style="font-size:14px; color:#666; text-align:center; line-height:60px;">暂无数据！</p>
                </tfoot>
              </tbody>
            </table>
            <!--分页-->
            <div class="block" style="width:100%;">
              <span class="demonstration">总共 {{allItems.totalCount}} 件拍品</span>
              <el-select v-model="firstValue" @change="handlepage" filterable placeholder="请选择" class="seclectStyle">
                <el-option v-for="item in totalPage" :key="item[0]" :label="'第 ' + item + ' 页'" :value="'第 ' + item + ' 页'">
                </el-option>
              </el-select>
              <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="60" layout="prev, pager, next" :total="allItems.totalCount">
              </el-pagination>
            </div>
          </div>
          <router-view :mineType="mineType"></router-view>
          <!-- <auction-Order :mineType="mineType" v-if="mineType"></auction-Order> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AllGoods } from '../../api/restApi'
import moment from 'moment'
import auctionOrder from './AuctionOrder'
export default {
  data () {
    return {
      tabIndex: null,
      totalIndex: null,
      dateStart: null,
      dateEnd: null,
      firstValue: '',
      currentPage: 1,
      totalPage: null,
      allItems: [],
      allLength: null,
      tableArr: ['商品详情', '下单时间', '我的报价', '落槌价', '贷款总价', '运费', '状态'],
      pickerTwo: {
        disabledDate (time) {
          return false
        }
      },
      pickerOne: {
        disabledDate (time) {
          return false
        }
      }
    }
  },
  created () {
    this.$store.dispatch('getUserInfo')
    this.checkALlBid()
  },
  computed: {
    listItems () {
      return this.$store.state.allItems
    },
    queryInfos () {
      return this.$store.state.userInfo
    },
    tokenId () {
      return this.$store.state.tokenId
    },
    mineType () {
      return this.$route.query.type
    }
  },
  methods: {
    talIndex (indexs) {
      this.totalIndex = indexs
    },
    async checkALlBid () {
      let response = await AllGoods(this.tokenId, 1, 10, '', '')
      console.log(response)
      if (response.data.code === '0000') {
        this.allItems = response.data
        this.allLength = this.allItems.orders.length
      }
      this.firstValue = '第 ' + this.currentPage + ' 页'
      this.totalPage = Math.floor(this.allItems.totalCount / this.allItems.pageSize) + 1
    },
    goSelf () {
      this.totalIndex = null
      this.$router.push({
        name: 'Mine'
      })
    },
    async handleCurrentChange (val) {
      this.firstValue = '第 ' + val + ' 页'
      let response = await AllGoods(this.tokenId, val, 10, '' || moment(this.dateStart).format('YYYY-MM-DD'), '' || moment(this.dateEnd).format('YYYY-MM-DD'))
      if (response.data.code === '0000') {
        this.todaygoods = response.data
      }
      this.currentPage = val
    },
    handlepage (item) {
      this.currentPage = parseInt(item.split(' ')[1])
    },
    addIndex (index) {
      this.tabIndex = index
    }
  },
  watch: {
    dateStart (val) {
      this.pickerTwo.disabledDate = function (time) {
        return time.getTime() < val.getTime()
      }
    },
    dateEnd (val) {
      this.pickerOne.disabledDate = function (time) {
        return time.getTime() > val.getTime()
      }
    }
  },
  components: {
    'auction-Order': auctionOrder
  }
}
</script>
<style>
@import '../../assets/css/mine.css';
@import '../../assets/css/myPecoo.css';
</style>
