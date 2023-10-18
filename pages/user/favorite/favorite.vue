<template>
	<view>
		<view class="main">
			<!-- TODO:用书架组件来渲染数据 -->
			{{favoriteList}}
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
			this.$store.commit('favorite/GETFAVORITELIST')
		},
		computed:{
			favoriteList() {
				return this.$store.state.favorite.favoriteList;
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		width: 100%;
		height: 100%;
		.main{
			width: 100%;
			height: 100%;
		}
	}
</style>
