<template>
  	<div>
        <head-top></head-top>
    </div>
</template>

<script>
import headTop from '@/components/header/'
export default {
    data(){
        return{
            
        }
    },

	mounted(){
      
    },

    components:{
        headTop
    },

    methods:{
        //点击图标刷新页面
        reload(){
            window.location.reload();
        }
    },
}

</script>

<style lang="less" scoped>
</style>
