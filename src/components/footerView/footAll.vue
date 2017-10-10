<template>
	<div>
	    
		<div class="aboutMain" :class="{active:footway==='footRegister'}">
			<p class="aboutTitle">
				如何注册账户?
			</p>
			<p class="title">第一步</p>
			<div class="divMain">
				1、点击网站右上方<span>注册</span>按钮，进入到注册页面。
			</div>
			<p class="title">第二步</p>
			<div class="divMain">
				1、根据提示进行输入用户名、密码、确认密码。<br />
				2、输入一个常用的手机号码，点击右侧 “获取验证码”,手机收到短信提醒后，输入 6位短信验证码，30秒内有效。<br />
				3、输入完成以上信息后，点击立即注册，即可完成注册，完成注册后即可自动登录。
			</div>
		</div>
		<div class="aboutMain" :class="{active:footway==='footProcess'}">
			<p class="aboutTitle">
				拍卖流程
			</p>
			<p class="title">具体步骤</p>
			<div class="divMain">
				1、注册账号 填写详细个人信息，提交完成注册。<br />
				2、登录账号 根据弹框提示完成用户登录后，方可购物。<br />
				3、选择商品 分类浏览或者直接搜索来查找商品。<br />
				4、提交订单 选择配送方式和支付方式后提交订单。<br />
				5、查看订单状态 查看收货地址以及支付方式税费等是否有误。<br />
			</div>
		</div>
		<div class="aboutMain" :class="{active:footway==='footAppraisel'}">
			<p class="aboutTitle">
				专家鉴定
			</p>
			<p class="title">拍卖会专区（国外在线代拍）暂未开通</p>
			<div class="divMain">
				1、当您选择鉴定服务之后，提交申请，专家鉴定需支付500元，拍库将会在12小时内回复您鉴定结果。<br />
				2、普通鉴定则需支付50元，拍库将会在10分钟之内回复您鉴定结果。
			</div>
			<p class="title">一口价专区（暂未开通）</p>
			<div class="divMain">
				1、所有一口价区域的产品都已通过拍库聘用的专家团队鉴定。<br />
				
			</div>
		</div>
		<div class="aboutMain" :class="{active:footway==='footInsurance'}">
			<p class="aboutTitle">
				货品费用
			</p>
			<p class="title">关于费用</p>
			<div class="divMain" style="padding-left: 0; text-indent: 2rem;">
				拍库网作为国内第一家跨境拍卖服务平台，原则上，我们负责协助买家竞拍指定拍品，拍卖行将收取拍品成交价格及佣金，拍库网也将收取一定金额的代拍服务费。关于竞拍成功之后的包装，运输以及保险费用（包括抽样海关及其他相关额外费用），均需买家另行支付，届时我们将提供相关凭证。
			</div>
			<p class="title">关于细则</p>
			<div class="divMain">
				1、竞拍成交价格： 以“实际成交价格”为准；此费用为境外拍卖行收取。<br />
				2、境外拍卖行佣金：按成交价格“30%”收取，此费用为境外拍卖行收取。<br />
				3、拍库平台代拍服务费：按成交价格“10%”收取，此费用为拍库网收取。<br />
				4、拍库代运服务费：按成交价格“10%”收取，此费用为拍库网收取。<br />
				5、运费及保险费： 根据物品价值，大小，重量的不同，运费及保险费价格也不 同，最终以实际价格为准（保险费为买家自由选择）。此费用为物流公司收取。<br />
				
			</div>
			<p class="title">关于保险</p>
			<div class="divMain" style="padding-left: 0; text-indent: 2rem;">
				拍品在运输过程中，不可避免地会存在一定风险，尤其是易碎贵重物品。因此，买家可选择为自己的物品投保，费用需自行承担。如需此项服务，请提前与我们联系。在买家收到货品发现破损并已投保的情况下，拍库网也会协助买家联系物流公司进行索赔。
			</div>
			<div class="divMain" style="color: #E93B39; text-align: center;">以上为拍库网服务条款与协议，如有疑虑，请与我们联系！</div>
		</div>

		<div class="aboutMain" :class="{active:footway==='footTranport'}">
			<p class="aboutTitle">
				货品物流
			</p>
			<p class="title">关于运输</p>
			<div class="divMain" style="padding-left: 0; text-indent: 2rem;">
				因为我们的拍品来自于全球不同国家拍卖行，各国家及地区运输方式以及运费也不尽相同，运费要由当地物流公司核算给出，我们将按运输公司实际给出的价格来收取运费。
			</div>
			<div class="divMain" style="padding-left: 0; text-indent: 2rem;">
				鉴于每件拍品竞拍时间不同，支付时间的不同，一般情况下发货后10个工作日内您可收到货品。我们会及时提供运单号及跟踪，方便您随时查询物流状态。
			</div>
			
		</div>
		
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
	export default{
		data(){
			return{
				type:null,
			}
		},
		created(){
			console.log(this.$route.params.id);
		},
		components:{
			
		},
		computed:{
			...mapGetters({
				footway:'getFootway'
			})
		},
		methods:{
			changeFootway(type){
				this.$store.dispatch('changeFootway',type);
			},
			changeShow(type){
				this.$store.dispatch('changeShow',type)
			}
		}
	}
</script>
<style scoped>
	.aboutMain{
		width: 1080px;
		padding: 30px;
		border: 30px solid #F3F3F3;
		margin: 0px auto;
		display:none;
	}
	.aboutTitle{
		font-size: 18px;
		font-weight: bold;
		color: #E93B39;
	}
	.title{
		font-size: 16px;
		color:#463B7F;
		line-height: 50px;
	}
	.divMain{
		color: #666666;
		line-height: 40px;
		font-size: 14px;
		padding-left: 28px;
	}
	.active{
		display:block;
	}
</style>