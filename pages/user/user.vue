<template>
	<view>
		<button @click="login">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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
				uni.getUserProfile({
					desc: 'Wexin', // 这个参数是必须的
					success: res => {
						console.log(res)
					},
					fail: err => {
						console.log(err)
					}
				})
				// #endif
			}
		}
	}
</script>

<style lang="scss">

</style>