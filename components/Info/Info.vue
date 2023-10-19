<template>
	<view class="container">
		<text class="title">{{title}}:</text>
		<text class="content" v-for="item in contentList">{{item}}</text>
	</view>
</template>

<script>
	export default {
		name:"Info",
		props:{
			title:{
				type:String,
				default:'xxx'
			},
			contentList:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
		.container{
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding: 20rpx;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			.title{
				color: $theme-color;
				font-size: 50rpx;
				font-weight: 700;
			}
			.content{
				&::before{
					content: "\00a0\00a0";
				}
			}
		}
		
	}
</style>