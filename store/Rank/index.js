// Rank的仓库
import { getRankData } from '@/utils/api/index.js'

const state={
	rankList:[],
	dataList:[],
	startIndex:0
}

const mutations={
	INITDATALIST(state){
		state.startIndex=0
		state.dataList=[]
	},
	RANKLIST(state,rankList){
		state.rankList=rankList
	},
	GETDATALIST(state){
		const endIndex = Math.min(state.startIndex+20, state.rankList.length); 
		state.dataList.push(...state.rankList.slice(state.startIndex, endIndex))
		state.startIndex=state.startIndex+20
		// console.log(state.startIndex, endIndex);
		// console.log(state.dataList);
		// console.log(state.rankList);
	}
}

const actions={
	async getRankList({commit,state},mode){
		console.log(mode);
		const res=await getRankData(mode)
		commit('RANKLIST',res)
		commit('GETDATALIST')
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