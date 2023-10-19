<template>
	<view>
		<Info 
			title="用户协议" 
			:contentList="contentList"
		></Info>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contentList:[
					'我们只收集用户头像和用户名称信息,就算不提供也照样能正常使用我们的程序服务。',
					'免责声明：本站内容来源于网络，图片版权属于原作者,本站转载仅供大家交流学习，切勿用于任何商业用途；',
					'如果侵犯了您的合法权益，请您及时与我们联系我们会在第一时间删除相关内容。',
					'联系方式：2785909653@qq.com']
			};
		}
	}
</script>

<style lang="scss">
	
</style>
