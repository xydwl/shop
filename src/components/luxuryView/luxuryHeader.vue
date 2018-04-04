<template>
  <div>
    <div class="lightHeader">
			<div class="topNav">
				<div class="topNavCon clearfix">
					<div class="topNav_l">
							<router-link to="/" target="_blank">拍库首页</router-link>
							<router-link :to="{name:'auction'}" target="_blank">拍卖会</router-link>
							<router-link :to="{name:'luxuryView'}" target="_blank">奢侈品SALE</router-link>
					</div>
					<ul class="topNav_r">
						<li id="beforeLogin" class="login_q">
							<span>欢迎光临拍库</span>
							<router-link id="denglu" v-if="!uName" @click.native="changeLoginway('login')" :to="{name:'login'}" >请登录</router-link>
							<router-link id="yonghu" :to="{name:'Mine'}" v-if="uName" >&nbsp;{{uName}}</router-link>
							<router-link id="zhuce" v-if="!uName" @click.native="changeLoginway('register')" :to="{name:'login'}" >免费注册</router-link>
							<a id="tuichu" @click="loginout" v-if="uName" href="javascript:;">退出</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- luxuryView -->
			<div class="hwHeader">
				<div class="hwHeaderCon">
						<router-link :to="{name:'home'}" class="hwLogo"><img src="../../assets/images/light/logo.png" width="28" height="70"></router-link>
							<div class="hwHwzy"><router-link :to="{name:'luxuryView'}"></router-link></div>
							<div class="hwHeaderNav">
								<span class="navItemBg"></span>
								<ul class="clearfix">
									<li>
										<a href="luxurySearch.html"><span>品牌</span></a>
											</li>
									<li>
										<a href="lightList.html?kindCode=001002"><span>箱包</span></a>
											</li>
										<li><a href="lightList.html?kindCode=001003"><span>服装</span></a>
													
											</li>
										<li>
											<a href="lightList.html?kindCode=001004"><span>鞋履</span></a>
											</li>
											<li>
											<a href="lightList.html?kindCode=001006"><span>高级珠宝</span></a>
											</li>
										<li>
											<a href="lightList.html?kindCode=001007"><span>腕表</span></a>
										</li>
											<li>
													<a href="lightList.html?kindCode=001008"><span>配饰</span></a>
											</li>

									</ul>
							</div>
							<ul class="hwTips">
									<li><span class="tips_qqms">全球选货</span></li>
									<li><span class="tips_yzzp">专家鉴定</span></li>
									<li><span class="tips_hwzy">海外直邮</span></li>
									<li><span class="tips_zybsc">精致服务</span></li>
							</ul>
					</div>
			</div>
		</div>
  </div>
</template>

<script>
import {loginOutValue} from '../../api/restApi.js'
export default {
  data () {
    return {

    }
  },
  computed: {
    uName () {
      return this.$store.state.userInfo.userName
    }
  },
  methods: {
    changeLoginway (type) {
      this.$store.dispatch('changeLoginway', type)
    },
    async loginout () {
      await loginOutValue()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

	@import '../../assets/css/lightList.css';
</style>
