<template>
	<view>
		<!-- #ifdef APP-PLUS || MP-WEIXIN -->
		<StatusBar></StatusBar>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS || H5-->
		<uni-nav-bar shadow :title="title" leftIcon="left" backgroundColor="#fff" rightIcon="redo-filled"
			@clickRight="share" @clickLeft="goBack">
		</uni-nav-bar>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<uni-nav-bar shadow :title="title" leftIcon="left" backgroundColor="#fff" @clickLeft="goBack">
		</uni-nav-bar>
		<!-- #endif -->
		<view class="main">
			<LoadingToggle :imgSrc="src"  @replaceSrc="replaceImg"></LoadingToggle>
			<view class="info">
				<text class="title" selectable>{{option.title}}</text>
				<ul>
					<li v-for="(tag,index) in tags" :key="index">{{tag}}</li>
				</ul>
				<text class="create-time">{{time}}</text>
			</view>
			<view class="tool">
				<button class="love" @click="toggleFavorite">
					<i v-if="isActive" class="iconfont icon-shoucangyishoucang"></i>
					<i v-else class="iconfont icon-a-shoucang-weishoucang"></i>
				</button>
				<!-- #ifdef APP-PLUS || MP-WEIXIN -->
				<button class="download" @click="download"><i class="iconfont icon-download"></i></button>
				<!-- #endif -->
			</view>
			<view class="pass">
				<text>免责声明：本站内容来源于网络，图片版权属于原作者</text>
				<text>本站转载仅供大家交流学习，切勿用于任何商业用途；</text>
				<text>如果侵犯了您的合法权益，请您及时与我们联系</text>
				<text>我们会在第一时间删除相关内容。</text>
				<text selectable>联系方式： 2785909653@qq.com</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				option:[],
				title:'',
				src:'',
				tags:[],
				time:'',
			};
		},
		onLoad(option) {
			this.option=JSON.parse(option.item)
			this.src=this.option.original_url.replace('regular','original').replace('_master1200','').replace('.jpg','.png')
			this.tags=this.option.tags.split(',')
			
			const date = new Date(this.option.created_at);
			const year = date.getFullYear();
			const month = Number(date.getMonth()) + 1; 
			const day = date.getDate(); 
			const normalTime = `${year}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`; // 拼接成年月日格式
			this.time=normalTime
			console.log(normalTime);
			
			console.log(this.option);
			console.log(this.src);
			this.title=this.option.title ||'默认标题'
			// uni.removeStorage({
			// 	key:'favoriteList'
			// })
			this.$store.commit('favorite/GETFAVORITELIST',this.option.picture_id)
		},
		methods:{
			replaceImg(src){
				this.src=src.replace('.png','.jpg')
			},
			share() {
				uni.setClipboardData({
					data:`作品名称：${this.option.title}`,
					success() {
						uni.showToast({
						  title: '复制成功,快去分享吧',
						  icon:'none'
						})
					},
					fail(err) {
						console.log(err);
						uni.showToast({
						  title: '复制失败',
						  icon: 'none'
						})
					}
				})
			
			},
			goBack(){
				uni.navigateBack()
			},
			toggleFavorite(){
				this.$store.commit('favorite/TOGGLEFAVORITE',this.option)
			},
			download(){
				uni.showLoading({
					title:'下载中...',
					mask:true
				})
				uni.downloadFile({
					url: this.src,
					success(res) {
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success() {
								uni.showToast({
									title: '下载成功',
									icon:'none',
									duration: 1000
								})
							},
							fail(err) {
								uni.showToast({
									title: '获取权限失败',
									icon: 'none',
									duration: 1000
								})
							},
							complete() {
								uni.hideLoading()
							}
						})
					},
					timeout: 20000
				})
			},
			
		},
		computed:{
			isActive() {
				return this.$store.state.favorite.isActive;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		width: 100%;
		image{
			width: 100%;
		}
		.info{
			display: flex;
			flex-direction: column;
			padding: 10rpx;
			border-bottom: 3rpx solid $theme-color;
			ul{
				display: flex;
				flex-wrap: wrap;
				margin: 30rpx 0;
				padding: 0;
				li{
					margin: 0 20rpx;
					white-space: nowrap;
					color: #ccc;
				}
			}
			.title{
				padding-left: 20rpx;
				font-size: 50rpx;
			}
			.create-time{
				padding-left: 20rpx;
				font-size: 30rpx;
				color: #b9b9b9;
			}
		}
		.tool{
			display: flex;
			justify-content: space-around;
			width: 100%;
			margin:30rpx 0;
			.download,
			.love {
				width: 100rpx;
				height: 100rpx;
				background-color: #fff;
				border: 1rpx solid #ccc;
				border-radius: 50%;
			
				.iconfont {
					color: $theme-color;
					font-size: 40rpx;
				}
			}
		}
		.pass{
			width: 100%;
			height: 30rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 20rpx;
			border-top: 3rpx solid $theme-color;
			text{
				white-space: nowrap;
			}
		}
	}
</style>
