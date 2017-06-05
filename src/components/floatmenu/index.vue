<template>
  <section class="dh-header-floatmenu">
    <ul class="dh-floatmenu-fir">
      <li class="dh-floatmenu-list dh-floatmenu-close">
        <i class="fa fa-close" aria-hidden="true"></i>
      </li>
      <li class="dh-floatmenu-list" v-for="firItem in floatMenus">
        <template v-if="firItem.secmenu">
          <div class="dh-floatmenu-list">{{firItem.firmenu.name}} <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
          <ul class="dh-floatmenu-sec">
            <li class="dh-floatmenu-list" v-for="secItem in firItem.secmenu">
              <template v-if="secItem.thirmenu">
                <div>{{secItem.name}} <i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                <ul class="dh-floatmenu-thir">
                  <li v-for="thirItem in secItem.thirmenu">
                    <router-link  tag="a" :to="'/products/' + thirItem.id" :key="thirItem.id" class="">
                      {{thirItem.name}}
                    </router-link>
                  </li>
                </ul>
              </template>
              <template v-else>
                <router-link  tag="a" :to="'/products/' + secItem.id" :key="secItem.id" class="ellipsis">
                  {{secItem.name}}
                </router-link>
              </template>
            </li>
          </ul>
        </template>


        <template v-else>
          <router-link  tag="a" :to="'/products/' + firItem.firmenu.id" :key="firItem.firmenu.id" class="ellipsis">
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
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
}
</style>