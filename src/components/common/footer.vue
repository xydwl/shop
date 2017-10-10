<template>
	<div class="footer">
		<div class="n-footer">
			<div class="service clearfix" style="background:none">
				<dl class="first">
					<dt>
						<strong>新手指南</strong>
					</dt>
					<dd>
						<div v-for="brand in brands" :key="brand.name" @click="changeFootway(brand.name)">
							<router-link :to="'/footAll/'+brand.name" rel="nofollow">{{brand.navName}}</router-link>
						</div>
					</dd>
				</dl>
				<dl>
					<dt>
						<strong>拍库特色</strong>
					</dt>
					<dd>
						<div>
							<router-link to="/specialWork" target="_blank" rel="nofollow">特色服务</router-link>
						</div>
						<div>
							<a href="javascript:;" rel="nofollow">付费服务</a>
						</div>
					</dd>
				</dl>
				<dl>
					<dt>
						<strong>合作平台</strong>
					</dt>
					<dd>
						<div>
							<a href="javascript:;" rel="nofollow">业务合作</a>
						</div>
						<div>
							<a href="javascript:;" rel="nofollow">宣传合作</a>
						</div>
					</dd>
				</dl>
				<dl>
					<dt>
						<strong>合作拍卖公司</strong>
					</dt>
					<dd>
						<div>
							<a href="javascript:;" rel="nofollow">欧洲</a>
						</div>
						<div>
							<a href="javascript:;" rel="nofollow">亚洲</a>
						</div>
						<div>
							<a href="javascript:;" rel="nofollow">美洲</a>
						</div>
						<div>
							<a href="javascript:;" rel="nofollow">澳洲</a>
						</div>
						<div>
							<a href="javascript:;" rel="nofollow">其他</a>
						</div>
					</dd>
				</dl>
				<dl class="last">
					<dt>
						<router-link to="/linkUs">
							<strong>联系我们</strong>
						</router-link>
					</dt>
					<dd>
						<div class="txt">拍库(北京)科技有限公司</div>
						<div>
							<span class="pr65">
								<a href="javascript:;" target="_blank" rel="nofollow">传真：010-85728612</a>
							</span>
						</div>
						<div>
							<span class="pr65">
								<a href="javascript:;" target="_blank" rel="nofollow">电话：400-111-2016</a>
							</span>
						</div>
					</dd>
				</dl>
			</div>
			<div class="footer-nav">
				<div class="bd">
					<ul class="clearfix">
						<li class="nf-1">
							<i></i>全球选货品类丰富</li>
						<li class="nf-2">
							<i></i>跨境拍卖机会多</li>
						<li class="nf-3">
							<i></i>大牌奢侈品折扣</li>
						<li class="nf-4">
							<i></i>权威奢侈品鉴定</li>
						<li class="nf-5">
							<i></i>贴心客服物流</li>
					</ul>
				</div>
			</div>
			<div class="footer-aboat">
				<div class="aboat-bd">
					<div class="links">
						<p class="clearfix" style="font-size: 14px;">
							本网站设计及数据均受版权保护，任何公司及个人不得以任何方式复制，违者将依法追究，特此声明。
						</p>
					</div>
					<div class="copyright" style="font-size: 14px;">
						<p class="clearfix">Copyright © 2016 拍库网- pecoo.com- 京ICP备15050956号-1</p>
					</div>
					<ul class="ewm clearfix">
						<li>
							<img src="../../../static/images/common/erweima.png" width="110" height="110" />
							<p>手机客户端</p>
						</li>
						<li class="last">
							<img src="../../../static/images/common/erweima2.png" width="110" height="110" />
							<p>官方微信</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      brands: 'getBrands'
    })
  },
  methods: {
    changeFootway (type) {
      this.$store.dispatch('changeFootway', type)
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/reset.css';
@import '../../assets/css/headFooter.css';
</style>
