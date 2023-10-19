<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<StatusBar></StatusBar>
		<!-- #endif -->
		<view class="title">
			最新插画
		</view>
		<view class="main">
			<Waterfall :list="newestList"></Waterfall>
			<NoData v-if="!newestList.length"></NoData>
			<Divder></Divder>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			this.$store.dispatch('newest/getNewData')
		},
		computed:{
			newestList() {
				return this.$store.state.newest.newestList;
			}
		}
	}
</script>

<style lang="scss">
	.title {
		font-weight: bolder;
		color: #343a40;
		margin: 50rpx 0 15rpx 20rpx;
	}
</style>
