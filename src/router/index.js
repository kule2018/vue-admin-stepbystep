import Vue from 'vue'
import Router from 'vue-router'
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Home= () => import(/* webpackChunkName: "home" */ '@/components/home')
// 短信
const HomeMain = () => import('@/components/HomeMain')

// const TriggerSMS = () => import('@/components/ShortMessage/TriggerSMS')
const TriggerSMS = r => require.ensure([], () => r(require('../components/ShortMessage/TriggerSMS.vue')), 'chunkname1')
const BatchSMS = () => import('@/components/ShortMessage/BatchSMS')
const TemplateSMS = () => import('@/components/ShortMessage/TemplateSMS')
const DocumentSMS = () => import('@/components/ShortMessage/DocumentSMS')
const ReplySMS = () => import('@/components/ShortMessage/ReplySMS')
const MessageRecording = () => import('@/components/ShortMessage/MessageRecording')
const TimedSMS = () => import('@/components/ShortMessage/TimedSMS')
const Daily = () => import('@/components/ShortMessage/Daily')
const TriggerAdd = () => import('@/components/ShortMessage/TriggerAdd')
const FinancialOV = () => import('@/components/Finance/FinancialOV')
const OnRecharge = () => import('@/components/Finance/OnRecharge')
const RechargeManage = () => import('@/components/Finance/RechargeManage')
const CostReturn = () => import('@/components/Finance/CostReturn')
const ConManage = () => import('@/components/Finance/ConManage')
const Invoicing = () => import('@/components/Finance/Invoicing')
const ConInvoice = () => import('@/components/Finance/ConInvoice')
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
			children: [
				{
					path: '/homeMain',
					name: 'homeMain',
					component:HomeMain
				},
				{
					path: '/triggerSMS',
					name: 'triggerSMS',
					component: TriggerSMS,
				},
				{
					path: '/triggerAdd',
					name: 'triggerAdd',
					component:TriggerAdd
				},
				{
					path: '/batchSMS',
					name: 'batchSMS',
					component: BatchSMS
				},
				{
					path: '/templateSMS',
					name: 'templateSMS',
					component: TemplateSMS
				},
				{
					path: '/documentSMS',
					name: 'documentSMS',
					component: DocumentSMS
				},
				{
					path: '/replySMS',
					name: 'replySMS',
					component: ReplySMS
				},
				{
					path: '/messageRecording',
					name: 'messageRecording',
					component: MessageRecording
				},
				{
					path: '/timedSMS',
					name: 'timedSMS',
					component: TimedSMS
				},
				{
					path: '/daily',
					name: 'daily',
					component: Daily
				},
				{
					path: '/FinancialOV',
					name: 'FinancialOV',
					component: FinancialOV
				},
				{
					path: '/OnRecharge',
					name: 'OnRecharge',
					component: OnRecharge
				},
				{
					path: '/RechargeManage',
					name: 'RechargeManage',
					component: RechargeManage
				},
				{
					path: '/CostReturn',
					name: 'CostReturn',
					component: CostReturn
				},
				{
					path: '/ConManage',
					name: 'ConManage',
					component: ConManage
				},
				{
					path: '/Invoicing',
					name: 'Invoicing',
					component: Invoicing
				},
				{
					path: '/ConInvoice',
					name: 'ConInvoice',
					component: ConInvoice
				},
			]
    }
  ]
});
//导航钩子
router.beforeEach((to,from,next) => {
	NProgress.start()
	next()
});
router.afterEach(() => {
	NProgress.done()
})

export default router