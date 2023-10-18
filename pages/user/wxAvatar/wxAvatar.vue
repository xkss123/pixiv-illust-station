<template>
	<view>
		<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
			<image class="avatar" :src="avatarUrl" mode="widthFix"></image>
		</button>
		<p>昵称：<input type="nickname" class="weui-input" placeholder="请输入昵称" v-model="username"/></p>
		 <button type="primary" @click="addUserInfo">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarUrl: "https://tse3-mm.cn.bing.net/th/id/OIP-C.8d6i921_4hykRaAcnro0AAAAAA?pid=ImgDet&rs=1",
				username:'微信用户'
			};
		},
		methods: {
			onChooseAvatar(e) {
				const {
					avatarUrl
				} = e.detail
				this.avatarUrl=avatarUrl
			},
			addUserInfo(){
				uni.setStorage({
					key:'userInfo',
					data:JSON.stringify({avatarUrl:this.avatarUrl,username:this.username})
				})
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.avatar-wrapper{
		width: 300rpx;
		height: 300rpx;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;	
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>