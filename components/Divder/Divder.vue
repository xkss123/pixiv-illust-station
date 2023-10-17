<template>
	<view class="container">
		<view class="line"></view>
		<text class="text">我也是有底线的</text>
		<view class="line"></view>
	</view>
</template>

<script>
	export default {
		name:"Divder",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		display: flex;
		justify-content: center;
		align-items: center;
		.line{
			width: 150rpx;
			height: 1rpx;
			background-color: $theme-color;
			vertical-align: middle;
		}
		.text{
			margin: 0 20rpx;
			color: $theme-color;
		}
	}
	
</style>