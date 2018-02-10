<template>
	<div>
		<div class="auctionBanner">
			<img src="../../assets/images/list/auctionBanner.png" />
		</div>
		<!--列表部分-->
		<div class="auctionAllDiv">
			<div class="auction-list clear">
				<dl class="clearfix" v-for="item in auctionsList.auctions" :key="item.name">
					<dt>
						<router-link :to="{name:'auctionDetail',query:{auctionId:item.pkId}}" target="_blank"><img :src="item.auctionThumPic"></router-link>
					</dt>
					<dd class="auctionDivDd2">
						<p class="auctionName">名&nbsp;&nbsp;&nbsp; 称&nbsp;&nbsp; ：
							<span>{{item.name}}</span>
						</p>
						<p class="auctionAddress">地&nbsp;&nbsp;&nbsp; 址&nbsp;&nbsp; ：
							<span>{{item.address}}</span>
						</p>
						<p class="auctionTime">开拍时间：
							<span id="auctionTime">{{item.startTime}}</span>
						</p>
						<p class="auctionTime">拍 卖 行 ：
							<span>{{item.auctionCompany}}</span>
						</p>
					</dd>
					<dd class="auctionDivDd3">
						<router-link v-if="new Date().getTime()<new Date(item.startTime).getTime()"  :to="{name:'auctionDetail',query:{auctionId:item.pkId}}" target="_blank">查看详情</router-link>
						<router-link v-else  :to="{name:'auctionDetail',query:{auctionId:item.pkId}}" style="background:#E93B39;" target="_blank">正在直播</router-link>
					</dd>
				</dl>
			</div>
		</div>
		<!--分页-->
		<div class="block">
			<span class="demonstration">总共 {{auctionsList.totalCount}} 件拍品</span>
			<el-select v-model="firstValue" @change="handlepage" filterable  placeholder="请选择" class="seclectStyle">
				<el-option
					v-for="item in totalPage"
					:key="item"
					:label="'第 ' + item + ' 页'"
					:value="'第 ' + item + ' 页'">
				</el-option>
			</el-select>
			<el-pagination
				@current-change="handleCurrentChange"
				:current-page.sync="currentPage"
				:page-size="10"
				layout="prev, pager, next"
				:total="auctionsList.totalCount">
			</el-pagination>
		</div>
		<loves></loves>
	</div>
</template>

<script>
import loves from '../common/love'
import { pageAuction } from '../../api/restApi'
export default {
  data () {
    return {
      auctionsList: [],
      currentPage: 1,
      firstValue: '',
      totalPage: null,
      auctionValue: '查看详情'
    }
  },
  async created () {
    document.title = '拍卖会'
    await this.getAuctionList()
    this.firstValue = '第 ' + this.currentPage + ' 页'
    this.totalPage = Math.floor(this.auctionsList.totalCount / this.auctionsList.pageSize) + 1
  },
  methods: {
    async handleCurrentChange (val) {
      this.firstValue = '第 ' + val + ' 页'
      this.currentPage = val
      this.getAuctionList()
    },
    handlepage (item) {
      this.currentPage = parseInt(item.split(' ')[1])
    },
    async getAuctionList () {
      try {
        let response = await pageAuction(this.currentPage, 10)
				this.auctionsList = response.data
				console.log(this.auctionsList)
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    'loves': loves
  }
}
</script>
<style scoped>
@import '../../assets/css/auction.css'
</style>
