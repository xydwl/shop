<template>
	<div>
		<div class="listNav">
			当前位置：
			<a href="index.html">首页</a> >
			<span>今日推荐</span>
		</div>
		<!--筛选排序部分-->
		<div class="sortDiv" style="margin-top: 0;">
			<p>
				综合（
				<span name="total">{{todaygoods.totalCount}}</span>）
			</p>
			<ul>
				<li class="sort--li" v-for="item in sortItem" :key="item.name"  @click="sortValue(item)">{{item.name}}</li>
			</ul>
		</div>
		<!--艺术品列表-->
		<div class="auctionLi clearfix">
			<div class="auctionList clearfix">
				<dl v-for="item in todaygoods.goods" :key="item.goodsName">
					<router-link :to="{name:'GoodsDetail', query:{goodsId:item.pkId}}" target="_blank">
						<dt>
							<img :src="item.thumbnailUrl" :title="item.goodsName">
						</dt>
						<dd>
							<p>Lot {{item.lotNum}}: {{item.goodsName}}</p>
							<p class="auctionListP1">起拍价：
								<span>{{item.priceUnit}}</span><span>{{item.startPrice}}</span>
							</p>
							<p class="auctionListP2">估计报价：
								<span v-if="item.estimateMin&&item.estimateMax">{{item.priceUnit}}{{item.estimateMin}}-{{item.priceUnit}}{{item.estimateMax}}</span>
								<span v-else>暂无</span>
							</p>
							<p>开拍时间：
								<span>{{item.startTime}}</span>
							</p>
						</dd>
					</router-link>
				</dl>
			</div>
		</div>
		<!--分页-->
		<div class="block">
			<span class="demonstration">总共 {{todaygoods.totalCount}} 件拍品</span>
			<el-select v-model="firstValue" @change="handlepage" filterable placeholder="请选择" class="seclectStyle">
				<el-option v-for="item in totalPage" :key="item[0]" :label="'第 ' + item + ' 页'" :value="'第 ' + item + ' 页'">
				</el-option>
			</el-select>
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="60" layout="prev, pager, next" :total="todaygoods.totalCount">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import { queryQualityGoodsUrl } from '../../api/restApi.js'
export default {
  data () {
    return {
      todaygoods: [],
      currentPage: 1,
      firstValue: '',
      totalPage: null,
      sort: 'start_time/01',
      sortItem: [
				{ name: '默认排序', sortName: 'start_time/01' },
				{ name: '价格从高到底', sortName: 'start_price/01' },
				{ name: '价格从低到高', sortName: 'start_price/02' }
      ]
    }
  },
  async created () {
    let response = await queryQualityGoodsUrl(1, 60, this.sort)
    if (response.data.code === '0000') {
      this.todaygoods = response.data
    }
    this.firstValue = '第 ' + this.currentPage + ' 页'
    this.totalPage = Math.floor(this.todaygoods.totalCount / this.todaygoods.pageSize) + 1
  },
  methods: {
    async handleCurrentChange (val) {
      this.firstValue = '第 ' + val + ' 页'
      let response = await queryQualityGoodsUrl(val, 60, this.sort)
      if (response.data.code === '0000') {
        this.todaygoods = response.data
      }
      this.currentPage = val
    },
    handlepage (item) {
      this.currentPage = parseInt(item.split(' ')[1])
    },
    async sortValue (item) {
      // console.log(document.querySelector(''))
      this.currentPage = 1
      let response = await queryQualityGoodsUrl(1, 60, item.sortName)
      if (response.data.code === '0000') {
        this.todaygoods = response.data
      }
    }
  }
}
</script>
<style>
@import '../../assets/css/artList.css';
</style>
