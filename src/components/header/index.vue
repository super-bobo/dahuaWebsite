<template>
  <section class="dh-header">
    <div class="dh-header-left">
      <router-link :to="'/floatmenu'">
          <i class="fa fa-bars" aria-hidden="true"></i>
      </router-link>
    </div>
    <h1 class="dh-header-title">
      <img class="dh-logo" src="../../assets/images/dh-logo.png">
    </h1>
    <div class="dh-header-right">
      <router-link :to="'/floatmenu'">
          <i class="fa fa-search" aria-hidden="true"></i>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/common';
.dh-header{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    padding: 3px 0;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 2;
    .dh-header-left, .dh-header-right{
      position: absolute;
      top: 12px;
      display: block;
      font-size: 21px;
      line-height: 21px;
      color: #333;
    }
    .dh-header-left{
      left: 18px;
    }
    .dh-header-right{
      right: 18px;
    }
    .dh-header-title{
      width: auto;
      margin: 0 88px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      .dh-logo{
        height: 64%;
        vertical-align: middle;
      }
    }
}
</style>