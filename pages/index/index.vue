<template>
	<view class="content">
		<view class="title">
			推荐作品
		</view>
		<view class="main">
			<Waterfall :list="showList"></Waterfall>
		</view>
		<Divder></Divder>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.$store.dispatch('home/getRecomList')
		},
		methods: {
			
		},
		computed:{
			showList() {
				return this.$store.state.home.showList;
			}
		},
		onReachBottom() {
			console.log('页面触底了');
			this.$store.dispatch('home/getRandomList')
		},
		onPullDownRefresh() {
			this.$store.commit('home/INITHOME')
			this.$store.dispatch('home/getRecomList')
			uni.stopPullDownRefresh()
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.title {
			font-weight: bolder;
			color: #343a40;
			margin: 50rpx 0 15rpx 20rpx;
		}
		.main{
			width: 100%;
			background-color: $main-bg-color;
		}
	}

</style>
