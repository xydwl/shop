<template>
	<div class="luxury-wrap">
		<!--头部-->
		<luxury-header></luxury-header>
		<!--中间部分-->
		<div class="hwMain">
			<!--banner-->
			<div id="banners">
				<div class="content">
					<div class="block" style="padding-top:0;">
						<el-carousel height="400px">
							<el-carousel-item v-for="(item,index) in banItems" :key="index">
								<router-link :to="{name:'luxuryListView',query:{kindCode:item.code}}">
									<img :src="item.picUrl" />
								</router-link>
							</el-carousel-item>
						</el-carousel>
					</div>
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
		<!--精品专区-->
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
			
			<!--中间图部分-->
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
import luxuryHeader from './luxuryHeader'
export default {
  data () {
    return {
      banItems: [
        {
          picUrl: 'http://oh4n64elp.bkt.clouddn.com/fgoods//7f2f04508c464bcaa5c1bab0b72f141d',
          code: '001002'
        }, {
          picUrl: 'http://oh4n64elp.bkt.clouddn.com/fgoods//8e72099ffec44661aa0ff142cbd6ef4d',
          code: '001004'
        }, {
          picUrl: 'http://oh4n64elp.bkt.clouddn.com/fgoods//c1ebd1a109b54b63a2b353a192ff1369',
          code: '001006'
        }
      ]
    }
  },
  created () {

  },
  components: {
    'luxury-header': luxuryHeader
  }
}
</script>
<style>
	@import '../../assets/css/light.css';
	@import '../../assets/css/lightList.css';
</style>
