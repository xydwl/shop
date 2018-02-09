<template>
  <div class="love">
    <p class="indexTodayTitle" style="padding-top: 15px;">
      猜你喜欢
      <span>Lovely</span>
    </p>
    <div class="loveDiv" style="overflow: hidden;">
      <ul style="overflow-y: hidden;overflow-x: auto;width:2400px;left:0px;">
        <li>
          <router-link v-for="item in loveItems" :to="{name:'GoodsDetail', query:{goodsId:item.pkId}}" :key="item.goodsName">
            <p class="loveImg"><img :src="item.thumbnailUrl" /></p>
            <p class="loveP2">Lot{{item.lotNum}}:{{item.goodsName}}</p>
            <p>{{item.priceUnit}}{{item.startPrice}}</p>
          </router-link>
        </li>
      </ul>
      <div class="loveLeft" @click="goLeft"><img src="../../assets/images/common/left1.jpg" /></div>
      <div class="loveRight" @click="goRight"><img src="../../assets/images/common/right1.jpg" /></div>
    </div>
  </div>
</template>
<script>
import {
  likes
} from '../../api/restApi'
import $ from 'jquery'
export default {
  data () {
    return {
      loveItems: []
    }
  },
  created () {
    this.getLove()
  },
  methods: {
    goLeft: function () {
      var dlWidth = $('.loveDiv ul li a').outerWidth(true)
      var leftValue = $('.loveDiv ul').position().left
      var i = parseInt(leftValue / dlWidth)
      console.log(i)
      if (i > -5) {
        $('.loveDiv ul').stop().animate({
          'left': (i - 1) * dlWidth
        })
      }
    },
    goRight: function () {
      var dlWidth = $('.loveDiv ul li a').outerWidth(true)
      var leftValue = $('.loveDiv ul').position().left
      var i = parseInt(leftValue / dlWidth)
      if (i < 0) {
        $('.loveDiv ul').stop().animate({
          'left': (i + 1) * dlWidth
        })
      }
    },
    async getLove () {
      let response = await likes()
      try {
        this.loveItems = response.data.goods
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
/**********猜你喜欢*********/

.indexTodayTitle {
  width: 1200px;
  margin: 0 auto;
  height: 35px;
  padding-top: 45px;
  color: #333333;
  font-size: 20px;
  line-height: 35px;
  border-bottom: 1px solid #666666;
  padding-top: 45px;
}

.indexTodayTitle span {
  color: #999;
  font-size: 18px;
  padding-left: 10px;
}

.love {
  width: 100%;
  height: 320px;
  margin: 30px 0;
  margin-top: 20px;
}

.loveP {
  width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #DDDDDD;
  position: relative;
  margin-bottom: 50px;
}

.loveP img {
  width: 135px;
  height: 32px;
  margin: 0 auto;
  display: block;
  position: absolute;
  left: 50%;
  top: -16px;
  margin-left: -68px;
}

.loveDiv {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.loveDiv ul {
  position: relative;
  overflow: hidden;
  width: 1100px;
  /*padding: 0 50px;*/
  height: 250px;
}

.loveDiv ul li {
  z-index: 200;
  position: absolute;
  left: -1200px;
  right: 0;
}

.loveDiv ul li a {
  display: block;
  text-align: center;
  float: left;
  width: 150px;
  height: 220px;
  margin: 0 45px;
  margin-top: 20px;
}

.loveDiv ul li a p {
  text-align: center;
  width: 150px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "微软雅黑";
}

.loveDiv ul li a p.loveImg {
  width: 150px;
  height: 150px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  margin: 0 45px;
  margin-bottom: 20px;
}

.loveDiv ul li a p.loveP2 {
  padding-top: 15px;
}

.loveDiv ul li img {
  max-width: 150px;
  max-height: 150px;
  margin-bottom: -10px;
}

.loveDiv ul li:first-child {
  left: 0;
}

.loveLeft {
  position: absolute;
  left: 0px;
  cursor: pointer;
  top: 90px;
  z-index: 200;
  opacity: 0.5;
  filter: Alpha(opacity=70);
}

.loveRight {
  position: absolute;
  right: 0px;
  cursor: pointer;
  top: 90px;
  z-index: 200;
  opacity: 0.5;
  filter: Alpha(opacity=70);
}

.loveRight:hover,
.loveLeft:hover {
  opacity: 1;
  filter: Alpha(opacity=10);
}
</style>
