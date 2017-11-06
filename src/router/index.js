import Vue from 'vue'
import Router from 'vue-router'
import brands from '../components/common/footer'

const pecoo = () => import('@/components/pecooView/pecoo')
// 登录注册
const login = () => import('@/components/loginView/login')
const forget = () => import('@/components/loginView/forgetPsd')
// pecooindex
const home = () => import('@/components/indexView/home')
const auction = () => import('@/components/pecooListView/auctionList')
const luxury = () => import('@/components/pecooListView/luxuryList')
const recommend = () => import('@/components/pecooListView/recommendList')
const PecooList = () => import('@/components/pecooListView/otherList')
const auctionDetail = () => import('@/components/detailView/auctionDetail')
const goodsDetail = () => import('@/components/detailView/detail')
const footAll = () => import('@/components/footerView/footAll')
const linkUs = () => import('@/components/footerView/linkUs')
const specialWork = () => import('@/components/footerView/specialWork')

// 个人中心
const mine = () => import('@/components/meCenterView/mine')
const AuctionOrder = () => import('@/components/meCenterView/AuctionOrder')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: pecoo,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'auction',
          name: 'auction',
          component: auction
        },
        {
          path: 'auctionDetail',
          name: 'auctionDetail',
          component: auctionDetail
        },
        {
          path: 'goodsDetail',
          name: 'GoodsDetail',
          component: goodsDetail
        },
        {
          path: 'luxury',
          name: 'luxury',
          component: luxury
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend
        },
        {
          path: 'pecooList/:ids',
          name: 'PecooList',
          component: PecooList
        },
        {
          path: 'footAll',
          component: footAll,
          children: [
            {
              path: '/footAll/:id',
              name: 'brands',
              component: brands
            }
          ]
        },
        {
          path: 'linkUs',
          name: 'linkUs',
          component: linkUs
        },
        {
          path: 'specialWork',
          name: 'specialWork',
          component: specialWork
        },
        {
          path: 'mine',
          name: 'Mine',
          component: mine,
          meta: {
            requiresAuth: true
          },
          children: [
            {
              path: 'auctionOrder',
              name: 'AuctionOrder',
              component: AuctionOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/forgetPsd',
      name: 'forgetPsd',
      component: forget
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const tokenId = localStorage.getItem('tokenId')
  if (to.matched.some(item => item.meta.requiresAuth)) {
    console.log(tokenId)
    if (tokenId) {
      next()
    } else {
      console.log('erwwe')
      next({path: '/login'})
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
