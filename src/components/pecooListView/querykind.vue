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
						<li @click="getkindData(item,index)" v-for="(item,index) in kindData" :key="item.name" :class="{'active':showindex===item.name}">
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
								<a href="javascript:;" v-for="item in thirdList.thirdKinds" :class="{'active':showthirdClass===item.name}" :key="item.name" @click="getthirdData(item)">{{item.name}}</a>
							</p>
						</div>
					</li>
				</ul>
			<p class="showMore" @click="expand =!expand" v-show="showMore">
				更多选项 <i :class="{'fa-angle-down':!expand, 'fa-angle-up':expand}"></i>
			</p>

		</div>
</div>
  
</template>
<script>
// import {queryKindsUrl} from '../../api/restApi'
import {menuAll, searchKey} from '../../assets/menus'
export default {
  data () {
		return {
			kindData:[],
			expand:false,
			showindex:'',
			showMore:true,
			thirdList:{},
			showthird:false,
			showthirdClass:''
		}
	},
	watch:{
		'$route':function(){
			this.showindex =1000
			this.showthirdClass = ''
			this.showMore = true
			this.showthird = false
			menuAll.firstKinds.forEach(item => {
				if(item.code ===this.kindcode){
					this.kindData = Array.from(item.secondKinds)

					this.kindData.forEach(ele => {
						if(ele.thirdKinds.length>0){
							this.showMore = false
						}
					})
				}
				if(this.kindcode ==='007'||this.kindcode ==='008'){
					this.showMore = false
				}
			})
		}
	},
	async mounted () {
		this.showMore = true
		menuAll.firstKinds.forEach(item => {
			if(item.code ===this.kindcode){
				this.kindData = Array.from(item.secondKinds)
			}
			if(this.kindcode ==='007'||this.kindcode ==='008'){
				this.showMore = false
			}
			this.kindData.forEach(ele => {
				if(ele.thirdKinds.length>0){
					this.showMore = false
				}
			})
		})
	},
	props: {
		kindcode:String
	},
	methods:{
		getkindData(item,index){
			this.$emit('searhSencond',item)
			this.showthirdClass = ''
			this.thirdList = item
			this.showindex = item.name
			if(item.thirdKinds.length>0){
				this.showthird = true
			}else{
				this.showthird =false
			}
		},
		getthirdData(item){
			this.showthirdClass = item.name
			this.$emit('searhSencond',item)
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
