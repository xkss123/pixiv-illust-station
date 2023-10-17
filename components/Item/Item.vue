<template>
	<view :data-item="item" class="item" @click="navDetail(item)">
		<image src="@/static/images/loading.gif" mode="widthFix"  v-show="isLoding=='0'" :style="{ height :`${item.height}rpx` }"></image>
		<image :src="item.regular_url" 
			@load="isLoding='1'" 
			mode="widthFix"  
			v-show="isLoding=='1'" 
			lazy-load="true" 
			fade-show="true" 
			></image>
		<text>{{item.title||'无题'}}</text>
		<text class="author iconfont ">{{item.like_total}}</text>
		<!-- TODO: 找到合适的icon图标添加进去 -->
	</view>
</template>

<script>
	export default {
		name:"Item",
		props: ['item'],
		data() {
			return {
				isLoding: '0'
			};
		},
		methods:{
			navDetail(item){
				console.log(item.picture_id);
				uni.navigateTo({
					url:`/pages/detail/detail?item=${JSON.stringify(item)}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.item{
		background-color: #fff;
		display: flex;
		flex-direction: column;
		border-radius: 8rpx;
		border: 2rpx solid #ccc;
		margin: 5rpx;
		width: 100%; /* 计算每个 item 的宽度，减去外边距的宽度 */
		image{
			width: 100%;
		}
		text{
			padding-left: 15rpx;
			overflow: hidden; /* 隐藏溢出的文本 */
			text-overflow: ellipsis; /* 使用省略号 */
			white-space: nowrap; /* 禁止换行 */
		}
		.author{
			color: #ccc;
			/* #ifdef APP-PLUS || MP-WEIXIN */
			font-size: 25rpx;
			/* #endif */
			/* #ifdef H5 */
			font-size: 20rpx;
			/* #endif */
			&::before{
				content:'\e75c';
				padding-right: 15rpx;
			}
		}
	}
</style>