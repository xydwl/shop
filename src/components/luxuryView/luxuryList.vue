<template>
	<div>
		<!--头部-->
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
			<div class="hwHeader">
				<div class="hwHeaderCon">
						<a href="index.html" class="hwLogo"><img src="../../assets/images/light/logo.png" width="28" height="70"></a>
							<div class="hwHwzy"><a href="light.html"></a></div>
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
<!-- <script>
	var str=location.href;
	if(str.indexOf("luxurySearch")>-1){
		$(".hwHeaderNav ul li:nth-child(1) a span").css({
			"color":"#E93B39",
		});
	}
	if(str.indexOf("kindCode=001002")>-1){
		$(".hwHeaderNav ul li:nth-child(2) a span").css({
			"color":"#E93B39",
		});
	}
	else if(str.indexOf("kindCode=001003")>-1){
		$(".hwHeaderNav ul li:nth-child(3) a span").css({
			"color":"#E93B39",
		});
	}
	else if(str.indexOf("kindCode=001004")>-1){
		$(".hwHeaderNav ul li:nth-child(4) a span").css({
			"color":"#E93B39",
		});
	}
	else if(str.indexOf("kindCode=001006")>-1){
		$(".hwHeaderNav ul li:nth-child(5) a span").css({
			"color":"#E93B39",
		});
	}
	else if(str.indexOf("kindCode=001007")>-1){
		$(".hwHeaderNav ul li:nth-child(6) a span").css({
			"color":"#E93B39",
		});
	}
    else if(str.indexOf("kindCode=001008")>-1){
        $(".hwHeaderNav ul li:nth-child(7) a span").css({
            "color":"#E93B39",
        });
    }
</script> -->
		<!--中间部分--->
		<div class="hwMain">
			<!--banner-->
			<div id="banners">
				<div class="content">
					<ul class="banners" id="bannersUl">
					<div class="block" style="padding-top:0;">
						<el-carousel height="400px">
							<el-carousel-item v-for="item in banItems" :key="item.picUrl">
								<router-link to="">
									<img :src="item.picUrl" />
								</router-link>
							</el-carousel-item>
						</el-carousel>
					</div>					
							<li bgColor="">
								<a href="http://www.pecoo.com/lightList.html?kindCode=001002" target="_blank">
									<img src="http://oh4n64elp.bkt.clouddn.com/fgoods//7f2f04508c464bcaa5c1bab0b72f141d" />
								</a>
							</li>
								
							<li bgColor="">
								<a href="http://www.pecoo.com/lightList.html?kindCode=001004" target="_blank">
									<img src="http://oh4n64elp.bkt.clouddn.com/fgoods//8e72099ffec44661aa0ff142cbd6ef4d" />
								</a>
							</li>
								
							<li bgColor="">
								<a href="http://www.pecoo.com/lightList.html?kindCode=001006" target="_blank">
									<img src="http://oh4n64elp.bkt.clouddn.com/fgoods//c1ebd1a109b54b63a2b353a192ff1369" />
								</a>
							</li>
					</ul>
				  <a href="javascript:void(0);" class="btn prev"></a>
					<a href="javascript:void(0);" class="btn next"></a>
					<ul class="number" id="bannerNum">
							<li><a href="javascript:void(0);"></a></li>
							<li><a href="javascript:void(0);"></a></li>
							<li><a href="javascript:void(0);"></a></li>
					</ul>
				</div>
			</div>
		</div>
		<!--时尚精选-->
		<div class="fashion clearfix">

			<div class="fashionDiv clearfix">	
				<!--左4图-->
				<div class="fashionLeft clearfix">					
							<dl class="fashionLeftDl">
								<a href="lightDetail.html?goodsId=595d50d08f894cc4b2cd94937e80e25a" target="_blank">
									<dt>
										<p class="fashionLogo">VanCleef&Arpels</p>
										<p class="fashionName">Sautoir Vintage Alhambra 20 motifs</p>
											<p class="fashionPrice">€58,100</p>
										<p class="fashionMore">更多详情  》</p>
									</dt>
									<dd>
										<p><img src="http://ov2sh6hxq.bkt.clouddn.com/thumb_4ca6dd379021ecbcb3ea672807bd9aad.png"/> </p>
									</dd>
								</a>
							</dl>											
				</div>
				<!--右1图-->
				<div class="fashionRight clearfix">
					<dl class="fashionRightDl">
						<a href="lightDetail.html?goodsId=808e70d1555943059e15ea1e8ca77022"  target="_blank">
							<dt>
								<img src="http://oh4n64elp.bkt.clouddn.com/fgoods//e8341f9a66cb4348afd1be9d3b040385"/>
							</dt>
							<dd>
								<p class="fashionLogo">Rolex 潜航者日历型-116610LV</p>
								
								
									<p class="fashionPrice fashionPrice2">€9,488</p>
								
								<p class="fashionMore2">更多详情</p>
							</dd>
						</a>
							<span>精品<br>好货</span>
					</dl>
				</div>
			</div>
		</div>
		<!--品牌专享-->
		<div class="luxuryLogo clearfix">
			<div class="fashionTitle" style="padding-bottom: 10px;">
				<p>品牌专享</p>
				<p>EXCLUSIVE BRAND</p>
			</div>
			<ul class="luxuryLogoUl">
						<li>
							<a href="lightList.html?kindCode=001002001">
								<img src="http://oh4n64elp.bkt.clouddn.com/kind//39d9125cfaa64dd4bd610c2f2815aa2e" />
								<!-- 
									<div>
										<p>GUCCI精选永恒</p>
										<p>7折<span>起</span></p>
										<p class="fashionMore2">立即购买</p>
									</div> 
								-->
							</a>
						</li>
			</ul>
		</div>
		<!--精品专区--->
		<div class="Boutique">
			<div class="fashionTitle" style="padding-bottom: 10px;">
				<p>精品专区</p>
				<p>COMPETITIVE PRODUCTS</p>
			</div>
			
					<div  class="BoutiqueDiv clearfix">
					<dl>
						<a href="lightDetail.html?goodsId=41dbcd4f668f415e857e392339f964b8" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FmMNn48C7eJDShjViP3rq5hsz--U" /> </dt>
							<dd>
								<p>GUCCI</p>
								<p>Beige Neo Vintage Duffle Bag</p>
									<p><span>€1,890</span></p>
								
							</dd>
						</a>
					</dl>
				
					<dl>
						<a href="lightDetail.html?goodsId=3e18a9e2e3f64963a6839dd034f3f2cd" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FmpOjmMgH0saKdCT4PVhX3TIzHFI?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
							<dd>
								<p>GUCCI</p>
								<p>Beige GG Supreme Angry Cat Laptop Case</p>
									<p><span>€450</span></p>
								
							</dd>
						</a>
					</dl>
				
					<dl>
						<a href="lightDetail.html?goodsId=baf1b145641a4d5dab9a73699461218f" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FtYOu4tf0UD7bqzqEydU-8Wnkq6y?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
							<dd>
								<p>GUCCI</p>
								<p>White Mini Sylvie Bag</p>
									<p><span>€1,590</span></p>
								
							</dd>
						</a>
					</dl>
				
					<dl>
						<a href="lightDetail.html?goodsId=9a1defe822d24fe1abc3b428dd090f0f" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/Frm07B4tnYuMcv8yEY5NFY3-Vlvh?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
							<dd>
								<p>GUCCI</p>
								<p>Beige GG Supreme 'Loved' Angry Cat Backpack</p>
									<p><span>€1,390</span></p>
								
							</dd>
						</a>
					</dl>
				
					<dl>
						<a href="lightDetail.html?goodsId=c4239d420ced4d32a94f47d0438255e8" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FvNlsO0CeAwiS85Ow-1WYenCdnTT?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
							<dd>
								<p>GUCCI</p>
								<p>Brown GG Supreme Courrier Tote</p>
									<p><span>€2,980</span></p>
								
							</dd>
						</a>
					</dl>
				
					</div>
					<div  class="BoutiqueDiv clearfix">
					<dl>
						<a href="lightDetail.html?goodsId=f6fe69eca9c34feb9f80c41c94f01d04" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FjejRlP-JrDoR2XeZ1fN793kGpDl" /> </dt>
							<dd>
								<p>Balenciaga</p>
								<p>Black Medium Triangle AJ Bag</p>
									<p><span>€1,695</span></p>
								
							</dd>
						</a>
					</dl>
				
					<dl>
						<a href="lightDetail.html?goodsId=d77ca3b8cd194b1ea264b068ac151307" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FmfFKzI92PVSG3Hh54Uxtwi8Esam" /> </dt>
							<dd>
								<p>Loewe</p>
								<p>Black Large Barcelona Bag</p>
									<p><span>€1,950</span></p>
								
							</dd>
						</a>
					</dl>
				
					<dl>
						<a href="lightDetail.html?goodsId=800d741741a04377b9e1372620baa6ea" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FryxNbc7cEOnWo6oEzX90ZyyAk_x" /> </dt>
							<dd>
								<p>Balenciaga</p>
								<p>Navy Campaign Logo Explorer Backpack</p>
									<p><span>€745</span></p>
								
							</dd>
						</a>
					</dl>
				
					<dl>
						<a href="lightDetail.html?goodsId=cc59855141ee4befa28f0c9b475be04d" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FvSnXwo4tdiUR41fvSb2PpfQDQpP?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
							<dd>
								<p>FENDI</p>
								<p>Black 'Bag Bugs' Backpack</p>
									<p><span>€1,590</span></p>
								
							</dd>
						</a>
					</dl>
				
					<dl>
						<a href="lightDetail.html?goodsId=4c3a9df4c4fa41a28d3ba81a015790f6" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FkK3zjT8buNLhPKEbuTvaJw4G5we?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
							<dd>
								<p>Burberry</p>
								<p>Black Small Nylon Rucksack</p>
									<p><span>€895</span></p>
								
							</dd>
						</a>
					</dl>
				
					</div>
			
			<!---中间图部分-->
			<div class="BoutiqueImg">
				<div class="BoutiqueImgLeft">
					<a href="lightList.html?kindCode=001002007">
						<img src="http://oh4n64elp.bkt.clouddn.com/kind//c23dd95c199e4d44b027c1f4899c7316" />
					</a>
					<div  class="BoutiqueThree clearfix">
						<dl>
							<a href="lightDetail.html?goodsId=5f2d9de68ead4f99b1d96bc624299c2d">
								<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/Fm5airJ0W0xk-6LPrEYkbLNmReDE?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
								<dd>
									<p>Burgundy & Pink Quilted Fanny Pack</p>
										<p><span>€1,195</span></p>
								</dd>
							</a>
						</dl>
						<dl>
							<a href="lightDetail.html?goodsId=1188b9fdf2784747a3d37191b43339f1">
								<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FoCZn1lpoJ-N9ZGPLxD36oIu20rG?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
								<dd>
									<p>Pink 'Love' Envelope Pouch</p>
										<p><span>€270</span></p>
								</dd>
							</a>
						</dl>
						<dl>
							<a href="lightDetail.html?goodsId=b90165107ea24e8e82a119d34ecbf8ad">
								<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/Fg6WIr6imL4e0EVG7jrhB40gwEZ7?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
								<dd>
									<p>havana opal sunglasses mu070s</p>
										<p><span>€250</span></p>
								</dd>
							</a>
						</dl>
					</div>
				</div>
				<div class="BoutiqueImgLeft">
					<a href="lightList.html?kindCode=001002004">
						<img src="http://oh4n64elp.bkt.clouddn.com/kind//7dc658539c584b36862d9cc222b7f0fc" />
					</a>
					<div  class="BoutiqueThree clearfix">
						<dl>
							<a href="lightDetail.html?goodsId=63171e7acb974c3cae0f25b218c5f41f">
								<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FksUuAkaLF0RzlwdvsCOFYJwxQSi" /> </dt>
								<dd>
									<p>Black & Red Medium Galleria Tote</p>
										<p><span>€2,195</span></p>
								</dd>
							</a>
						</dl>
						<dl>
							<a href="lightDetail.html?goodsId=12438fa4b6a54c51a653380d80319701">
								<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FrPZ-Q_zxUPC_17qQ93STHxc0YmW" /> </dt>
								<dd>
									<p>Pink Cahier Chain Belt Bag</p>
										<p><span>€1,350</span></p>
								</dd>
							</a>
						</dl>
						<dl>
							<a href="lightDetail.html?goodsId=9a8b62112f4142dfa3a11e24814113e4">
								<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FrEB-ISDlhGSPS2tfn6DzwqavGIO?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
								<dd>
									<p>Silver Wave Platform Brogues</p>
										<p><span>€469</span></p>
								</dd>
							</a>
						</dl>
					</div>
				</div>
			</div>


					<div  class="BoutiqueDiv clearfix">
					<dl>
						<a href="lightDetail.html?goodsId=84014e5fb2f44dbd9d4abfb368ef8a4f" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/Fg7zkbvGOcERe3uJKXjPTlGJG0CD?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
							<dd>
								<p>GUCCI</p>
								<p>White Floral Ace Sneakers</p>
									<p><span>€595</span></p>
							</dd>
						</a>
					</dl>
				
					<dl>
						<a href="lightDetail.html?goodsId=a1c4209ed8874bc9b99a9d4bb45f87be" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FhiISQ3TPhC0Qx-1nJGJT-rT44uI?imageMogr2/thumbnail/!35p/quality/85!" /> </dt>
							<dd>
								<p>GUCCI</p>
								<p>Off-White Snake Major High-Top Sneakers</p>
									<p><span>€650</span></p>
							</dd>
						</a>
					</dl>
					</div>
					<div  class="BoutiqueDiv clearfix">
					<dl>
						<a href="lightDetail.html?goodsId=e694c9d052c14050a3a8f28868d04c1c" target="_blank">
							<dt><img src="http://ov2sh6hxq.bkt.clouddn.com/FuBQn2v792uoIbNqswFlrjq-GMlh" /> </dt>
							<dd>
								<p>Burberry</p>
								<p>Grey Torto Logo Sweatshirt</p>
									<p><span>€350</span></p>
							</dd>
						</a>
					</dl>			
				</div>
		</div>
	</div>
</template>

<script>
import {loginOutValue,} from '../../api/restApi.js'
export default {
  data () {
    return {
      
    }
  },
  created () {

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
	@import '../../assets/css/light.css';
	@import '../../assets/css/lightList.css';
</style>
