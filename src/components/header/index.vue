<template>
<div>
  <section class="dh-header">
    <div class="dh-header-left">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <h1 class="dh-header-title">
      <img class="dh-logo" src="../../assets/images/dh-logo.png">
    </h1>
    <div class="dh-header-right">
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
  </section>
  <section class="dh-header-floatmenu">
    <ul class="dh-floatmenu-fir">
      <li class="dh-floatmenu-close">
        <i class="fa fa-close" aria-hidden="true"></i>
      </li>
      <li v-for="firItem in floatMenus">
        <template v-if="firItem.secmenu">
          <div>{{firItem.firmenu.name}} <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
          <ul>
            <li v-for="secItem in firItem">
              <template v-if="secItem.thimenu">
                <div>{{secItem.secmenu.name}} <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                <ul>
                  <router-link  tag="li" v-for="thiItem in secItem" :to="'/products/' + thiItem.id" :key="thiItem.id" class="">
                    {{thiItem.name}}
                  </router-link>
                </ul>
              </template>
              <template v-else>
                <router-link  tag="div" :to="'/products/' + secItem.id" :key="secItem.id" class="ellipsis">
                  {{secItem.name}}
                </router-link>
              </template>
            </li>
          </ul>
        </template>
        <template v-else>
          <router-link  tag="div" :to="'/products/' + firItem.id" :key="firItem.id" class="ellipsis">
            {{firItem.name}}
          </router-link>
        </template>
      </li>
    </ul>
  </section>
</div>
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
          'thimenu': [
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
          'thimenu': [
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

<style lang="less">

.dh-header{
    position: relative;
    padding: 3px 0;
    box-sizing: border-box;
    background-color: #fff;
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