// Newest的仓库
import { getNewestData } from '@/utils/api/index.js'

const state={
	newestList:[]
}

const mutations={
	NEWESTLIST(state,newestList){
		state.newestList=newestList
	}
}

const actions={
	async getNewData({commit,state}){
		const result = await getNewestData();
		console.log(result);
		commit('NEWESTLIST',result)
	}
}

const getters={
	
}

export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}