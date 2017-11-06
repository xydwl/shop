<template>
<div>
  <div class="header">
    <div class="headerTop">
      <ul class="headerIndexUl fr">
        <li>Hi&nbsp;,&nbsp;欢迎进入拍库! </li>
        <li @click="changeLoginway('login')">
          <router-link  id="denglu" v-if="!uName" :to="{name:'login'}"> &nbsp;登录</router-link>
        </li>
        <li>
          <router-link id="yonghu" v-if="uName" :to="{name:'Mine'}"> 
            &nbsp;{{uName}}
          </router-link>
        </li>
        <li @click="changeLoginway('register')" v-if="!uName">
          <router-link id="zhuce" :to="{name:'login'}">注册</router-link>
        </li>
        <li>
          <a id="tuichu" v-if="uName" href="javascript:;" @click="loginout">退出</a>
        </li>
        <li>
          <router-link to="" class="rel header_tong">
                通知 
            <span class="abs " id="messageNum" style="color:red; top:0;">0</span>
          </router-link>
        </li>
        
        <li class="headerLi1" @mouseenter="enter" @mouseleave="leave">
          <router-link to="">
            <i class="ul1Tel"></i>&nbsp;联系客服&nbsp;<span><img src="../../assets/images/common/san.png" class="header_san"/></span>
            <div class="headerDiv1" v-show="tel">
              电话:<br>400-111-2016
            </div>
          </router-link>
        </li>
        <li class="headerLi2" @mouseenter="enter" @mouseleave="leave">
          <router-link to="">
            <i class="ul1Phone"></i>&nbsp;拍库手机&nbsp;<span><img src="../../assets/images/common/san.png" class="header_san"/></span>
            <div class="headerDiv2" v-show="ecode">
              <p class="fl" style="margin-right: 10px;"><img src="../../assets/images/common/erweima.png" class="block"/>App下载</p>
              <p class="fl"><img src="../../assets/images/common/erweima2.png" class="block"/>微信关注</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="headerCenter rel clear">
      <router-link to="/home"  class="fl headerLogo"><img src="../../assets/images/common/logo.png"/></router-link>
      <router-link to="/home"  class="fl headerGif"><img src="../../assets/images/common/gif.gif"/></router-link>
      <p class="fl">
        <input type="button" value="搜索"  class="headerBtn fr" @click="findProduct();"/>
        <input type="text" placeholder="请输入搜索内容" class="headerInt fr" id="keyPro"/>
        <ul class="headCenUl abs none" id="matchingUl">
          
        </ul>
        <p class="fl headerCenterP">
          热门搜索：
          <span id="indexSearchKeyList"> 
            <a target="_blank" v-for="item in searchItems" :key="item.linkurl" :href="item.linkurl">{{item.keywordname}}&nbsp;&nbsp;</a>
          </span> 
        </p>
      </p>
      <div class="paipinDiv rel">
        <a  style="display: ;" href="javascript:;" >
          <img src="../../assets/images/common/paipinCar.png" class="header_san"/>&nbsp;&nbsp;&nbsp;&nbsp;
          我的拍品&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="../../assets/images/common/paipinSan.png" class="header_san"/>
        </a>
        <div class="abs none headPaiDiv">
          <p>竞拍中（<span id="shipai">0</span>）</p>
          <p>竞拍成功（<span id="undone">0</span>）</p>
          <p>已付款（<span id="success">0</span>）</p>               
          <p>已买拍品（<span id="buy">0</span>）</p>
          <p style="margin-bottom: 0;">竞拍失败（<span  id="failure">0</span>）</p>
        </div>
      </div>
    </div> 
  
  <!--三级菜单-->
    <div class="headerMenu clearfix">
      <ul class="pecooNav">
        <li class="one" @mouseenter="enter" @mouseleave="leave"><a href="javascript:;" class="all">全部分类 <img src="../../assets/images/common/menuBottom.png"/></a></li>
        <li><router-link :to="{name:'home'}" active-class="link--active">首页</router-link></li>
        <li><router-link :to="{name:'recommend'}" active-class="link--active">今日推荐</router-link></li>
        <li><router-link :to="{name:'auction'}" active-class="link--active">拍卖会</router-link></li>
        <li><router-link :to="{name:'PecooList', params:{ids:'003'}}" active-class="link--active">艺术品</router-link></li>
        <li><router-link :to="{name:'PecooList', params:{ids:'004'}}" active-class="link--active">名表</router-link></li>
        <li><router-link :to="{name:'PecooList', params:{ids:'005'}}" active-class="link--active">珠宝</router-link></li>
        <li><router-link :to="{name:'PecooList', params:{ids:'006'}}" active-class="link--active">收藏品</router-link></li>
        <li><router-link :to="{name:'PecooList', params:{ids:'007'}}" active-class="link--active">老爷车</router-link></li>
        <li><router-link :to="{name:'PecooList', params:{ids:'008'}}" active-class="link--active">相机&乐器</router-link></li>
        <li class="rel">
          <router-link :to="{name:'luxury'}" active-class="link--active">
            奢侈品
            <img src="../../assets/images/common/hotIcon.png" class="abs" style="right:-15px; top:-7px;"/>
          </router-link>
        </li>
      </ul>
      <div class="menuShow" id="menuShow">
          <dl v-for="itemSub in itemsAll" class="dlBox" :key="itemSub.code">
            <dt class="seckind"  @mouseenter="enter" @mouseleave="leave">
              <strong>
                <router-link :to="'/artlist?kindCode='+itemSub.code" :key="itemSub.id">{{itemSub.name}}</router-link>
              </strong>
              <p>
                <router-link v-for="itemNext in itemSub.secondKinds" :key="itemNext.id" :to="'/artlist?kindCode='+itemNext.code">{{itemNext.name}}</router-link>
              </p>
            </dt>
            <dd class="threeki"  @mouseenter="enter" @mouseleave="leave">
              <ul>
                <li>
                  <strong>分类</strong>
                  <div class="float-list-cont">
                     <router-link v-for="itemNext in itemSub.secondKinds" :key="itemNext.id" :to="'/artlist?kindCode='+itemNext.code">{{itemNext.name}}</router-link>
                  </div>
                </li>
              </ul>
            </dd>
          </dl>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
import {loginOutValue, Subwords} from '../../service/configApi.js'
import {KeywordsUrl} from '../../api/restApi.js'
import $ from 'jquery'
export default {
  data () {
    return {
      ecode: false,
      tel: false,
      mobile: '',
      items: [],
      itemsAll: [],
      searchItems: []
    }
  },
  created () {
    this.getMenu()
    KeywordsUrl().then(res => {
      console.log(res)
      this.searchItems = res.data.searchkeyword
    }).catch(err => {
      console.log(err)
    })
  },
  computed: {
    uName(){
      return this.$store.state.userInfo.userName
    }
  },
  methods: {
    changeLoginway (type) {
      this.$store.dispatch('changeLoginway', type)
    },
    enter: function (e) {
      if (e.target.className === 'headerLi2') {
        this.ecode = true
      } else if (e.target.className === 'headerLi1') {
        this.tel = true
      } else if (e.target.className === 'one') {
        $('.dlBox').show()
      } else if (e.target.className === 'seckind') {
        $(e.target).addClass('active')
        $('.dlBox').show()
        $(e.target).siblings().show()
        $(e.target).parent().siblings().find('dd').hide()
        $(e.target).parent().siblings().find('dt').removeClass('active')
      } else if (e.target.className === 'threeki') {
        $('.dlBox').show()
        $(e.target).show()
        $(e.target).siblings().addClass('active')
      }
    },
    leave: function (e) {
      if (e.target.className === 'headerLi2') {
        this.ecode = false
      } else if (e.target.className === 'headerLi1') {
        this.tel = false
      } else if (e.target.className === 'one') {
        $('.dlBox').hide()
      } else if (e.target.className === 'seckind active') {
        $('.menuShow dl,.menuShow dd').hide()
        $('.menuShow dl dt').removeClass('active')
      } else if (e.target.className === 'threeki') {
        $(e.target).hide()
        $('.dlBox').hide()
        $('.menuShow dl dt').removeClass('active')
      }
    },
    tree: function () {

    },
    async loginout () {
      await loginOutValue()
      this.$router.push('/login')
    },
    async getMenu () {
      var self = this
      self.items = await Subwords()
      self.items.forEach(function (res) {
        self.itemsAll.push(res)
      })
    }
  }
}
</script>

<style scoped>
  @import '../../assets/css/reset.css';
  @import '../../assets/css/headFooter.css';
  .header_tong span{
    right:2px;
    top:-8px!important;
  }
</style>
