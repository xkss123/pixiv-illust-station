<template>
	<view class="no-data">
		<image src="@/static/icons/noData.png" mode="widthFix"></image>
		<text>{{text}}</text>
	</view>
</template>
<script>
	export default {
		name:"NoData",
		props:{
			text:{
				type:String,
				default:'没有更多数据'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.no-data {
		width: 100%;
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 100rpx 0;
		image {
			width: 200rpx;
		}
	}
</style>