<template>
  <section class="dh-header-floatmenu" :class="{'dh-show-floatmenu': showMenu}">
    <div class="dh-floatmenu-close">
      <div class="dh-close-btn" @click="isShowMenu"><i class="fa fa-close" aria-hidden="true"></i></div>
    </div>
      <scroller>
        <ul class="dh-floatmenu-fir">
          <li class="dh-floatmenu-list" v-for="(firItem, firIndex) in productMenu.data" v-if="productMenu">
            <template v-if="firIndex != 0">
              <div class="dh-floatmenu-link dh-has-icon" @click="currentFirNode= currentFirNode===firIndex? -1:firIndex;currentSecNode=-1;" :class="{active: firIndex === currentFirNode}">{{firItem.name}}<i class="fa fa-chevron-down" aria-hidden="true"></i></div>
              <ul class="dh-floatmenu-sec" v-show="firIndex === currentFirNode">
                <li class="dh-floatmenu-list" v-for="(secItem, secIndex) in firItem.child">
                  <template v-if="secItem.child">
                    <div class="dh-floatmenu-link dh-has-icon" @click="currentSecNode= currentSecNode===secIndex?-1:secIndex;" :class="{active: secIndex === currentSecNode}">{{secItem.name}} <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                    <ul class="dh-floatmenu-thir" v-show="secIndex === currentSecNode">
                      <li class="dh-floatmenu-list" v-for="thirItem in secItem.child">
                        <router-link  tag="a" :to="'/'+ firItem.url + '/' + thirItem.id" :key="thirItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                          {{thirItem.name}}
                        </router-link>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <router-link  tag="a" :to="'/'+ secItem.url" :key="secItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                      {{secItem.name}}
                    </router-link>
                  </template>
                </li>
              </ul>
            </template>

            <template v-else>
              <router-link  tag="a" :to="'/'+ firItem.url" :key="firItem.id" class="dh-floatmenu-link" @click.native="isShowMenu">
                {{firItem.name}}
              </router-link>
            </template>
          </li>
        </ul>

      </scroller>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['showMenu'],
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
.dh-header-floatmenu{
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 11;
  position: fixed;
  left: -100%;
  top: 0;
  .trandtion-ease(0.3s);
  &.dh-show-floatmenu{
    left: 0;
  }
  @close-height: 56px;
  @list-height: 48px;
  li{
    position: relative;
    border-top: solid 1px #90b0d0;
  }
  .dh-floatmenu-close{
    width: 100%;
    height: @close-height;
    background-color: @dh-theme-color;
    color: #fff;
    text-align: right;
    position: absolute;
    top:0;
    left: 0;
    z-index: 999;
    .dh-close-btn{
      display: inline-block;
      margin-right: 12px;
      text-align: center;
      padding: 6px;
      margin-top: (@close-height - 44)/2;
      i{
        font-size: 32px;
        color: #fff;
      }
    }
  }
  .dh-floatmenu-link{
    display: block;
    line-height: @list-height - 20;
    padding: 10px 18px;
    &.dh-has-icon{
      padding-right: 56px;
      .fa{
        .trandtion-ease();
      }
      &.active{
        .fa{
          transform:rotate(180deg);
        }
      }
    }
    i.fa{
      position: absolute;
      top: (@list-height - 16)/2;
      right: 18px;
    }
  }
  .dh-floatmenu-fir{
    padding-top: @close-height;
    .dh-floatmenu-link{
      background-color: @dh-theme-color;
      color: #fff;
      .trandtion-ease();
      &.active{
        background-color: @dh-theme-color * 1.3;
      }
    }
  }
  .dh-floatmenu-sec{
    .dh-floatmenu-list{
      border-color: #fff;
    }
    .dh-floatmenu-link{
      background-color: #eaecee;
      color: @dh-font-color;
      padding-left: 32px;
      .trandtion-ease();
      &.active{
        background-color: #dadada;
      }
    }
  }
  .dh-floatmenu-thir{
    transition: all ease .3s;
    .dh-floatmenu-list{
      border-color: #eaecee;
    }
    .dh-floatmenu-link{
      background-color: #fff;
      color: @dh-font-color;
      padding-left: 48px;
    }
  }
}
</style>