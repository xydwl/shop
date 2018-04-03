<template>
	<div>
		<querkind :kindcode="kindcode" @searhSencond="secondSearch" @showStatus="showStatus"></querkind>
		<!--筛选排序部分-->
		<div class="sortDiv" style="margin-top: 15px;" v-sticky="{ zIndex: 8, stickyTop: 0 }">
			<p>
				综合（
				<span name="total">{{otherListData.totalCount}}</span> ）
			</p>
			<ul>
				<li class="sort--li" v-for="item in sortItem" :key="item.name"  @click="sortValue(item)">{{item.name}}</li>
			</ul>
			<div class="page-samll">
				<a class="letf-icon" @click="pagereduce"><</a>
				<span class="current-page">{{currentPage}} </span> / <span class="total-page"> {{totalPage}}</span>
				<a class="right-icon" @click="pageadd">></a>
			</div>
		</div>
		<!--列表-->
		<div class="auctionLi clearfix" v-loading="loading" style="min-height:300px;">
			<div class="auctionList clearfix">
				<dl v-for="item in otherListData.goods" :key="item.pkId">
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
			<span class="demonstration">总共 {{otherListData.totalCount}} 件拍品</span>
			<el-select v-model="firstValue" @change="handlepage" filterable placeholder="请选择" class="seclectStyle">
				<el-option v-for="item in totalPage" :key="item[0]" :label="'第 ' + item + ' 页'" :value="'第 ' + item + ' 页'">
				</el-option>
			</el-select>
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="60" layout="prev, pager, next" :total="otherListData.totalCount">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import querkind from './querykind'
import {querySecondGooodsUrl} from '../../api/restApi'
import sticky from '../../assets/sticky'
export default {
  data () {
    return {
      currentPage: 1,
      otherListData: [],
      firstValue: '',
      totalPage: null,
      sort: '',
      sortItem: [{name: '默认排序', sortName: ''}, {name: '价格排序', sortupName: 'start_price/01', sortdownName: 'start_price/02'}, {name: '上架时间排序', sortupName: 'created_time/01', sortdownName: 'created_time/01'}
      ],
      loading: true,
      searchCode: '',
      showCode: true
    }
  },
  async mounted () {
    await this.getOtherList()
    this.firstValue = '第 ' + this.currentPage + ' 页'
  },
  methods: {
    secondSearch (item) {
      this.$router.push({name: 'PecooList', params: {ids: this.kindcode}, query: {codeName: item.code}})
      this.showCode = false
      this.searchCode = item.code
      this.getOtherList()
    },
    async getOtherList () {
      this.loading = true
      if (this.queryCode) {
        this.searchCode = this.queryCode
      } else if (this.showCode) {
        this.searchCode = this.kindcode
      }
      try {
        let res = await querySecondGooodsUrl(this.searchCode, this.currentPage, this.sort)
        this.otherListData = res.data
        this.totalPage = Math.floor(this.otherListData.totalCount / this.otherListData.pageSize) + 1
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
    handlepage (item) {
      this.currentPage = parseInt(item.split(' ')[1])
    },
    handleCurrentChange (val) {
      this.firstValue = '第 ' + val + ' 页'
      this.currentPage = val
      this.getOtherList()
    },
    sortValue (item) {
      this.currentPage = 1
      this.sort = this.sort === item.sortupName ? item.sortdownName : item.sortupName
      this.getOtherList()
    },
    pagereduce () {
      this.currentPage--
    },
    pageadd () {
      this.currentPage++
    },
    async showStatus () {
      this.currentPage = 1
      this.showCode = true
      this.sort = ''
      await this.getOtherList()
      this.firstValue = '第 ' + this.currentPage + ' 页'
      this.totalPage = Math.floor(this.otherListData.totalCount / this.otherListData.pageSize) + 1
    }
  },
  computed: {
    kindcode () {
      return this.$route.params.ids
    },
    queryCode () {
      return this.$route.query.codeName
    }
  },
  components: {
    'querkind': querkind
  },
  directives: {
    sticky
  }
}
</script>
<style>
	.page-samll{
		float:right;
		margin-right:20px;
		display: flex;
		align-items: center;
	}
	.current-page{
		color:red;
	}
	.page-samll a{
		display: inline-block;
    width: 24px;
    height: 24px;
    border: 1px solid #CDCDCD;
    font-size: 24px;
    color: #999;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
	}
	.page-samll .letf-icon{
		margin-right:15px;
	}
	.page-samll .right-icon{
		margin-left:15px;
	}
</style>
