<template>
  <div v-transfer-dom>
    <popup v-model="showMenu" position="left" width="100%">
      <section class="dh-header-floatmenu">
        <div class="dh-floatmenu-close">
          <div class="dh-close-btn" @click="isShowMenu">
            <svg viewBox="0 0 1024 1024" width="100%" height="100%"><path fill="#fff" d="M843.064626 222.806505c24.230867 24.230867 24.230867 63.882959 0.001023 88.11792l-533.725814 533.725814c-24.233937 24.229844-63.886029 24.229844-88.11792 0l-40.879036-40.882106c-24.232914-24.230867-24.232914-63.883983 0-88.122013l533.718651-533.718651c24.240077-24.232914 63.893192-24.232914 88.122013-0.001023L843.064626 222.806505z" p-id="998"></path><path fill="#fff" d="M221.219869 181.925423c24.231891-24.232914 63.885006-24.232914 88.11792 0l533.727861 533.719674c24.229844 24.239054 24.229844 63.892169-0.001023 88.12099l-40.882106 40.880059c-24.228821 24.230867-63.883983 24.228821-88.122013-0.001023L180.340833 310.923402c-24.231891-24.234961-24.231891-63.887053 0-88.118943L221.219869 181.925423z" p-id="999"></path></svg>
          </div>
        </div>
        <scroller>
          <ul class="dh-floatmenu-fir">
            <template v-for="(firItem, firIndex) in productMenu.data" v-if="productMenu">
              <template v-if="firItem.id == '12'">
                <li class="dh-floatmenu-list">
                  <div class="dh-linkbox" :class="{active: currentFirNode===firIndex}">
                    <router-link  tag="a" :to="'/'+ firItem.url" :key="firItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                      {{firItem.name}}
                    </router-link>
                    <span v-if="firItem.child != '' && firItem.child" :class="{active: currentFirNode===firIndex}" @click="currentFirNode= currentFirNode===firIndex? -1:firIndex;currentSecNode=-1;">
                      <svg viewBox="0 0 1024 1024" width="24" height="24"><path fill="#fff" d="M998.303758 318.164317l0-0.081864 0.089028 0L998.303758 318.164317zM103.918791 385.951189l0-67.868737 87.87335 0 322.642305 298.143331L837.068564 318.082452l86.710874 0 0 68.957535L514.433422 765.28261 103.918791 385.951189z" p-id="4003"></path></svg>
                    </span>
                  </div>
                  <ul class="dh-floatmenu-sec" v-show="firIndex === currentFirNode">
                    <template v-for="(secItem, secIndex) in firItem.child">
                      <template v-if="secItem.id == '121'">
                        <li class="dh-floatmenu-list">
                          <div class="dh-linkbox" :class="{active: currentSecNode===secIndex}">
                            <router-link  tag="a" :to="'/product/videoConferencing'" :key="secItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                              {{secItem.name}}
                            </router-link>
                            <span v-if="secItem.child != '' && secItem.child" :class="{active: currentSecNode===secIndex}" @click="currentSecNode= currentSecNode===secIndex?-1:secIndex;">
                              <svg viewBox="0 0 1024 1024" width="24" height="24"><path fill="#606060" d="M998.303758 318.164317l0-0.081864 0.089028 0L998.303758 318.164317zM103.918791 385.951189l0-67.868737 87.87335 0 322.642305 298.143331L837.068564 318.082452l86.710874 0 0 68.957535L514.433422 765.28261 103.918791 385.951189z" p-id="4003"></path></svg>
                            </span>
                          </div>
                          <ul class="dh-floatmenu-thir" v-show="secIndex === currentSecNode">
                            <li class="dh-floatmenu-list" v-for="thirItem in secItem.child">
                              <div class="dh-linkbox">
                                <router-link  tag="a" :to="'/product/videoConferencing#' + thirItem.id" :key="thirItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                                  {{thirItem.name}}
                                </router-link>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </template>
                      <template v-else-if="secItem.id == '-1'">
                        <li class="dh-floatmenu-list">
                          <div class="dh-linkbox" :class="{active: currentSecNode===secIndex}">
                            <router-link  tag="a" :to="'/product/newProductList'" :key="secItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                              {{secItem.name}}
                            </router-link>
                          </div>
                        </li>
                      </template>
                      <template v-else-if="secItem.id == '-2'">
                        <li class="dh-floatmenu-list">
                          <div class="dh-linkbox" :class="{active: currentSecNode===secIndex}">
                            <router-link  tag="a" :to='"/product/productSelect/" + secItem.main_id' :key="secItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                              {{secItem.name}}
                            </router-link>
                          </div>
                        </li>
                      </template>
                      <template v-else>
                        <li class="dh-floatmenu-list" >
                          <div class="dh-linkbox" :class="{active: currentSecNode===secIndex}">
                            <router-link  tag="a" :to="'/product/subProduct/'+ secItem.id" :key="secItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                              {{secItem.name}}
                            </router-link>
                            <span v-if="secItem.child != '' && secItem.child" :class="{active: currentSecNode===secIndex}" @click="currentSecNode= currentSecNode===secIndex?-1:secIndex;">
                              <svg viewBox="0 0 1024 1024" width="24" height="24"><path fill="#606060" d="M998.303758 318.164317l0-0.081864 0.089028 0L998.303758 318.164317zM103.918791 385.951189l0-67.868737 87.87335 0 322.642305 298.143331L837.068564 318.082452l86.710874 0 0 68.957535L514.433422 765.28261 103.918791 385.951189z" p-id="4003"></path></svg>
                            </span>
                          </div>
                          <ul class="dh-floatmenu-thir" v-show="secIndex === currentSecNode">
                            <li class="dh-floatmenu-list" v-for="(thirItem, thirIndex) in secItem.child">
                              <div class="dh-linkbox" :class="{active: currentThirNode===thirIndex}">
                                <template v-if="thirItem.child && thirItem.child != ''">
                                  <router-link  tag="a" :to="'/product/thirProduct/' + thirItem.id" :key="thirItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                                    {{thirItem.name}}
                                  </router-link>
                                </template>
                                <template v-else>
                                  <router-link  tag="a" :to="'/product/productList/' + thirItem.id" :key="thirItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                                    {{thirItem.name}}
                                  </router-link>
                                </template>
                                <span v-if="thirItem.child != '' && thirItem.child" :class="{active: currentThirNode===thirIndex}" @click="currentThirNode= currentThirNode===thirIndex?-1:thirIndex;">
                                  <svg viewBox="0 0 1024 1024" width="24" height="24"><path fill="#606060" d="M998.303758 318.164317l0-0.081864 0.089028 0L998.303758 318.164317zM103.918791 385.951189l0-67.868737 87.87335 0 322.642305 298.143331L837.068564 318.082452l86.710874 0 0 68.957535L514.433422 765.28261 103.918791 385.951189z" p-id="4003"></path></svg>
                                </span>
                              </div>
                              <ul class="dh-floatmenu-fourth" v-show="thirIndex === currentThirNode">
                                <li class="dh-floatmenu-list" v-for="fourthItem in thirItem.child">
                                  <div class="dh-linkbox">
                                    <router-link  tag="a" :to="'/product/productList/' + fourthItem.id" :key="fourthItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                                      {{fourthItem.name}}
                                    </router-link>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </template>
                    </template>
                  </ul>
                </li>
              </template>
              <template v-else-if="firItem.id == '32'">
                <li class="dh-floatmenu-list">
                  <div class="dh-linkbox" :class="{active: currentFirNode===firIndex}">
                    <router-link  tag="a" :to="'/'+ firItem.url" :key="firItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                      {{firItem.name}}
                    </router-link>
                    <span v-if="firItem.child != '' && firItem.child" :class="{active: currentFirNode===firIndex}" @click="currentFirNode= currentFirNode===firIndex? -1:firIndex;currentSecNode=-1;">
                      <svg viewBox="0 0 1024 1024" width="24" height="24"><path fill="#fff" d="M998.303758 318.164317l0-0.081864 0.089028 0L998.303758 318.164317zM103.918791 385.951189l0-67.868737 87.87335 0 322.642305 298.143331L837.068564 318.082452l86.710874 0 0 68.957535L514.433422 765.28261 103.918791 385.951189z" p-id="4003"></path></svg>
                    </span>
                  </div>
                  <ul class="dh-floatmenu-sec" v-show="firIndex === currentFirNode">
                    <li class="dh-floatmenu-list" v-for="(secItem, secIndex) in firItem.child">
                      <div class="dh-linkbox" :class="{active: currentSecNode===secIndex}">
                        <template v-if="secItem.url">
                          <router-link  tag="a" :to="'/'+ secItem.url" :key="secItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                            {{secItem.name}}
                          </router-link>
                        </template>
                        <template v-else>
                          <router-link  tag="a" :to="'/'+ firItem.url + '/' + secItem.child[0].id" :key="secItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                            {{secItem.name}}
                          </router-link>
                        </template>
                        <span v-if="secItem.child != '' && secItem.child" :class="{active: currentSecNode===secIndex}" @click="currentSecNode= currentSecNode===secIndex?-1:secIndex;">
                          <svg viewBox="0 0 1024 1024" width="24" height="24"><path fill="#606060" d="M998.303758 318.164317l0-0.081864 0.089028 0L998.303758 318.164317zM103.918791 385.951189l0-67.868737 87.87335 0 322.642305 298.143331L837.068564 318.082452l86.710874 0 0 68.957535L514.433422 765.28261 103.918791 385.951189z" p-id="4003"></path></svg>
                        </span>
                      </div>
                      <ul class="dh-floatmenu-thir" v-show="secIndex === currentSecNode">
                        <li class="dh-floatmenu-list" v-for="thirItem in secItem.child">
                          <div class="dh-linkbox">
                            <router-link  tag="a" :to="'/'+ firItem.url + '/' + thirItem.keyword" :key="thirItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                              {{thirItem.name}}
                            </router-link>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </template>
              <template v-else>
                <li class="dh-floatmenu-list">
                  <div class="dh-linkbox" :class="{active: currentFirNode===firIndex}">
                    <router-link  tag="a" :to="'/'+ firItem.url" :key="firItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                      {{firItem.name}}
                    </router-link>
                    <span v-if="firItem.child != '' && firItem.child" :class="{active: currentFirNode===firIndex}" @click="currentFirNode= currentFirNode===firIndex? -1:firIndex;currentSecNode=-1;">
                      <svg viewBox="0 0 1024 1024" width="24" height="24"><path fill="#fff" d="M998.303758 318.164317l0-0.081864 0.089028 0L998.303758 318.164317zM103.918791 385.951189l0-67.868737 87.87335 0 322.642305 298.143331L837.068564 318.082452l86.710874 0 0 68.957535L514.433422 765.28261 103.918791 385.951189z" p-id="4003"></path></svg>
                    </span>
                  </div>
                  <ul class="dh-floatmenu-sec" v-show="firIndex === currentFirNode">
                    <li class="dh-floatmenu-list" v-for="(secItem, secIndex) in firItem.child">
                      <div class="dh-linkbox" :class="{active: currentSecNode===secIndex}">
                        <template v-if="secItem.url">
                          <router-link  tag="a" :to="'/'+ secItem.url" :key="secItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                            {{secItem.name}}
                          </router-link>
                        </template>
                        <template v-else>
                          <router-link  tag="a" :to="'/'+ firItem.url + '/' + secItem.child[0].id" :key="secItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                            {{secItem.name}}
                          </router-link>
                        </template>
                        <span v-if="secItem.child != '' && secItem.child" :class="{active: currentSecNode===secIndex}" @click="currentSecNode= currentSecNode===secIndex?-1:secIndex;">
                          <svg viewBox="0 0 1024 1024" width="24" height="24"><path fill="#606060" d="M998.303758 318.164317l0-0.081864 0.089028 0L998.303758 318.164317zM103.918791 385.951189l0-67.868737 87.87335 0 322.642305 298.143331L837.068564 318.082452l86.710874 0 0 68.957535L514.433422 765.28261 103.918791 385.951189z" p-id="4003"></path></svg>
                        </span>
                      </div>
                      <ul class="dh-floatmenu-thir" v-show="secIndex === currentSecNode">
                        <li class="dh-floatmenu-list" v-for="thirItem in secItem.child">
                          <div class="dh-linkbox">
                            <router-link  tag="a" :to="'/'+ firItem.url + '/' + thirItem.id" :key="thirItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                              {{thirItem.name}}
                            </router-link>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </template>
            </template>
          </ul>
        </scroller>
      </section>
    </popup>
  </div>
</template>

<script>

import { TransferDom, Popup } from 'vux'

import { mapGetters } from 'vuex'
export default {
  props: ['showMenu'],
  directives: {
    TransferDom
  },
  components: {
    Popup
  },
  data () {
    return {
      currentFirNode: -1,
      currentSecNode: -1,
      currentThirNode: -1
    }
  },
  computed: {
    ...mapGetters([
      'productMenu'
    ])
  },
  methods: {
    isShowMenu: function (){
       this.$emit('ShowMenuMethods')      
    }
  },
  created() {
    if(this.productMenu.length == 0) this.$store.dispatch('getProductMenu')

  },
  mounted() {
      
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/common';
.vux-popup-mask{
  z-index: 0;
}
.dh-header-floatmenu{
  width: 100%;
  height: 100%;
  background-color: #fff;
  @close-height: 84px;
  @list-height: 76px;
  li{
    position: relative;
    border-top: solid 1px #4479ac;
  }
  .dh-floatmenu-close{
    width: 100%;
    height: @close-height;
    background-image:linear-gradient(90deg, #145696, #2766a4);
    color: #fff;
    text-align: right;
    position: absolute;
    top:0;
    left: 0;
    z-index: 999;
    .dh-close-btn{
      @close-btnheight: 56px;
      display: inline-block;
      width: @close-btnheight;
      height: @close-btnheight;
      text-align: center;
      padding: 7px;
      margin-top: (@close-height - @close-btnheight)/2;
      margin-right: 5px;
    }
  }
  .dh-linkbox{
    display: table;
    width: 100%;
    word-break: break-all;
    >a{
      display: table-cell;
    }
    >span{
      display: table-cell;
      width: 72px;
      text-align: center;
      vertical-align: middle;
      svg{
        .trandtion-ease();
      }
      &.active{
        svg{
          transform:rotate(180deg);
        }
      }
    }
  }
  .dh-floatmenu-link{
    display: block;
    line-height: @list-height - 20 - 20;
    padding: 10px 18px;
    font-size: 18px;
    color: #606060;
  }
  .dh-floatmenu-fir{
    padding-top: @close-height;
    >li>.dh-linkbox{
      background-image:linear-gradient(90deg, #145696, #2766a4);
      background-color: #195b9b;
      color: #fff;
      .trandtion-ease();
      &.active{
        background-image:linear-gradient(90deg, #145696, #2766a4);
        background-color: #2273c2;
      }
      .dh-floatmenu-link{
        line-height: @list-height - 20;
        color: #fff;
      }
    }
  }
  .dh-floatmenu-sec{
    .dh-floatmenu-list{
      border-color: #fff;
    }
    .dh-linkbox{
      background-color: #e3e5e6;
      .trandtion-ease();
      &.active{
        background-color: #dadada;
      }
      .dh-floatmenu-link{
        padding-left: 32px;
      }
    }
  }
  .dh-floatmenu-thir{
    transition: all ease .3s;
    .dh-floatmenu-list{
      border-color: #fff;
    }
    .dh-linkbox{
      background-color: #f2f2f2;
      .trandtion-ease();
      &.active{
        background-color: #e3e5e6;
      }
      .dh-floatmenu-link{
        padding-left: 54px;
      }
    }
  }
  .dh-floatmenu-fourth{
    transition: all ease .3s;
    .dh-floatmenu-list{
      border-color: #f2f2f2;
    }
    .dh-linkbox{
      background-color: #fff;
      .trandtion-ease();
      &.active{
        background-color: #f0f0f0;
      }
      .dh-floatmenu-link{
        padding-left: 76px;
      }
    }
  }
}

</style>