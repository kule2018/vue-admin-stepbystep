import Vue from 'vue'
import Router from 'vue-router'
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Home = () => import(/* webpackChunkName: "home" */ '@/components/home')
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
// 财务充值
const FinancialOV = () => import('@/components/Finance/FinancialOV')
const OnRecharge = () => import('@/components/Finance/OnRecharge')
const RechargeManage = () => import('@/components/Finance/RechargeManage')
const CostReturn = () => import('@/components/Finance/CostReturn')
const ConManage = () => import('@/components/Finance/ConManage')
const Invoicing = () => import('@/components/Finance/Invoicing')
const ConInvoice = () => import('@/components/Finance/ConInvoice')
// 业务管理
const SendAcount = () => import('@/components/BusinessManage/SendAcount')
const MessageSign = () => import('@/components/BusinessManage/MessageSign')
const ExemptionMT = () => import('@/components/BusinessManage/ExemptionMT')
const ComplainMT = () => import('@/components/BusinessManage/ComplainMT')
const RechargeS = () => import('@/components/BusinessManage/RechargeS')
const DataAnalysis = () => import('@/components/BusinessManage/DataAnalysis')
const MessagePush = () => import('@/components/BusinessManage/MessagePush')
const MessageTip = () => import('@/components/BusinessManage/MessageTip')
const FastTest = () => import('@/components/BusinessManage/FastTest')
// 系统管理
const BaseInformation = () => import('@/components/SystemManage/BaseInformation')
const RoleInformation = () => import('@/components/SystemManage/RoleInformation')
const OperationLog = () => import('@/components/SystemManage/OperationLog')
const VersionUpdate = () => import('@/components/SystemManage/VersionUpdate')
const PromotionAmb = () => import('@/components/SystemManage/PromotionAmb')
const Reward = () => import('@/components/SystemManage/Reward')
Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			children: [
				{
					path: '/homeMain',
					name: 'homeMain',
					component: HomeMain
				},
				{
					path: '/triggerSMS',
					name: 'triggerSMS',
					component: TriggerSMS,
				},
				{
					path: '/triggerAdd',
					name: 'triggerAdd',
					component: TriggerAdd
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
				}, {
					path: '/sendAcount',
					name: 'sendAcount',
					component: SendAcount
				},
				{
					path: '/messageSign',
					name: 'messageSign',
					component: MessageSign
				},
				{
					path: '/exemptionMT',
					name: 'exemptionMT',
					component: ExemptionMT
				},
				{
					path: '/complainMT',
					name: 'complainMT',
					component: ComplainMT
				},
				{
					path: '/rechargeS',
					name: 'rechargeS',
					component: RechargeS
				},
				{
					path: '/dataAnalysis',
					name: 'dataAnalysis',
					component: DataAnalysis
				},
				{
					path: '/messagePush',
					name: 'messagePush',
					component: MessagePush
				},
				{
					path: '/messageTip',
					name: 'messageTip',
					component: MessageTip
				},
				{
					path: '/fastTest',
					name: 'fastTest',
					component: FastTest
				},
				{
					path: '/baseInformation',
					name: 'baseInformation',
					component: BaseInformation
				}, {
					path: '/roleInformation',
					name: 'roleInformation',
					component: RoleInformation
				}, {
					path: '/operationLog',
					name: 'OperationLog',
					component: OperationLog
				}, {
					path: '/versionUpdate',
					name: 'versionUpdate',
					component: VersionUpdate
				}, {
					path: '/promotionAmb',
					name: 'promotionAmb',
					component: PromotionAmb
				}, {
					path: '/reward',
					name: 'reward',
					component: Reward
				},
			]
		}
	]
});
//导航钩子
router.beforeEach((to, from, next) => {
	NProgress.start()
	next()
});
router.afterEach(() => {
	NProgress.done()
})

export default router