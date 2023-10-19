<template>
	<view>
		<view class="header">
			<!-- #ifdef APP-PLUS || MP-WEIXIN -->
			<button @click="login" v-if="!isLogin">登录</button>
			<!-- TODO:微信头像和用户名 -->
			<view class="userInfo" v-else>
				<image :src="src" mode="widthFix"></image>
				<p>{{nickName}}</p>
			</view>
			<!-- #endif -->
		</view>
		<view class="main" @click="handlerClick">
			<view class="item" id="item" data-name="favorite">
				<view class="left">
					<text class="iconfont icon-shoucangyishoucang"></text>
					<text>我的收藏</text>
				</view>
				<text class="iconfont icon-youjiantou right"></text>
			</view>
			<view class="item" id="item" data-name="userAgree">
				<view class="left">
					<text class="iconfont icon-yonghuxieyi"></text>
					<text>用户协议</text>
				</view>
				<text class="iconfont icon-youjiantou right"></text>
			</view>
			<view class="item" id="item" data-name="aboutUs">
				<view class="left">
					<text class="iconfont icon-guanyuwomen"></text>
					<text>关于我们</text>
				</view>
				<text class="iconfont icon-youjiantou right"></text>
			</view>
			<view class="item" id="item" data-name="contactUs">
				<view class="left">
					<text class="iconfont icon-qq"></text>
					<text>联系我们</text>
				</view>
				<text class="iconfont icon-youjiantou right"></text>
			</view>
			<!-- #ifdef APP-PLUS || MP-WEIXIN -->
			<view class="item" id="item" data-name="logout">
				<view class="left">
					<text class="iconfont icon-tuichudenglu"></text>
					<text>退出登录</text>
				</view>
				<text class="iconfont icon-youjiantou right"></text>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin:false,
				src:'',
				nickName:''
			};
		},
		onShow() {
			uni.getStorage({
				key:'userInfo',
				success:(res)=> {
					console.log('res');
					const result=JSON.parse(res.data)
					this.src=result.avatarUrl
					this.nickName=result.username
					this.isLogin=true
				},
				fail:(err)=> {
					console.log('err');
					console.log(err);
					this.isLogin=false
				}
			})
		},
		methods: {
			login() {
				// #ifdef APP-PLUS 
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes.authResult);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
								uni.setStorage({
									key:'userInfo',
									data:JSON.stringify({avatarUrl:infoRes.userInfo.avatarUrl,username:infoRes.userInfo.nickName})
								})
								uni.reLaunch({
									url:'/pages/user/user'
								})
							},
							fail: (err) => {
								uni.showToast({
									title:'登录失败',
									icon:'none'
								})
								console.log(err);
							}
						});
					},
					fail: (err) => {
						console.log(err);
					}
				});
				// #endif
				// #ifdef MP-WEIXIN
				// TODO:因为微信小程序把API收回了只能返回默认头像和“微信用户”
				uni.navigateTo({
					url:'/pages/user/wxAvatar/wxAvatar'
				})
				// #endif
			},
			handlerClick(e){
				if (e.target.id === 'item'){
					const tagName=e.target.dataset.name
					console.log(tagName);
					if(tagName==='logout'){
						uni.removeStorage({
							key:'userInfo'
						})
						uni.reLaunch({
							url:'/pages/user/user'
						})
					}else{
						console.log(`/pages/user/${tagName}/${tagName}`);
						uni.navigateTo({
							url:`/pages/user/${tagName}/${tagName}`
						})
					}
				}
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		.header{
			display: flex;
			justify-content: center;
			margin-bottom: 100rpx;
			.userInfo{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 200rpx;
				height: 300rpx;
				overflow: hidden;
				
				image{
					width: 100%;
					border-radius: 50%;
				}
				p{
					color: $theme-color;
				}
			}
		}
		.main{
			width: 100%;
			background-color: $main-bg-color;
			.item{
				width: 100%;
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #5f5f5f;
				.left{
					padding-left: 20rpx;
					text{
						padding-left: 15rpx;
					}
				}
				.right{
					padding-right: 20rpx;
				}
			}
		}
	}
	
</style>