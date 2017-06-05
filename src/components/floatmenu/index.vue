<template>
  <section class="dh-header-floatmenu">
    <div class="dh-floatmenu-close">
      <div class="dh-close-btn"><i class="fa fa-close" aria-hidden="true"></i></div>
    </div>
    <ul class="dh-floatmenu-fir">
      <li class="dh-floatmenu-list" v-for="firItem in floatMenus">
        <template v-if="firItem.secmenu">
          <div class="dh-floatmenu-link dh-has-icon">{{firItem.firmenu.name}} <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
          <ul class="dh-floatmenu-sec">
            <li class="dh-floatmenu-list" v-for="secItem in firItem.secmenu">
              <template v-if="secItem.thirmenu">
                <div class="dh-floatmenu-link dh-has-icon">{{secItem.name}} <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                <ul class="dh-floatmenu-thir">
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
          <router-link  tag="a" :to="'/products/' + firItem.firmenu.id" :key="firItem.firmenu.id" class="dh-floatmenu-link">
            {{firItem.firmenu.name}}
          </router-link>
        </template>
      </li>
    </ul>
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
      showMenus: false
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
    height: @list-height;
    line-height: @list-height;
    padding: 0 18px;
    &.dh-has-icon{
      padding-right: 56px;
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
    }
    &.active{
      background-color: @dh-theme-color * 1.3;
    }
  }
  .dh-floatmenu-sec{
    .dh-floatmenu-link{
      background-color: #eaecee;
      color: @dh-font-color;
    }
  }
  .dh-floatmenu-thir{
    .dh-floatmenu-link{
      background-color: #fff;
      color: @dh-font-color;
    }
  }
}
</style>