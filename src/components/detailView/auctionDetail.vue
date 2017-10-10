<template>
	<div>
		<div class="auction rel clearfix">
			<div class="auctionImg abs">
				<a href="javascript:;">
					<img :src="aucitonTopList.auctionThumPic" id="acutionImg" />
				</a>
			</div>
			<div class="auctionMain abs">
				<p>
					拍卖会：<br />
					<span id="auctionName">{{aucitonTopList.name}}</span>
				</p>
				<p>
					拍卖行：<br />
					<span id="auctionHang">{{aucitonTopList.auctionCompany}}</span>
				</p>
				<p>
					开拍时间：<br />
					<span id="auctionTime">{{aucitonTopList.startTime}}</span>
				</p>
			</div>
			<div class="auctionCollect abs" @click="collectWay"></div>
		</div>
		<!--列表部分-->
		<div class="auctionLi clearfix">
			<div class="auctionList clearfix">
				<dl v-for="item in auctionDelList" :key="item.pkId">
					<router-link :to="{name:'GoodsDetail', query:{goodsId:item.pkId}}" target="_blank">
						<dt><img :src="item.thumbnailUrl"></dt>
						<dd>
							<p>Lot {{item.lotNum}}: {{item.goodsName}}</p>
							<p class="auctionListP1">起拍价：
								<span>{{item.priceUnit}}</span>
								<span>{{item.startPrice}}</span>
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
			<span class="demonstration">总共 {{aucitonTopList.totalCount}} 件拍品</span>
			<el-select v-model="firstValue" @change="handlepage" filterable placeholder="请选择" class="seclectStyle">
				<el-option v-for="item in totalPage" :key="item" :label="'第 ' + item + ' 页'" :value="'第 ' + item + ' 页'">
				</el-option>
			</el-select>
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="60" layout="prev, pager, next" :total="aucitonTopList.totalCount">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import { auctionDetail } from '../../api/restApi'
import _ from 'lodash'
export default {
  data () {
    return {
      aucitonTopList: [],
      auctionDelList: [],
      currentPage: 1,
      firstValue: '',
      totalPage: null
    }
  },
  computed: {
    actionId () {
      return this.$route.query.auctionId
    }
  },
  async created () {
    let response = await auctionDetail(this.actionId, 1, 60)
    if (response.status === 200) {
      this.aucitonTopList = response.data
      this.auctionDelList = response.data.goods
    }
    document.title = this.aucitonTopList.name + '-拍卖会-拍卖网'
    this.firstValue = '第 ' + this.currentPage + ' 页'
    this.totalPage = Math.floor(this.aucitonTopList.totalCount / this.aucitonTopList.pageSize) + 1
  },
  methods: {
    collectWay: _.debounce(function () {
      this.$toasted.info('您还没有登录，请先去登陆！')
    }, 300),
    async handleCurrentChange (val) {
      this.firstValue = '第 ' + val + ' 页'
      let response = await auctionDetail(this.actionId, val, 60)
      if (response.status === 200) {
        this.auctionDelList = response.data.goods
      }
    },
    handlepage (item) {
      this.currentPage = parseInt(item.split(' ')[1])
    }
  }
}
</script>
<style scoped>
@import '../../assets/css/auctionList.css'
</style>
