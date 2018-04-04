<template>
	<div>
		<div class="detailMain clearfix">
			<div class="detailNav">
				当前位置：首页 >
				<span>分类列表</span> >
				<span>详情</span>
			</div>
			<input name="addressId" id="getaddressId" value="" type="hidden" />
			<input name="addressesCountId" id="addressesCountId" value="" type="hidden" />
			<div class="detailDiv clearfix">
				<div class="detailDivL">
					<!--bigImg end-->
					<div id="vertical" class="bigImg">
						<img :src="bigPicUrl" alt="" id="midimg" />
						<div style="display:none;" id="winSelector"></div>
					</div>
					<!--smallImg end-->
					<div id="bigView" style="display:none;"><img alt="" src="" /></div>

					<div class="smallImg">
						<div class="scrollbutton smallImgUp disabled"></div>
						<div id="imageMenu">
							<ul>
								<li v-for="(item,index) in picItems" :key="item.seqNum" @mouseenter="showBigPic(index)">
									<img :src="item.smallPicUrl"  style="border: 0px;">
								</li>
							</ul>
						</div>
						<div class="scrollbutton smallImgDown"></div>
					</div>
					<!--分享-->
					<div class="bdsharebuttonbox" style="vertical-align: middle; line-height: 25px;">
						<a href="javascript:;" class="bds_more" data-cmd="more" style="background: url('../../assets/images/detail/share.png')no-repeat left center;">分享</a>
					</div>
				</div>
				<!--右侧部分-->
				<div class="detailDivR">
					<p class="detailName" id="nameHidden">Lot{{goodsItems.lotNum}} : {{goodsItems.goodsName}}</p>
					<div class="detailDivRDiv">
						<p class="detailTime">
							<span>开拍时间</span>
							<span id="auctionTime">{{goodsItems.startTime}}</span>
						</p>
						<p class="detailTime auctionAuctionP">
							<span>拍卖会</span>
							<span id="auctionAuction">
								<router-link :to="{name:'auctionDetail',query:{auctionId:goodsItems.auction_id}}">{{goodsItems.paName}}</router-link>
							</span>
						</p>
						<p class="detailAddress">
							<span>开拍地点</span>
							<span id="auctionAddress">{{goodsItems.address}}</span>
						</p>
						<p class="detailStart">
							<span>起拍价</span>
							<span class="unit">{{goodsItems.priceUnit}}</span>
							<span id="price">{{goodsItems.startPrice}}</span>&nbsp;&nbsp;
							<span class="unit nowStartPriceUnit"></span>
							<span id="nowStartPrice"></span>
						</p>
						<p class="detailPrice">
							<span>估计报价</span>
							<span id="estimatePrice">{{goodsItems.priceUnit}}{{goodsItems.estimateMin}}-{{goodsItems.priceUnit}}{{goodsItems.estimateMax}}</span>
						</p>
					</div>
					<div class="detailBid rel">
						<span>我的报价</span>
						<span class="detailBidUnit unit">{{goodsItems.priceUnit}} </span>
						<p class="rel detailBidP1">
							<input class="min" name="" type="button" @click="reduceNum" />
							<input class="textBox" type="text" value="" id="inputPrice" v-model="stPrice" />
							<input class="add" name="" type="button" @click="addNum" />
						</p>
						<p class="detailBidNum">
							<!-- <span class="bidNum" style="width:200px;">当前竞拍人数(
								<sl id="bidNo">0</sl>人)</span><br> -->
							<span class="bidGui" @click=" showRule= !showRule">出价规则</span>
						</p>
						<div class="abs detailGui" style="z-index: 500;" v-show="showRule">
							<img src="../../assets/images/detail/guize.png" />
						</div>
					</div>
					<div class="detailSuggest">
						<span>建议报价</span>
						<p id="fitPrice85">
							<span v-for="(item,index) in SuggestPrice" @click="priceIndex = index" :class="{active:index===priceIndex}" :key="item">{{item}}</span>
						</p>
						<span>(想要胜算更大？报价至少估价的85%)</span>
					</div>
					<div class="detailWen">
						<span>温馨提示</span>
						<p>
							境外拍卖行佣金（30%）：
							<span class="unit">{{goodsItems.priceUnit}}</span>
							<span id="pecoo30">{{stPrice*0.3}}</span><br /> 拍库平台服务费（10%）：
							<span class="unit">{{goodsItems.priceUnit}}</span>
							<span id="pecoo10">{{stPrice*0.1}}</span><br /> 保险费：如需上保险请联系客服,运费和代运服务费以实际为准
							<br /> 注：如有违约行为，将扣除相关保证金，并给予相应的处罚
							<span class="rel">
								<span class="bidGui" @click="showMargin = !showMargin">保证金规则</span>
								<img src="../../assets/images/detail/baoGui.png"  v-show="showMargin"  class="abs baoGuiImg" />
							</span><br /> 今日汇率
							<span id="Rate">{{goodsItems.priceRate}}</span>
						</p>
					</div>
					<div class="detailTotal">
						合计金额：
						<span class="unit"></span>
						<span id="total">{{goodsItems.priceUnit}} {{parseInt(stPrice*1.4)}}</span>
						<span>(约合人民币：￥
							<span id="priceRate"> {{(stPrice*1.4*goodsItems.priceRate).toFixed(2)}}</span>元)</span>
					</div>
					<p class="detailXieyi clearfix">
						<input type="checkbox" v-model="checked" id="agreementCheck" /> 我已同意阅读这拍卖的
						<span @click="showProtocolBtn">《条款与协议》</span>
					</p>
					<p class="detailBidP clearfix">
						<span class="detailBidBid" @click="isHaveMoney">立即出价</span>
						<span class="detailCollect" onclick="collectWay()">收藏</span>
						<span class="detailFan" id="fanyiCH" onclick="getFanYi()">翻译</span>
					</p>
					<p class="detail24">
						开拍前12小时内不可下单<br /> 为保障竞拍体验，建议您提前24小时下单！
					</p>
				</div>
			</div>
			<!--介绍部分-->
			<div class="detailInt">
				<!--猜你喜欢-->
				<div class="detailLove">
					<p>猜你喜欢</p>
					<div class="detailLoveDiv">
						<dl v-for="item in loveItems" :key="item.goodsName">
							<router-link :to="{name:'GoodsDetail', query:{goodsId:item.pkId}}" target="_blank">
								<dt>
									<img :src="item.thumbnailUrl">
								</dt>
								<dd>
									<p>Lot{{item.lotNum}}: {{item.goodsName}}</p>
									<p>起拍价：<span>{{item.priceUnit}}{{item.startPrice}}</span></p>
								</dd>
							</router-link>
						</dl>
					</div>
				</div>
				<div class="detailIntR">
					<!--竞拍流程-->
					<div class="detailIntR1">
						<p>竞拍流程</p>
						<img src="../../assets/images/detail/liucheng.png" />
					</div>
				</div>
				<!--详细介绍-->
				<div class="detailMiao">
					<ul class="detailMiaoUl clearfix">
						<li @click="showTabs(index)" v-for="(item,index) in tabItems" :key="item" :class="{active:tabIndex===index}">{{item}}</li>
					</ul>
					<ul class="detailMiaoUl2">
						<li v-if="tabIndex === 0" id="detailedDesc">
							Description: A marble temple dog, possible Tang dynasty, H 13,5 cm Request more information Contact: Carlo Bonte Auctions Auction: Fine Arts and Antiques Auction 26 September 2017: Asian Art Auction Date/Time: September 26, 2017 Lot: 116: A marble temple dog, possible Tang dynasty, H 13,5 cm × Select Subject Send Message Copyright © 1986-2017 Invaluable, LLC. and participating auction houses. All Rights Reserved.All content, images, and intellectual property on this site protected by digital watermark technology. Digital copying of images strictly prohibited; violators will be pursued and prosecuted to the full extent of the law including the Digital Millennium Copyright Act.Unauthorized use including account sharing of Invaluable will result in permanent account cancellation.
						</li>
						<li v-if="tabIndex === 1">
							<p>敬告：您的出价行为表明已经认同了拍库网的拍卖规则。不论成功与否，你都承担与之相应的法律行为。</p>
							注意：根据《拍卖法》的规定：买受人应当按照约定支付拍卖标的的价款，未按照约定支付价款的，应当承担违约责。通过竞买取得的拍品为特殊属性之商品，属于2014年3月15日起施行的《中华人民共和国消费者权益保护法》规定的“其他根据商品性质并经消费者在购买时确认不宜退货的商品，不适用无理由退货”。为了维护买卖双方的利益，规范网络拍卖市场的行为，如果因实物与描述明显不符，客户对拍品有退货的诉求，请在提货之日起7个工作日之内、物流发货请在签收之日起7个工作日内提出，逾期不予受理。不便之处，敬请谅解。
						</li>
						<li v-if="tabIndex === 2">
							<p>西方资产储备运输和处理:</p>
							<p style="text-indent: 2rem;">由于我们的拍品来自于全球多家拍卖行，各拍卖行的运输方式以及运费也不尽相同。买家所支付的费用中，运费为暂定数额，我们在协助买家运回拍品时，会及时与买家联系，告知其运输实际费用并收取差价。</p>
							<p style="text-indent: 2rem;">鉴于每件拍品竞拍时间不同，支付时间也不同，我们无法提供准确的到货时长，但我们保证，发货后7到10个工作日内买家可收到货品，请耐心等待。我们会提供运单跟踪，方便买家查询物流状态。</p>
						</li>
						<li v-if="tabIndex === 3">
							<p>付款方式</p>
							目前充值到平台的金额仅用作保证金，不可抵扣货款。支付货款请打至拍库网指定账户，如下：<br> 
							账户名：拍库（北京）科技有限公司；<br> 
							开户行：招商银行股份有限公司北京朝外大街支行； <br>
							账号：<span>1109 1863 6510 601</span>。<br> 
							支付宝：<span>webserver@pecoo.com</span>（请您在转账时在备注处填写您的用户名和手机号）；<br> 
							为保证您的权益，付款时请仔细核对账户，以免造成您的损失，谢谢
						</li>
					</ul>
					<div>
						<p class="ShowTitle">
							拍品展示
							<span>The auction show</span>
						</p>
						<ul class="showImg" id="underPic">
							<li v-for="item in picItems" :key="item.seqNum">
								<span>
									<img :src="item.smallPicUrl"/>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--在线客服-->
		<div class="fasService" @click="easemobIM"></div>
		<!--描述：遮罩-->
    <div class="shadeBlack" v-show="showProtocol"></div>
		<!--条款与协议-->
    <div class="xieyi" v-show="showProtocol">
			<div class="xieyiHeader">条款与协议</div>
			<span class="close" onclick="closeBox()"></span>
			<div class="xieyiContent">
				<p class="title">一、关于费用：</p>
				<p>拍库网作为国内第一家跨境拍卖服务平台，原则上，我们负责协助买家竞拍指定拍品，拍卖行将收取拍品成交价格及佣金，拍库网也将收取一定金额的代拍服务费。关于竞拍成功之后的包装，运输以及保险费用（包括抽样海关及其他相关额外费用），均需买家另行支付，届时我们将提供相关凭证。</p>
				<p class="title">费用细则：</p>
				<p>1. 竞拍成交价格： 以“实际成交价格”为准；此费用为境外拍卖行收取；</p>
				<p>2. 境外拍卖行佣金： 按成交价格“30%”收取，此费用为境外拍卖行收取；</p>
				<p>3. 拍库平台代拍服务费：按成交价格“10%”收取，此费用为拍库网收取；</p>
				<p>4. 拍库代运服务费： 按成交价格“10%”收取，此费用为拍库网收取；</p>
				<p>5. 运费及保险费： 根据物品价值，大小，重量的不同，运费及保险费价格也不同，最终以实际价格为准（保险费为买家自由选择）。此费用为物流公司收取。</p>
				<p class="title">二、关于运输：</p>
				<p>由于我们的拍品来自于全球多家拍卖行，各拍卖行的运输方式以及运费也不尽相同。买家所支付的费用中，运费为暂定数额，我们在协助买家运回拍品时，会及时与买家联系，告知其运输实际费用并收取差价。</p>
				<p>鉴于每件拍品竞拍时间不同，支付时间也不同，我们无法提供准确的到货时长，但我们保证，发货后7到10个工作日内买家可收到货品，请耐心等待。我们会提供运单跟踪，方便买家查询物流状态。</p>
				<p class="title">三、关于保险：</p>
				<p>拍品在运输过程中，不可避免地会存在一定风险，尤其是易碎贵重物品。因此，买家可选择为自己的物品投保，费用需自行承担。如需此项服务，请提前与我们联系。在买家收到货品发现破损并已投保的情况下，拍库网也会协助买家联系物流公司进行索赔。以上为拍库网服务条款与协议，如有疑虑，请与我们联系！</p>
				<p class="title">四、关于免责：</p>
				<p>免责声明：拍库网仅作为竞买人参与拍卖销售的沟通工具而非“网上拍卖公司”在任何情形下，拍库网均不是任何交易中的卖方，亦不作为任何拍卖公司的代理人或代表任何拍卖公司。如因拍品交易产生纠纷的，均由拍卖公司与竞买者独立承担所有相应的法律责任，拍库网对此不承担任何责任。 </p>
			</div>
			<div class="xieyiBtn">
				<button class="sureBtn" type="button" value="同意" @click="closeProtocol">同意</button>
			</div>
		</div>
	</div>
</template>

<script>
import { GoodsDetail, likes } from '../../api/restApi'
export default {
  data () {
    return {
      goodsItems: [],
      priceValue: null,
      picItems: [],
      smallPicIndex: 0,
      showRule: false,
      showMargin: false,
      bigPicUrl: '',
      stPrice: null,
      minPrice: null,
      priceRate: null,
      tabItems: ['宝贝描述', '注意事项', '运输', '付款'],
      tabIndex: 0,
      loveItems: [],
      showProtocol: false,
      checked: true,
      SuggestPrice: [323, 2323, 3232], // 建议报价
      priceIndex: null
    }
  },
  computed: {
    goodId () {
      return this.$route.query.goodsId
    }
  },
  async created () {
    await GoodsDetail(this.goodId).then(response => {
      this.goodsItems = response.data.auctionGoods
      this.picItems = response.data.auctionGoods.auctionGoodsPics
      this.bigPicUrl = this.picItems[0].bigPicUrl
      this.priceValue = this.goodsItems.estimateMin
      this.priceRate = this.goodsItems.priceRate
      this.minPrive()
      this.stPrice = this.priceValue + this.minPrice
    }).catch(err => {
      console.log(err)
    })
    likes().then(response => {
      this.loveItems = response.data.goods
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    minPrive () {
      if (this.priceValue >= 0 && this.priceValue < 100) {
        this.minPrice = 10
      } else if (this.priceValue >= 100 && this.priceValue < 500) {
        this.minPrice = 50
      } else if (this.priceValue >= 500 && this.priceValue < 1000) {
        this.minPrice = 100
      } else if (this.priceValue >= 1000 && this.priceValue < 2000) {
        this.minPrice = 200
      } else if (this.priceValue >= 2000 && this.priceValue < 5000) {
        this.minPrice = 250
      } else if (this.priceValue >= 5000 && this.priceValue < 10000) {
        this.minPrice = 500
      } else if (this.priceValue >= 10000 && this.priceValue < 20000) {
        this.minPrice = 1000
      } else if (this.priceValue >= 20000 && this.priceValue < 50000) {
        this.minPrice = 2000
      } else if (this.priceValue >= 50000 && this.priceValue < 20000) {
        this.minPrice = 5000
      } else {
        this.minPrice = this.priceValue + 10000
      }
    },
    reduceNum () {
      this.minPrive()
      this.stPrice = this.stPrice - this.minPrice
      this.priceValue = this.stPrice
    },
    addNum () {
      this.minPrive()
      this.stPrice = this.stPrice + this.minPrice
      this.priceValue = this.stPrice
    },
    showBigPic (index) {
      this.bigPicUrl = this.picItems[index].bigPicUrl
    },
    showTabs (index) {
      this.tabIndex = index
    },
    easemobIM () {
      let easemobim = window.easemobim || {}
      easemobim.bind({
        tenantId: 25524,
        dialogWidth: '360px',
        dialogHeight: '550px'
      })
    },
    showProtocolBtn () {
      this.showProtocol = true
      document.body.style.overflow = 'hidden'
    },
    closeProtocol () {
      this.showProtocol = false
      this.checked = true
      document.body.style.overflow = 'auto'
    },
    isHaveMoney () {

    }
  }
}
</script>
<style scoped>
@import '../../assets/css/detail.css';
</style>
