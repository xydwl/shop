<template>
	<div>
		<div class="loginHeader">
			<div class="header_top">
				<router-link to="/home">
					<img src="../../assets/images/logo.jpg" class="fl header_logo" />
				</router-link>
				<ul class="headerUl1 fr">
					<li>
						<router-link :to="{name:'home'}">返回首页</router-link>
					</li>
					<li class="header_li2 rel" @mouseenter="enter" @mouseleave="leave">
						<router-link to="">
							<i class="ul1Phone"></i>&nbsp;拍库手机&nbsp;
							<span><img src="../../assets/images/san.png" class="header_san" /></span>
							<div class="header_div2" v-show="ecode">
								<p class="fl" style="margin-right: 10px;"><img src="../../assets/images/erweima.png" class="block" />App下载</p>
								<p class="fl"><img src="../../assets/images/erweima2.png" class="block" />微信关注</p>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="loginMain">
			<div class="loginCenter">
				<img src="../../assets/images/bg.jpg" class="fl loginBg" />
				<div class="login" style="margin-top: 100px;">
					<ul class="loginUl">
						<li class="loginUlLi1" style="text-align: left;">忘记密码</li>
					</ul>
					<!--找回密码-->
					<div class="registerDiv">
						<alert-tip :alertTips="alertTips" v-show="tipShow"></alert-tip>
						<p class="loginTel">
							<input type="text" placeholder="请输入手机号" v-model="phone" style="text-indent: 5px;" id="registerUserName" />
						</p>
						<p class="loginTel">
							<input type="password" v-model="newPsd" placeholder="设置密码 : 长度为6~16位字符" style="text-indent: 5px;" id="registerPassword" />
						</p>
						<p class="loginTel">
							<input type="password" v-model="confirmPsd" placeholder="确认密码" style="text-indent: 5px;" id="repassword" />
						</p>
						<p style="margin-bottom: 20px; height: 62px;">
							<input type="text" class="inputInt" placeholder="验证码" id="picCode" v-model="picCode" />
							<input type="text" id="verificationCodeTemp" v-model="resginCode" />
							<img :src="src" class="abcd" id="picCodeImg" @click="getCaptchaCode" />
						</p>

						<div class="cl"></div>
						<p class="registerAbcd">
							<input type="text" id="validate" v-model="validate" />
							<span @click="getPhone" id="getCode">发送验证码</span>
						</p>
						<div class="cl"></div>
						<p class="loginLog" style=" margin-bottom: 0; width: 100%;" @click="getResetPsd">确认修改</p>
						<p class="registerCheck">
							<router-link :to="{name:'login'}">
								返回登录
							</router-link>
						</p>
					</div>
				</div>
			</div>
		</div>
		<foot-bottom></foot-bottom>
	</div>
</template>

<script>
import footBottom from '../common/footer'
import {getcaptchas, phoneNum, resetPsd} from '../../api/restApi.js'
import alertTip from '../common/alertTips'
export default {
  data () {
    return {
      ecode: false,
      phone: '',
      newPsd: '',
      confirmPsd: '',
      picCode: '',
      src: '',
      disabled: false,
      getPhoneNum: '',
      validate: '',
      tipShow: false,
      alertTips: '',
      resginCode: ''
    }
  },
  created () {
    this.getCaptchaCode()
  },
  components: {
    footBottom,
    alertTip
  },
  methods: {
    enter: function () {
      this.ecode = true
    },
    leave: function () {
      this.ecode = false
    },
    async getCaptchaCode () {
      let srcde = await getcaptchas()
      this.resginCode = srcde
      this.src = 'http://www.pecoo.com/pecooservice/api/login/getValidateImgCode.htm?getVerificationCodeTemp=' + srcde + '&n=' + Math.floor(Math.random() * 100)
    },
    async getPhone (e) {
      this.tipShow = false
      if (this.phone === '') {
        this.tipShow = true
        this.alertTips = '手机号不为空'
      } else if (this.newPsd !== '' || this.confirmPsd !== '') {
        if (this.newPsd !== this.confirmPsd) {
          this.tipShow = true
          this.alertTips = '两次密码输入不一致'
        } else {
          let les = await phoneNum(this.phone, this.picCode, this.resginCode)
          var validCode = true
          if (les.code === 100601) {
            this.tipShow = true
            this.alertTips = '图片验证码错误'
            this.getCaptchaCode()
          } else if (les.code === 100601) {
            this.tipShow = true
            this.alertTips = '改手机号已被注册'
            this.getCaptchaCode()
          } else if (les.code === '0000') {
            this.tipShow = true
            this.alertTips = '验证码已发送'
            var time = 60
            if (validCode) {
              validCode = false
              var t = setInterval(function () {
                time--
                e.target.innerHTML = time + '秒'
                if (time === 0) {
                  clearInterval(t)
                  e.target.innerHTML = '重新发送'
                  validCode = true
                }
              }, 1000)
            }
          }
        }
      } else {
        this.tipShow = true
        this.alertTips = '新密码或旧密码不为空'
      }
    },
    async getResetPsd () {
      let resCode = await resetPsd(this.phone, this.newPsd, this.picCode, this.resginCode, this.validate)
      if (resCode.code === '0000') {
        this.$router.push('/login')
      } else if (resCode.code === 100501) {
        this.tipShow = true
        this.alertTips = resCode.message
      }
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/login.css';
.headerUl1 {
	margin-top: 20px;
	display: inline-flex;
}

.headerUl1 li:nth-child(1) {
	margin-right: 15px;
}

.loginLog {
	margin-bottom: 0;
	width: 100%;
}
</style>
