<template>
<div>
  <section class="dh-header">
    <div class="dh-header-left">
      <div @click="isShowMenu">
          <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
    <h1 class="dh-header-title">
      <img class="dh-logo" src="../../assets/images/dh-logo.png">
    </h1>
    <div class="dh-header-right">
      <div>
          <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  </section>
  <float-menu :showMenu="showMenu" @ShowMenuMethods="isShowMenu"></float-menu>
</div>
</template>

<script>
import floatMenu from '@/components/floatmenu/'
export default {
  data () {
    return {
      showMenu: false
    }
  },
  components: {
      floatMenu,
  },
  methods: {
    isShowMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/common';
.dh-header{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    padding: 3px 0;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 2;
    .dh-header-left, .dh-header-right{
      position: absolute;
      top: 19px;
      display: block;
      font-size: 24px;
      line-height: 24px;
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
      height: 56px;
      line-height: 56px;
      .dh-logo{
        height: 56%;
        vertical-align: middle;
      }
    }
}
</style>