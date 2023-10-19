<template>
	<view>
		<view class="main">
			<!-- TODO:用书架组件来渲染数据 -->
			<view class="item" v-for="(item,index) in favoriteList" :key="item.picture_id" @click="navToDetail(item)">
				<LoadingToggle :imgSrc="item.original_url"  mode="aspectFill" height="300rpx" flag="1"></LoadingToggle>
				<text class="title">{{item.title||'无题'}}</text>
			</view>
		</view>
		<NoData v-if="!favoriteList.length" text="没有更多数据,快去收藏吧"></NoData>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			this.$store.commit('favorite/GETFAVORITELIST')
		},
		computed:{
			favoriteList() {
				return this.$store.state.favorite.favoriteList;
			}
		},
		methods:{
			navToDetail(item){
				console.log(item);
				uni.navigateTo({
					url:`/pages/detail/detail?item=${JSON.stringify(item)}`,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		width: 100%;
		height: 100%;
		.main {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			margin-top: 20rpx;
			padding: 10rpx;
			box-sizing: border-box;
			.item {
				padding: 10rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 33.33%;
				height: 380rpx;
				border-radius: 4px;
				margin-bottom: 15rpx;
				box-sizing: border-box;
				border: 1rpx solid $theme-color;
				overflow: hidden;
				.title {
					font-size: 30rpx;
					color: #333333;
					text-align: center;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
			}
		}
	}
</style>
