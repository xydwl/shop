<template>
  <div>
    <div class="block" style="padding-top:0;">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in banItems" :key="item.picUrl" :style="{'background-color':item.bgColor}">
          <router-link to="">
            <img :src="item.picUrl"/>
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--今日推荐-->
    <div class="indexToday div">
      <p class="indexTodayTitle">
        今日推荐
        <span>Recommend</span>
        <router-link :to="{name:'recommend'}" target="_blank">
          更多
          <img src="../../assets/images/index/indexRight.png" />
        </router-link>
      </p>
      <div class="toadyDiv clear">
        <dl v-for="item in todayItems" :key="item.thumbnailUrl">
          <router-link to="" target="_blank">
            <dt>
              <img :src="item.thumbnailUrl" :title="item.goodsName" />
            </dt>
            <dd>
              <p>Lot&nbsp;{{item.lotNum}} ：{{item.goodsName}}</p>
              <p class="toadyDivDdP2">
                起拍价：
                <span>{{item.priceUnit}}{{item.startPrice}}</span>
              </p>
            </dd>
          </router-link>
        </dl>
      </div>
    </div>
    <!-- 拍卖品 -->
    <div class="indexToday div">
      <div>
        <p class="indexTodayTitle" style="padding-top: 40px;">
          拍卖会
          <span>Auction</span>
          <router-link :to="{name:'auction'}" target="_blank">
            更多
            <img src="../../assets/images/index/indexRight.png" />
          </router-link>
        </p>
      </div>
      <div class="auctionAllDiv">
        <div class="auctionDiv clearfix">
          <dl v-for="item in auctionItems" :key="item.auctionPic">
            <router-link to="" target="_blank">
              <dt>
                <img :src="item.auctionPic" />
              </dt>
            </router-link>
            <dd class="auctionDivDd2">
              <router-link to="" target="_blank">
                <p class="auctionName">名&nbsp;&nbsp;&nbsp; 称&nbsp;&nbsp; ：
                  <span>{{item.name}}</span>
                </p>
                <p class="auctionAddress">地&nbsp;&nbsp;&nbsp; 址&nbsp;&nbsp; ：
                  <span>{{item.address}}</span>
                </p>
                <p class="auctionTime">开拍时间：
                  <span>{{item.startTime}}</span>
                </p>
              </router-link>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- 艺术品 -->
    <div class="indexToday div">
      <div>
        <p class="indexTodayTitle" style="padding-top: 40px;">
          艺术品
          <span>Art</span>
          <router-link :to="{name:'PecooList', params:{ids:'003'}}" target="_blank">
            更多
            <img src="../../assets/images/index/indexRight.png" />
          </router-link>
        </p>
      </div>
      <div class="artDiv clearfix">
        <div class="artLeft" id="artLeft">
          <a href="artList.html?kindCode=003" target="_blank">
            <img :src="artItems.picWeb" />
          </a>
        </div>
        <div class="artRight" id="artRight">
          <router-link to="" target="_blank" v-for="items in artItems.goods" :key="items.thumbnailUrl">
            <img :src="items.thumbnailUrl" />
            <p>{{items.goodsName}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 名表 -->
    <div class="indexToday div">
      <div>
        <p class="indexTodayTitle" style="padding-top: 40px;">
          名表
          <span>Watch</span>
          <router-link :to="{name:'PecooList', params:{ids:'004'}}" target="_blank">
            更多
            <img src="../../assets/images/index/indexRight.png" />
          </router-link>
        </p>
      </div>
      <div class="artDiv clearfix">
        <div class="artLeft" id="artLeft">
          <a href="artList.html?kindCode=004" target="_blank">
            <img :src="watchItems.picWeb" />
          </a>
        </div>
        <div class="artRight" id="artRight">
          <router-link to="" target="_blank" v-for="items in watchItems.goods" :key="items.thumbnailUrl">
            <img :src="items.thumbnailUrl" />
            <p>{{items.goodsName}}</p>
          </router-link>
        </div>
      </div>
      <div class="watchLogo clearfix" id="jewelLogo">
        <a href="artList.html?kindCode=005003002" target="_blank" v-for="item in watchItems.childTypes" :key="item.name">
          <dl @mouseenter="enter" @mouseleave="leave" class="jewDl">
            <dt>
              <img :src="item.picWeb" width="180" height="90" :alt="item.name" />
            </dt>
            <dd>
              <div>
                <span class="wz">{{item.name}}</span>
                <span class="span_l"></span>
                <span class="span_r"></span>
              </div>
            </dd>
          </dl>
        </a>
      </div>
    </div>
    <!-- 珠宝 -->
    <div class="indexToday div">
      <div>
        <p class="indexTodayTitle" style="padding-top: 40px;">
          珠宝
          <span>Jewel</span>
          <router-link :to="{name:'PecooList', params:{ids:'005'}}" target="_blank">
            更多
            <img src="../../assets/images/index/indexRight.png" />
          </router-link>
        </p>
      </div>
      <div class="artDiv clearfix">
        <div class="artLeft" id="artLeft">
          <a href="artList.html?kindCode=005" target="_blank">
            <img :src="jewelItems.picWeb" />
          </a>
        </div>
        <div class="artRight" id="artRight">
          <router-link to="" target="_blank" v-for="items in jewelItems.goods" :key="items.thumbnailUrl">
            <img :src="items.thumbnailUrl" />
            <p>{{items.goodsName}}</p>
          </router-link>
        </div>
      </div>
      <div class="watchLogo clearfix" id="jewelLogo">
        <a href="artList.html?kindCode=005003002" target="_blank" v-for="item in jewelItems.childTypes" :key="item.name">
          <dl @mouseenter="enter" @mouseleave="leave" class="jewDl">
            <dt>
              <img :src="item.picWeb" width="180" height="90" :alt="item.name" />
            </dt>
            <dd>
              <div>
                <span class="wz">{{item.name}}</span>
                <span class="span_l"></span>
                <span class="span_r"></span>
              </div>
            </dd>
          </dl>
        </a>
      </div>
    </div>
    <!-- 收藏 -->
    <div class="indexToday div">
      <div>
        <p class="indexTodayTitle" style="padding-top: 40px;">
          收藏品
          <span>Collections</span>
          <router-link :to="{name:'PecooList', params:{ids:'006'}}" target="_blank">
            更多
            <img src="../../assets/images/index/indexRight.png" />
          </router-link>
        </p>
      </div>
      <div class="artDiv clearfix">
        <div class="artLeft" id="artLeft">
          <a href="artList.html?kindCode=003" target="_blank">
            <img :src="collectItems.picWeb" />
          </a>
        </div>
        <div class="artRight" id="artRight">
          <router-link to="" target="_blank" v-for="items in collectItems.goods" :key="items.thumbnailUrl">
            <img :src="items.thumbnailUrl" />
            <p>{{items.goodsName}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 车 -->
    <div class="indexToday div">
      <div></div>
      <div>
        <p class="indexTodayTitle" style="padding-top: 40px;">
          老爷车
          <span>Jalopy</span>
          <router-link :to="{name:'PecooList', params:{ids:'007'}}" target="_blank">
            更多
            <img src="../../assets/images/index/indexRight.png" />
          </router-link>
        </p>
      </div>
      <div class="artDiv clearfix">
        <div class="artLeft" id="artLeft">
          <a href="artList.html?kindCode=003" target="_blank">
            <img :src="carItems.picWeb" />
          </a>
        </div>
        <div class="artRight" id="artRight">
          <router-link to="" target="_blank" v-for="items in carItems.goods" :key="items.thumbnailUrl">
            <img :src="items.thumbnailUrl" />
            <p>{{items.goodsName}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 相机 -->
    <div class="indexToday div">
      <div>
        <p class="indexTodayTitle" style="padding-top: 40px;">
          相机&乐器
          <span>carema</span>
          <router-link :to="{name:'PecooList', params:{ids:'008'}}" target="_blank">
            更多
            <img src="../../assets/images/index/indexRight.png" />
          </router-link>
        </p>
      </div>
      <div class="artDiv clearfix">
        <div class="artLeft" id="artLeft">
          <a href="artList.html?kindCode=003" target="_blank">
            <img :src="caremaItems.picWeb" />
          </a>
        </div>
        <div class="artRight" id="artRight">
          <router-link to="" target="_blank" v-for="items in caremaItems.goods" :key="items.thumbnailUrl">
            <img :src="items.thumbnailUrl" />
            <p>{{items.goodsName}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="indexToday div">
      <p class="indexTodayTitle">
        奢饰品
        <span>Luxury</span>
        <router-link :to="{name:'luxuryView'}" target="_blank">
          更多
          <img src="../../assets/images/index/indexRight.png" />
        </router-link>
      </p>
      <div class="toadyDiv clear" id="lightDiv">
        <dl v-for="item in luxuryItems" :key="item.thumbnailUrl">
          <router-link to="">
            <dt>
              <img :src="item.thumbnailUrl" :title="item.goodsName" />
            </dt>
            <dd>
              <p>Lot&nbsp;{{item.lotNum}} ：{{item.goodsName}}</p>
              <p class="toadyDivDdP2">
                起拍价：
                <span>{{item.priceUnit}}{{item.startPrice}}</span>
              </p>
            </dd>
          </router-link>
        </dl>
      </div>
    </div>
    <loves></loves>
    <div class="stairMain">
      <ul class="stair">
        <li v-for="(item, index) in floors" :key="index" @click="jump(index)">{{item}}
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <!--右侧固定部分-->
    <div class="fixRight">
      <ul>
        <li class="indexMine">
          <router-link to="">
            <span></span>
          </router-link>
          <p>个人中心</p>
        </li>
        <li class="indexKefu" @click="easemobIM">
          在线客服
        </li>
        <li class="indexCar">
          <a href="mine.html?type=myBid">
            <span></span>
          </a>
          <p>我的拍品</p>
        </li>
        <li class="indexCollect">
          <a href="mine.html?type=myCollect">
            <span></span>
          </a>
          <p>我的收藏</p>
        </li>
        <li class="indexLogin" @click="changeLoginway('register')">
          <router-link :to="{name:'login'}" style="color:#FFFFFF;">
            <span>注册</span>
          </router-link>
        </li>
        <li class="lastTop" @click="toTop">
          <img src="../../assets/images/index/Top.png" /> TOP
          <p>回到顶部</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import loves from '../common/love'
import $ from 'jquery'
import {
  queryBanner,
  queryQualityGoodsUrl,
  queryQualityAuctionUrl,
  queryIndexPageGoodsUrl,
  queryQualityFlashGoodsUrl
} from '../../api/restApi.js'
export default {
  data () {
    return {
      banItems: [], // banner图
      todayItems: [], // 今日推荐
      auctionItems: [], // 拍卖
      artItems: [],
      watchItems: [],
      jewelItems: [],
      collectItems: [],
      carItems: [],
      caremaItems: [],
      luxuryItems: [],
      floors: ['今日推荐', '拍卖会', '艺术品', '名表', '珠宝', '收藏品', '老爷车', '相机乐器', '奢饰品']
    }
  },
  created () {
    this.getBanner()
    this.getToday()
    this.getAuction()
    this.getPagegoods()
    this.flashgoods()
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  components: {
    'loves': loves
  },
  methods: {
    changeLoginway (type) {
      this.$store.dispatch('changeLoginway', type)
    },
    easemobIM () {
      let easemobim = window.easemobim || {}
      easemobim.bind({
        tenantId: 25524,
        dialogWidth: '360px',
        dialogHeight: '550px'
      })
    },
    jump: function (index) {
      var b = true
      var top = $('.div').eq(index).offset().top - 50
      if (b) {
        b = false
        $('body,html').animate({
          scrollTop: top
        }, 500, function () {
          b = true
        })
      }
    },
    onScroll: function () {
      var b = true
      var topValue = $(window).scrollTop()
      if (topValue >= 550) {
        $('.stairMain').fadeIn()
      } else {
        $('.stairMain').fadeOut()
      }
      if (b) {
        var arr = []
        $('.div').each(function (e) {
          var index = $(this).index()
          arr.push(index)
          var height = $(this).offset().top + $(this).height() / 2
          if (topValue < height) {
            for (var i = 0; i < arr.length; i++) {
              arr[i] === index
            }
            $('.stair li').find('span').removeClass('active')
            $('.stair li').eq(i - 1).find('span').addClass('active')
            return false
          }
        })
      }
    },
    enter: function (e) {
      if (e.target.className === 'jewDl') {
        $(e.target).children('dd').addClass('hover')
        $(e.target).children('dd').find('.span_l').animate({
          'height': '92px',
          'width': '182px'
        }, 300)
        $(e.target).children('dd').find('.span_r').animate({
          'height': '92px',
          'width': '182px'
        }, 300)
      }
    },
    leave: function (e) {
      if (e.target.className === 'jewDl') {
        $(e.target).children('dd').removeClass('hover')
        $(e.target).children('dd').find('.span_l').animate({
          'height': '0',
          'width': '0px'
        }, 0)
        $(e.target).children('dd').find('.span_r').animate({
          'height': '0',
          'width': '0px'
        }, 0)
      }
    },
    toTop: function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500)
    },
    async getBanner () {
      try {
        let res = await queryBanner()
        this.banItems = res.data.banners
      } catch (error) {
        console.log(error)
      }
    },
    async getToday () {
      let data = {
        sourceMode: 'PC',
        tokenId: '',
        pageNo: 1,
        pageSize: 8,
        sort: 'start_time/01'
      }
      let res = await queryQualityGoodsUrl(data)
      try {
        this.todayItems = res.data.goods
      } catch (error) {
        console.log(error)
      }
    },
    async getAuction () {
      let res = await queryQualityAuctionUrl()
      try {
        this.auctionItems = res.data.auctions
      } catch (error) {
        console.log(error)
      }
    },
    async getPagegoods () {
      try {
        let res = await queryIndexPageGoodsUrl('005')
        res.data.goods = res.data.goods.splice(0, 6)
        res.data.childTypes = res.data.childTypes.splice(0, 6)
        this.jewelItems = res.data
      } catch (error) {
        console.log(error)
      }
      try {
        let res = await queryIndexPageGoodsUrl('003')
        res.data.goods = res.data.goods.splice(0, 6)
        this.artItems = res.data
      } catch (error) {
        console.log(error)
      }
      try {
        let res = await queryIndexPageGoodsUrl('004')
        res.data.goods = res.data.goods.splice(0, 6)
        this.watchItems = res.data
      } catch (error) {
        console.log(error)
      }
      try {
        let res = await queryIndexPageGoodsUrl('006')
        res.data.goods = res.data.goods.splice(0, 6)
        this.collectItems = res.data
      } catch (error) {
        console.log(error)
      }
      try {
        let res = await queryIndexPageGoodsUrl('007')
        res.data.goods = res.data.goods.splice(0, 6)
        this.carItems = res.data
      } catch (error) {
        console.log(error)
      }
      try {
        let res = await queryIndexPageGoodsUrl('008')
        res.data.goods = res.data.goods.splice(0, 6)
        this.caremaItems = res.data
      } catch (error) {
        console.log(error)
      }
    },
    async flashgoods () {
      try {
        let res = await queryQualityFlashGoodsUrl()
        this.luxuryItems = res.data.goods.splice(0, 8)
      } catch (error) {
        console.log(error)
      }
    }
  }

}
</script>
<style>
@import '../../assets/css/index.css';
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.block {
  width: 100%;
  margin: 0 auto;
}

.block img {
  display:block;
  width: 1200px;
  margin:0 auto;
  height: 100%;
}

.el-carousel__arrow {
  width: 60px;
  height: 60px;
  background-color: rgba(7, 8, 7, .21);
}
.el-carousel__arrow--left{
  left:calc((100% - 1200px)/2);
}
.el-carousel__arrow--right{
  right:calc((100% - 1200px)/2);
}
.el-carousel__arrow:hover {
  background-color: rgba(7, 8, 7, .41);
}

.el-carousel__arrow i {
  font-size: 30px;
  text-align: center;
}

.el-carousel__button {
  height: 5px;
}

.stair li:last-child {
  border: none;
}
</style>
