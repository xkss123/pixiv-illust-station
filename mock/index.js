import Mock from 'mockjs'
import recommand from './recommand.json'
import newest from './newest.json'
import rankDaily from './rankDaily.json'
import rankWeekly from './rankWeekly.json'
import rankMonthly from './rankMonthly.json'
// Mock.setup({timeout: '200-600'})

Mock.mock('/api/recommand',recommand)
	
Mock.mock('/api/newest',newest)	

Mock.mock('/api/rank?mode=daily',rankDaily)	

Mock.mock('/api/rank?mode=weekly',rankWeekly)	

Mock.mock('/api/rank?mode=monthly',rankMonthly)	