<template>
  <div v-transfer-dom>
    <popup v-model="showMenu" position="left" width="100%">
      <section class="dh-header-floatmenu">
        <div class="dh-floatmenu-close">
          <div class="dh-close-btn" @click="isShowMenu"><i class="fa fa-close" aria-hidden="true"></i></div>
        </div>
        <scroller>
          <ul class="dh-floatmenu-fir">
            <li class="dh-floatmenu-list" v-for="(firItem, firIndex) in productMenu.data" v-if="productMenu">
              <div class="dh-linkbox" :class="{active: currentFirNode===firIndex}">
                <router-link  tag="a" :to="'/'+ firItem.url" :key="firItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                  {{firItem.name}}
                </router-link>
                <span v-if="firItem.child != '' && firItem.child" :class="{active: currentFirNode===firIndex}" @click="currentFirNode= currentFirNode===firIndex? -1:firIndex;currentSecNode=-1;">
                  <i class="fa fa-chevron-down"></i>
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
                          <i class="fa fa-chevron-down"></i>
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
                  <template v-else>
                    <li class="dh-floatmenu-list" >
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
                          <i class="fa fa-chevron-down"></i>
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
                  </template>
                </template>
              </ul>
            </li>
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
      currentSecNode: -1
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
    background-image:linear-gradient( #105292, #2967a4);
    color: #fff;
    text-align: right;
    position: absolute;
    top:0;
    left: 0;
    z-index: 999;
    .dh-close-btn{
      display: inline-block;
      width: 72px;
      text-align: center;
      padding: 6px;
      margin-top: (@close-height - 48)/2;
      i{
        font-size: 36px;
        color: #fff;
      }
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
      i{
        .trandtion-ease();
      }
      &.active{
        i{
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
      // background-image:linear-gradient( #105292, #2967a4);
      background-color: #195b9b;
      color: #fff;
      .trandtion-ease();
      &.active{
        //background-image:linear-gradient( #1869b8, #2b78c2);
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
      background-color: #eaecee;
      padding-left: 24px;
      .trandtion-ease();
      i{
        color: #606060;
      }
      &.active{
        background-color: #dadada;
        //background-image: none;
      }
    }
  }
  .dh-floatmenu-thir{
    transition: all ease .3s;
    .dh-floatmenu-list{
      border-color: #eaecee;
    }
    .dh-linkbox{
      background-color: #fff;
      padding-left: 42px;
      .trandtion-ease();
      &.active{
        background-color: #dadada;
        //background-image: none;
      }
    }
  }
}

</style>