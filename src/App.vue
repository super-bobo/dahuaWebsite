<template>
	<div v-cloak>
		<transition name="router-fade" mode="out-in">
			<!-- <keep-alive> -->
				<router-view></router-view>
			<!-- </keep-alive> -->
		</transition>
	</div>
</template>

<script>
export default {
}

</script>
<style lang="less">
  	@import './assets/styles/reset';
  	@import '~vux/src/styles/1px';
</style>
