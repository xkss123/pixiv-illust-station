import recommand from '@/mock/recommand.json'
import newest from '@/mock/newest.json'
import rankDaily from '@/mock/rankDaily.json'
import rankWeekly from '@/mock/rankWeekly.json'
import rankMonthly from '@/mock/rankMonthly.json'

export const getRecomData = () => {
  return new Promise((resolve, reject) => {
	// #ifdef H5
	uni.request({
		url:'/api/recommand',
		success(res) {
			resolve(res.data.data.rows)
		},
		fail(err) {
			console.log(err);
			reject(err)
		}
	})
	// #endif
	// #ifdef MP-WEIXIN || APP-PLUS
	console.log(recommand);
	resolve(recommand.data.rows)
	// #endif
  });
}

export const getNewestData = () => {
  return new Promise((resolve, reject) => {
	// #ifdef H5
	uni.request({
		url:'/api/newest',
		success(res) {
			resolve(res.data.data.rows)
		},
		fail(err) {
			console.log(err);
			reject(err)
		}
	})
	// #endif
	// #ifdef MP-WEIXIN || APP-PLUS
	console.log(newest);
	resolve(newest.data.rows)
	// #endif
  });
}

export const getRankData = (mode) => {
  return new Promise((resolve, reject) => {
	// #ifdef H5
	uni.request({
		url:`/api/rank?mode=${mode}`,
		success(res) {
			resolve(res.data.data.rows)
		},
		fail(err) {
			console.log(err);
			reject(err)
		}
	})
	// #endif
	// #ifdef MP-WEIXIN || APP-PLUS
	if(mode==='daily') resolve(rankDaily.data.rows)
	if(mode==='weekly') resolve(rankWeekly.data.rows)
	if(mode==='monthly') resolve(rankMonthly.data.rows)
	// #endif
  });
}