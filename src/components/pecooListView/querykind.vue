<template>
<div>
	<div class="listNav">
		当前位置：<router-link to="/">首页</router-link> >
		<span id="listName">分类列表</span> 
	</div>
	<div class="listDiv">
			<div class="listDivD1 clearfix"> 
				<p class="fl" >分类：</p>
				<div>
					<ul class="listDivUl1" id="listDivUl1" :class="{'expand':expand}">
						<li @click="getkindData(item,index)" v-for="(item,index) in kindData" :key="item.name" :class="{'active':showName===item.name||item.code === queryCode}">
							<span>{{item.name}}</span>
						</li>
					</ul>
				</div>
			</div>
			<ul class="listDivUl2" id="listDivUl2" v-show ="showthird">
					<li  style="display: list-item;">
						<p>{{thirdList.name}}<p/>
						<div>
							<p class="watchDivD2P">
								<a href="javascript:;" v-for="item in thirdList.thirdKinds" :class="{'active':showthirdClass===item.name || item.code === queryCode}" :key="item.name" @click="getthirdData(item)">{{item.name}}</a>
							</p>
						</div>
					</li>
				</ul>
			<p class="showMore" @click="expand =!expand" v-show="showMore">
				更多选项 <i :class="{'fa fa-angle-down':!expand, 'fa fa-angle-up':expand}"></i>
			</p>

		</div>
</div>
  
</template>
<script>
// import {queryKindsUrl} from '../../api/restApi'
import {menuAll} from '../../assets/menus'
export default {
  data () {
    return {
      kindData: [],
      expand: false,
      showName: '',
      showMore: true,
      thirdList: {},
      showthird: false,
      showthirdClass: ''
    }
  },
  computed: {
    queryCode () {
      return this.$route.query.codeName
    }
  },
  watch: {
    '$route': function () {
      this.$emit('showStatus', true)
      this.showthird = false
      if (this.kindcode !== '003') {
        this.showMore = false
      }
      menuAll.firstKinds.forEach(item => {
        if (item.code === this.kindcode) {
          this.kindData = Array.from(item.secondKinds)
          this.kindData.forEach(ele => {
            if (this.queryCode) {
              if (this.queryCode.substring(0, 6) === ele.code) {
                this.showName = ele.name
                if (ele.thirdKinds.length > 0) {
                  this.showMore = false
                  this.thirdList = ele
                  this.showthird = true
                  if (ele.code === this.queryCode) {
                    ele.thirdKinds.forEach(thirdItem => {
                      if (thirdItem.code === this.queryCode) {
                        this.showthirdClass = item.name
                      }
                    })
                  }
                }
              }
            }
          })
        }
      })
    }
  },
  async mounted () {
    if (this.kindcode !== '003') {
      this.showMore = false
    }
    menuAll.firstKinds.forEach(item => {
      if (item.code === this.kindcode) {
        this.kindData = Array.from(item.secondKinds)
        this.kindData.forEach(ele => {
          if (this.queryCode) {
            if (this.queryCode.substring(0, 6) === ele.code) {
              this.showName = ele.name
              if (ele.thirdKinds.length > 0) {
                this.showMore = false
                this.thirdList = ele
                this.showthird = true
                if (ele.code === this.queryCode) {
                  ele.thirdKinds.forEach(thirdItem => {
                    if (thirdItem.code === this.queryCode) {
                      this.showthirdClass = item.name
                    }
                  })
                }
              }
            }
          }
        })
      }
    })
  },
  props: {
    kindcode: String
  },
  methods: {
    getkindData (item, index) {
      this.$emit('searhSencond', item)
      this.showthirdClass = ''
      this.showName = item.name
    },
    getthirdData (item) {
      this.showthirdClass = item.name
      this.$emit('searhSencond', item)
    }
  }
}
</script>
<style scoped>
@import '../../assets/css/artList.css';
.expand{
	max-height:1000px;
	overflow: hidden;
}
.showMore{
	text-align: center;
	margin-top:10px;
	cursor: pointer;
}
.active{
	color: #463B7F;
  font-weight: bold;
}
</style>
