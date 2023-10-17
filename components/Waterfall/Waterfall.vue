<template>
	<view>
		<view class="column column1" ref="column1">
			<Item v-for="item in column1List" :key="item.picture_id" :item="item"></Item>
		</view>
		<view class="column column2" ref="column2">
			<Item v-for="item in column2List" :key="item.picture_id" :item="item"></Item>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Waterfall",
		props:['list'],
		data() {
			return {
				column1Height:0,
				column2Height:0,
				col1Height:0,
				col2Height:0,
				column1List:[],
				column2List:[],
				flag:true
			};
		},
		mounted() {
			// #ifdef APP-PLUS || MP-WEIXIN
			this.$nextTick(()=>{
				this.meanHeight();
			})
			// #endif 
			// #ifdef H5
			 setTimeout(() => {
			    this.meanHeight();
			  }, 100);
			// #endif
			// TODO:测试接口添加更多测试数据
			// this.$nextTick(() => {
			//   const query = uni.createSelectorQuery().in(this);
			//   query.select('.column1').boundingClientRect((rect) => {
			//     console.log(rect.height);
			// 	this.column1Height=rect.height
			//   }).select('.column2').boundingClientRect((rect) => {
			//     console.log(rect.height);
			// 	this.column2Height=rect.height
			//   }).exec();
			//   this.meanHeight()
			// });
		},
		methods: {
			meanHeight(){
				this.list.forEach(item=>{
					if(this.col1Height>=this.col2Height){
						this.column2List.push(item)
						this.col2Height+=item.height
					}else{
						this.column1List.push(item)
						this.col1Height+=item.height
					}
				})
				this.flag=false
				console.log(this.col1Height,this.col2Height);
			}
		},
		watch:{
			list(){
				if(!this.flag){
					this.column1List=[]
					this.column2List=[]
					this.meanHeight()
				}
			}
		}
	}
</script>

<style lang="scss">
	.column{
		box-sizing: border-box;
		display: inline-block;
		width: 50%;
		padding: 10rpx;
		vertical-align: top;
	}
</style>