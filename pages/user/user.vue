<template>
	<view>
		<button @click="login" v-if="!isLogin">登录</button>
		<!-- TODO:微信头像和用户名 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin:false
			};
		},
		onShow() {
			uni.getStorage({
				key:'userInfo',
				success:(res)=> {
					console.log('res');
					console.log(JSON.parse(res.data));
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
							},
							fail: (err) => {
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
			}
		}
	}
</script>

<style lang="scss">

</style>