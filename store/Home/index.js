// Home的仓库
// TODO:下拉获取新数据

import { getRecomData } from '@/utils/api/index.js'
const state={
	recomList:[],
	showList:[],
	tempList:[]
}

const mutations={
	INITHOME(state){
		state.recomList=[]
		state.column1List=[]
		state.column2List=[]
		state.showList=[]
	},
	INITTEMPLIST(state){
		state.tempList=[]
	},
	GETRECOMLIST(state,recomList){
		state.recomList=recomList;
	},
	DELRECOMLISTDATA(state){
	    const deletedItem = state.recomList.splice(Math.floor(Math.random() * state.recomList.length), 1);
	    state.tempList.push(...deletedItem);
		const id=deletedItem[0].picture_id
	},
	GETSHOWLIST(state,showList){
		state.showList.push(...showList);
	}
}

const actions={
	async getRecomList({ commit,state }, params = {}) {
	  const result = await getRecomData();
	  console.log('我是res',result);
	  commit("GETRECOMLIST", result);
	  this.dispatch('home/getRandomList')
	},
	getRandomList({ commit,state }){
		commit('INITTEMPLIST')
		for(let i=0;i<20;i++){
			commit("DELRECOMLISTDATA");
		}
		commit("GETSHOWLIST", state.tempList);
		console.log('我是recomList',state.recomList);
		console.log('我是tempList',state.tempList);
		console.log('我是showList',state.showList);
	}
}

const getters = {
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
}