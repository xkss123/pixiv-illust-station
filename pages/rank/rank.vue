<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<StatusBar></StatusBar>
		<!-- #endif -->
		<view class="header">
			<view class="left" @click="toggleTop">
				<view :class="{ active: selectedTab === 'daily' }" data-tag="daily">日榜</view>
				<view :class="{ active: selectedTab === 'weekly' }" data-tag="weekly">周榜</view>
				<view :class="{ active: selectedTab === 'monthly' }" data-tag="monthly">月榜</view>
			</view>
		</view>
		<view class="main" >
			<view class="item" v-for="(item,index) in dataList" :key="item.picture_id" @click="navToDetail(item)">
				<view class="rank">
					#{{index+1}}
				</view>
				<image :src="item.original_url" mode="aspectFill" lazy-load></image>
				<!-- <LoadingToggle :imgSrc="item.original_url"  mode="aspectFill"></LoadingToggle> -->
				<text class="title">{{item.title}}</text>
				<text class="like iconfont">{{item.like_total}}</text>
			</view>
		</view>
		<Divder></Divder>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedTab:'daily',
			};
		},
		onLoad() {
			this.$store.dispatch('rank/getRankList',this.selectedTab)
		},
		onReachBottom() {
			this.$store.commit('rank/GETDATALIST')
		},
		methods:{
			navToDetail(item){
				console.log(item);
				uni.navigateTo({
					url:`/pages/detail/detail?item=${JSON.stringify(item)}`,
				})
			},
			toggleTop(e){
				if(e.target.dataset.tag==this.selectedTab) return
				this.selectedTab=e.target.dataset.tag
				this.$store.commit('rank/INITDATALIST')
				this.$store.dispatch('rank/getRankList',this.selectedTab)
			},
		},
		computed:{
			dataList() {
				return this.$store.state.rank.dataList;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		margin-top: 20rpx;
	
		.left {
			display: flex;
			justify-content: space-around;
			text-align: center;
			width: 100%;
	
			view {
				width: 140rpx;
				height: 80rpx;
				line-height: 75rpx;
				background: rgb(244, 244, 244);
				color: rgb(184, 184, 184);
				border-radius: 10rpx;
				margin: 0 10rpx;
				font-size: 30rpx;
				font-weight: 700;
			}
	
			.active {
				color: rgb(59, 144, 199);
				background-color: rgb(238, 242, 254);
			}
		}
	}
	
	.main {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-top: 20rpx;
		padding: 10rpx;
		box-sizing: border-box;
		.item {
			position: relative;
			padding: 10rpx;
			display: flex;
			flex-direction: column;
			width: 50%;
			height: 500rpx;
			box-shadow: 1px 1px 5px 0 #ececec;
			border-radius: 4px;
			margin-bottom: 15rpx;
			box-sizing: border-box;
			.rank {
				text-align: center;
				position: absolute;
				top: 10rpx;
				left: 10rpx;
				height: 30rpx;
				border-radius: 4rpx 0 0rpx 0rpx;
				line-height: 30rpx;
				font-size: 23rpx;
				color: #fff ;
				z-index: 1;
				background-color: rgba(0, 0, 0, .4);
			}
	
			image {
				width: 100%;
				height: 100%;
				border-radius: 8rpx;
			}
			
	
			.title {
				font-size: 30rpx;
				color: #333333;
				line-height: 46rpx;
			}
	
			.like {
				font-size: 26rpx;
				color: #666666;
			}
	
			.like::before {
				content: '\e75c';
				margin-right: 10rpx;
			}
		}
	}
</style>
