// Favorite的仓库

const state = {
	favoriteList: [],
	isActive:false
};
const mutations = {
	GETFAVORITELIST(state,id) {
		uni.getStorage({
			key: 'favoriteList',
			success(res) {
				console.log('我是detail',JSON.parse(res.data));
				state.favoriteList = JSON.parse(res.data)
			},
			fail(err) {
				console.log('获取失败', err);
			},
			complete() {
				console.log(id);
				const favoriteItem=state.favoriteList.filter(item=>item.picture_id===id);
				console.log(favoriteItem);
				if(favoriteItem.length){
					state.isActive=true
				}else{
					state.isActive=false
				}
			}
		})
	},
	TOGGLEFAVORITE(state,option){
		console.log(option);
		state.isActive=!state.isActive
		if(state.isActive){
			let temp=[]
			uni.getStorage({
				key:'favoriteList',
				success(res) {
					temp=JSON.parse(res.data)
					console.log('我是temp',temp);
					state.favoriteList=[...temp]
					console.log('添加后',state.favoriteList);
				},
				complete() {
					console.log('添加前',state.favoriteList);
					state.favoriteList.unshift(option)
					console.log('添加后',state.favoriteList);
					uni.setStorage({
						key:'favoriteList',
						data:JSON.stringify(state.favoriteList)
					})
				}
			})
			
		}else{
			const index=state.favoriteList.findIndex(item=>item.id===option.id)
			console.log(index);
			if(index!=-1){
				state.favoriteList.splice(index,1)
				uni.setStorage({
					key:'favoriteList',
					data:JSON.stringify(state.favoriteList)
				})
			}
		}
	}
	
};
const actions = {

};
const getters = {
	favoriteList(state) {
		return state.favoriteList || [];
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};