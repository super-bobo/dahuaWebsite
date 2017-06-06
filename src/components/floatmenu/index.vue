<template>
  <section class="dh-header-floatmenu">
    <div class="dh-floatmenu-close">
      <div class="dh-close-btn" onclick="window.history.go(-1)"><i class="fa fa-close" aria-hidden="true"></i></div>
    </div>
    <scroller>
      <ul class="dh-floatmenu-fir">
        <li class="dh-floatmenu-list" v-for="(firItem, firIndex) in floatMenus">
          <template v-if="firItem.secmenu">
            <div class="dh-floatmenu-link dh-has-icon" @click="currentFirNode= currentFirNode===firIndex? -1:firIndex" :class="{active: firIndex === currentFirNode}">{{firItem.firmenu.name}} <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
            <ul class="dh-floatmenu-sec" :class="{active: firIndex === currentFirNode}">
              <li class="dh-floatmenu-list" v-for="(secItem, secIndex) in firItem.secmenu">
                <template v-if="secItem.thirmenu">
                  <div class="dh-floatmenu-link dh-has-icon" @click="currentSecNode= currentSecNode===secIndex?-1:secIndex" :class="{active: secIndex === currentSecNode}">{{secItem.name}} <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                  <ul class="dh-floatmenu-thir" :class="{active: secIndex === currentSecNode}">
                    <li class="dh-floatmenu-list" v-for="thirItem in secItem.thirmenu">
                      <router-link  tag="a" :to="'/products/' + thirItem.id" :key="thirItem.id" class="dh-floatmenu-link">
                        {{thirItem.name}}
                      </router-link>
                    </li>
                  </ul>
                </template>
                <template v-else>
                  <router-link  tag="a" :to="'/products/' + secItem.id" :key="secItem.id" class="dh-floatmenu-link">
                    {{secItem.name}}
                  </router-link>
                </template>
              </li>
            </ul>
          </template>


          <template v-else>
            <router-link  tag="a" :to="'/home'" :key="firItem.firmenu.id" class="dh-floatmenu-link">
              {{firItem.firmenu.name}}
            </router-link>
          </template>
        </li>
      </ul>
    </scroller>
  </section>
</template>

<script>
var floatMenus = [
    {
      'firmenu': {
        'name': 'HOME',
        'id': '1'
      }
    },
    {
      'firmenu': {
        'name': 'PRODUCTS',
        'id': '2'
      },
      'secmenu': [
        {
          'name': 'New Products',
          'id': '2-1'
        },
        {
          'name': 'Product Selector',
          'id': '2-2'
        },
        {
          'name': 'Network Products',
          'id': '2-3',
          'thirmenu': [
            {
              'name': "Network Camera",
              'id': '3-1'
            },
            {
              'name': 'Network PTZ Camera',
              'id': '3-2'
            },
          ]
        }
      ]
    },
    {
      'firmenu': {
        'name': 'SOLUTION',
        'id': '2'
      },
      'secmenu': [
        {
          'name': 'New Products',
          'id': '2-1'
        },
        {
          'name': 'Product Selector'
        },
        {
          'name': 'Network Products',
          'thirmenu': [
            {
              'name': 'Network Camera'
            },
            {
              'name': 'Network PTZ Camera'
            },
          ]
        }
      ]
    },
    {
      'firmenu': {
        'name': '22'
      },
      'secmenu': [
        {
          'name': 'New Products'
        },
        {
          'name': 'Product Selector'
        },
        {
          'name': 'Network Products'
        }
      ]
    }
];
export default {
  data () {
    return {
      floatMenus: floatMenus,
      currentFirNode: -1,
      currentSecNode: -1
    }
  },
  methods: {
    toggleList: function () {
      
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/common';
.dh-header-floatmenu{
  @close-height: 56px;
  @list-height: 48px;
  background-color: #fff;
  li{
    position: relative;
    border-top: solid 1px (#fff * .96);
  }
  .dh-floatmenu-close{
    width: 100%;
    height: @close-height;
    background-color: @dh-theme-color;
    color: #fff;
    text-align: right;
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
    .dh-close-btn{
      display: inline-block;
      margin-right: 18px;
      text-align: center;
      margin-top: (@close-height - 32)/2;
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
        transition: all ease .3s;
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
      &.active{
        background-color: @dh-theme-color * 1.3;
      }
    }
  }
  .dh-floatmenu-sec{
    display: none;
    transform:scale(1,0);
    transition: all ease .3s;
    .dh-floatmenu-link{
      background-color: #eaecee;
      color: @dh-font-color;
      &.active{
        background-color: #dadada;
      }
    }
    &.active{
      transform:scale(1,1);
      display: block;
    }
  }
  .dh-floatmenu-thir{
    display: none;
    transform:scale(1,0);
    transition: all ease .3s;
    .dh-floatmenu-link{
      background-color: #fff;
      color: @dh-font-color;
    }
    &.active{
      transform:scale(1,1);
      display: block;
    }
  }
}
</style>