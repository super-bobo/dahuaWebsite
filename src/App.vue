<template>
	<div>
		<transition name="router-fade" mode="out-in">
			<router-view></router-view>
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
