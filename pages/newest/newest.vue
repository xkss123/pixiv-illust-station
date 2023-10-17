<template>
	<view>
		<view class="main">
			<Waterfall :list="newestList"></Waterfall>
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

</style>
