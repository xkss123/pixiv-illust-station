<template>
	<view>
		<image src="@/static/images/loading.gif" mode="widthFix"
			v-show="isLoding=='0'"></image>
		<image @click="previewImage" :src="imgSrc" @load="isLoding='1'" :mode="mode" v-show="isLoding=='1'" lazy-load="true"
			fade-show="true" @error="changeImg" :style="{height}"></image>
	</view>
</template>

<script>
	export default {
		name: "LoadingToggle",
		props: {
			imgSrc: {
				type: String,
			},
			height:{
				type:String,
				default:'auto'
			},
			mode:{
				type:String,
				default:'widthFix'
			}
		},
		data() {
			return {
				isLoding: '0'
			};
		},
		methods:{
			changeImg(err){
				this.$emit('replaceSrc',this.imgSrc)
			},
			previewImage() {
				uni.previewImage({
					urls: [this.imgSrc]
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
		image {
			width: 100%;
			display: block;
			height: 100%;
			border-radius: 8rpx;
		}
	}
</style>