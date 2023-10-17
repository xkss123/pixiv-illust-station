<script>
	import '@/mock/index.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url('@/static/iconfont/iconfont.css');
	li{
		list-style: none;
	}
	.status{
		 width: 100%;
		 /* #ifdef APP-PLUS */
		 height: var(--status-bar-height);
		 /* #endif */
		 /* #ifdef MP-WEIXIN */
		 height: calc(var(--status-bar-height)*2);
		 /* #endif */
		 .status-bar {
			position: fixed;
			top: 0;
			width: 100%;
			/* #ifdef APP-PLUS */
			height: var(--status-bar-height);
			/* #endif */
			/* #ifdef MP-WEIXIN */
			height: calc(var(--status-bar-height)*2);
			/* #endif */
			background-color: $theme-color;
			z-index: 999;
			/* 设置状态栏背景色 */
		 }
	}
</style>
