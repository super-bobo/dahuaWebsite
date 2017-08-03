<template>
<div>
  <section class="dh-header">
    <div class="dh-header-left" @click="isShowMenu">
        <svg viewBox="0 0 1024 1024"  width="100%" height="100%"><path d="M60.757333 124.458667l902.485333 0 0 138.282667-902.485333 0 0-138.282667Z" p-id="861" fill="#333333"></path><path d="M60.757333 442.837333l902.485333 0 0 138.282667-902.485333 0 0-138.282667Z" p-id="862" fill="#333333"></path><path d="M60.757333 761.258667l902.485333 0 0 138.282667-902.485333 0 0-138.282667Z" p-id="863" fill="#333333"></path></svg>
    </div>
    <h1 class="dh-header-title">
      <img @click="reload" class="dh-logo" src="../../assets/images/dh-logo.png">
    </h1>
    <div class="dh-header-right" @click="showSearch = !showSearch">
        <svg viewBox="0 0 1024 1024" width="100%" height="100%"><path fill="#333" d="M934.156626 935.351823c-32.689836 32.898495-85.700695 32.898495-118.410518 0l-147.781404-148.729761c-60.757606 39.17344-132.598698 62.577373-210.127933 62.577373-215.789095 0-390.743076-176.030251-390.743076-393.223994 0-217.177753 174.953981-393.228991 390.743076-393.228991 215.820074 0 390.754069 176.051237 390.754069 393.228991 0 78.029296-23.253234 150.311089-62.215618 211.470623l147.781404 148.722766C966.870446 849.099503 966.870446 902.426147 934.156626 935.351823zM457.836971 175.098675c-154.1291 0-279.107165 125.754938-279.107165 280.876766 0 155.13202 124.977865 280.877365 279.107165 280.877365 154.161079 0 279.113961-125.745345 279.113961-280.877365C736.950931 300.853613 611.998049 175.098675 457.836971 175.098675z" p-id="1003"></path></svg>
    </div>
  </section>
  <section class="dh-head-search dh-container" :class="{'dh-head-showsearch': showSearch}">
    <ul>
      <li>
        <svg viewBox="0 0 1024 1024" width="18" height="18"><path fill="#a0a0a0" d="M934.156626 935.351823c-32.689836 32.898495-85.700695 32.898495-118.410518 0l-147.781404-148.729761c-60.757606 39.17344-132.598698 62.577373-210.127933 62.577373-215.789095 0-390.743076-176.030251-390.743076-393.223994 0-217.177753 174.953981-393.228991 390.743076-393.228991 215.820074 0 390.754069 176.051237 390.754069 393.228991 0 78.029296-23.253234 150.311089-62.215618 211.470623l147.781404 148.722766C966.870446 849.099503 966.870446 902.426147 934.156626 935.351823zM457.836971 175.098675c-154.1291 0-279.107165 125.754938-279.107165 280.876766 0 155.13202 124.977865 280.877365 279.107165 280.877365 154.161079 0 279.113961-125.745345 279.113961-280.877365C736.950931 300.853613 611.998049 175.098675 457.836971 175.098675z" p-id="1003"></path></svg></li>
      <li>
        <input type="search" v-model="searchKeyword" placeholder="Search">
      </li>
      <li>
        <button @click="routerToSearch" :disabled="searchKeyword == ''">Search</button>
      </li>
    </ul>
  </section>
  <float-menu :showMenu="showMenu" @ShowMenuMethods="isShowMenu"></float-menu>
</div>
</template>

<script>
import floatMenu from '@/components/floatmenu/'
export default {
  data () {
    return {
      showMenu: false,
      showSearch: false,
      searchKeyword: ''
    }
  },
  components: {
      floatMenu,
  },
  methods: {
    isShowMenu() {
      this.showMenu = !this.showMenu
    },

    reload(){
        window.location.reload();
    },
    routerToSearch () {
      this.$router.push("/search/" + this.searchKeyword)
      this.showSearch = false
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/common';
@header-height: 62px;
@icon-height: 36px;
.dh-header{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 10;
    .dh-header-left, .dh-header-right{
      position: absolute;
      height: @icon-height;
      top: (@header-height - @icon-height)/2;
      width: 40px;
      padding: 3px 7px;
    }
    .dh-header-left{
      left: 10px;
    }
    .dh-header-right{
      right: 10px;
    }
    .dh-header-title{
      width: auto;
      margin: 0 64px;
      text-align: center;
      height: @header-height;
      line-height: @header-height;
      .dh-logo{
        height: 56%;
        vertical-align: middle;
      }
    }
}
.dh-head-search{
  @dh-head-search: 48px;
  position: fixed;
  width: 100%;
  height: @dh-head-search;
  left: 0;
  top: -@dh-head-search;
  background-color: #fafafa;
  border-top: solid 2px #e8e8e8;
  border-bottom: solid 1px #e8e8e8;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .05);
  z-index: 9;
  .trandtion-ease();
  &.dh-head-showsearch{
    display: block;
    top: @header-height;
  }
  ul{
    display: table;
    width: 100%;
    height: 100%;
  }
  li{
    display: table-cell;
    vertical-align: middle;
    &:first-child{
      width: 24px;
      svg{
        vertical-align: middle;
      }
    }
    &:nth-child(2){
      input{
        width: 96%;
        height: 28px;
        padding: 0 8px;
        background-color: #f8f8f8;
      }
    }
    &:last-child{
      width: 20%;
      text-align: right;
      button{
        width: 100%;
        padding: 4px 0;
        border-radius: 6px;
        background-color: #ee4503;
        color: #fff;
        text-align: center;
        font-size: 14px;
        .trandtion-ease();
        &:disabled{
          background-color: #ccc;
        }
      }
    }
  }
}
</style>