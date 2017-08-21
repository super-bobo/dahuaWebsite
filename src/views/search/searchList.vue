<template>
 <div>
  <transition name="router-fade" mode="out-in">
    <div>
      <head-top></head-top>
      <div class="dh-container-scroller">
        <section class="dh-list-wrapper" ref="dh_list_height">
          <load-more :dateCount="dateCount" v-if="searchList">
            <div slot="content">
              <div class="dh-sub-title">
                <h3>{{searchList.data.menu}}</h3>
              </div>
              <ul class="dh-container dh-searchlist-item">
                <template v-if="$route.params.menu == 'Events'">
                <li class="dh-searchlist-list" v-for="(item, index) in searchList.data.list" v-if="index < dateCount.listCount">

                  <flexbox :gutter="0" wrap="wrap">
                    <flexbox-item :span="1/3" v-if="item.image">
                      <div class="dh-partleft">
                        <img class="dh-width-fluid dh-img" :src="item.image">
                      </div>
                    </flexbox-item>
                    <flexbox-item>
                      <div class="dh-partright">
                        <h3 class="dh-title" v-html="item.name"></h3>
                        <div class="dh-text" v-html="item.searchText" v-if="item.searchText"></div>
                      </div>
                    </flexbox-item>
                  </flexbox>
                </li>
              </template>
              <template v-else-if="$route.params.menu == 'Partner'">
                <li class="dh-searchlist-list dh-partner-list" v-for="(item, index) in searchList.data.list" v-if="index < dateCount.listCount">
                  <flexbox :gutter="0" wrap="wrap" align="flex-start">
                    <flexbox-item :span="2/3">
                      <section class="dh-contentleft">
                        <h3 v-html="item.name"></h3>
                        <p>Tel:{{item.tel}}</p>
                        <p>Email:{{item.email}}</p>
                        <p>Url:{{item.url}}</p>
                        <button :class="{disabled: index == showDetail}" @click="showDetail = index">Details</button>
                      </section>
                    </flexbox-item>
                    <flexbox-item :span="1/3">
                      <div  class="dh-contentright">
                        <img :src="item.image" class="dh-width-fluid">
                      </div>
                    </flexbox-item>
                  </flexbox>
                  <div class="dh-content" v-html="item.searchText" v-if="index == showDetail"></div>
                  <flexbox class="dh-subcontent" :gutter="0" wrap="wrap" align="flex-start">
                    <flexbox-item>
                      <h3 class="dh-subtitle">Supported Products</h3>
                      <p>{{item.text}}</p>
                    </flexbox-item>
                  </flexbox>
                </li>
              </template>
              <template v-else>
                <li class="dh-searchlist-list" v-for="(item, index) in searchList.data.list" v-if="index < dateCount.listCount">
                  <router-link tag="a" :to="'/' + getRouterLink + '/' + item.id">
                   <flexbox :gutter="0" wrap="wrap">
                    <flexbox-item :span="1/3" v-if="item.image">
                      <div class="dh-partleft">
                        <img class="dh-width-fluid dh-img" :src="item.image">
                      </div>
                    </flexbox-item>
                    <flexbox-item>
                      <div class="dh-partright">
                        <h3 class="dh-title" v-html="item.name"></h3>
                        <div class="dh-text" v-html="item.searchText" v-if="item.searchText"></div>
                      </div>
                    </flexbox-item>
                  </flexbox>
                </router-link>
              </li>
            </template>
          </ul>
        </div>
      </load-more>
    </section>
  </section>
</div>
</div>
</transition>
</div>
</template>

<script>
  import headTop from '@/components/header/'
  import footerPart from '@/components/footer/'

  import { Flexbox, FlexboxItem } from 'vux'

  import loadMore from '@/components/common/loadMore'

  import { mapGetters } from 'vuex'

  export default {
    data(){
      return{
        showDetail: -1,
        dateCount: {
          listCount: 0,
          totalCount: '',
          listHeight: ''
        }
      }
    },
    components: {
      headTop,
      footerPart,
      Flexbox,
      FlexboxItem,
      loadMore
    },
    computed: {
      ...mapGetters([
        'searchList'
        ]),
      getRouterLink () {
        switch (this.$route.params.menu) {
            case 'Products':
                return 'product/productDetail'
                break; 
            case 'News':
                return 'newsroom/pressReleaseDetail'
                break;
            case 'Solution':
                return 'solutionBank'
                break;
            case 'Partner':
                return 'technologyPartner'
                break;
            case 'Success Stories':
                return 'newsroom/successStoryDetail'
                break;
            default:
                break;
        }
      }
    },
    created () {
      this.getStatus()

   },
   methods: {
    getStatus () {
      this.$store.dispatch('getSearchList', {
        menu: this.$route.params.menu,
        keyword: this.$route.params.keyword
      })
    },
    setTotalCount () {
      let timer = setInterval( () => {
        if(this.searchList){
          console.log(this.searchList.data.list.length)
          this.dateCount.totalCount = this.searchList.data.list.length
          clearInterval(timer)
        }
      }, 100)
    },
    pushListHeight () {
      this.dateCount.listHeight = this.$refs.dh_list_height.clientHeight
      console.log(this.dateCount.listHeight)
    },
  },
  mounted () {
    this.$nextTick( () => {
     this.setTotalCount()
     this.pushListHeight()
   })
  },
  watch: {
    '$route' (to, from) {
      this.getStatus()
    }
  }
}

</script>

<style lang="less">
  @import '../../assets/styles/common';
  .dh-searchlist-item{
    margin-bottom: 20px;
    .dh-searchlist-list{
      padding-bottom: 12px;
      margin-top: 12px;
      border-bottom: dashed 1px #ccc;
      .dh-partleft{
        padding: 0 10%;
      }
      .dh-title{
        font-size: 14px;
        color: #0e5fae;
        font-weight: 500;
      }
      .dh-text{
        font-size: 13px;
        color: #606060;
        margin-top: 3px;
        word-wrap: break-word;
      }
    }
  }
  .dh-partner-list{
      padding: 20px 0;
      border-bottom: dashed 1px #dadada;
      h3{
        font-weight: 500;
        color: #333;
        &.dh-subtitle{
          font-size: 15px;
          color: #606060;
        }
      }
      p{
        font-size: 14px;
        line-height: 17px;
        color: #606060;
      }
      button{
        padding: 4px 12px;
        background-color: #ee4503;
        font-size: 14px;
        color: #fff;
        margin-top: 8px;
        .trandtion-ease();
        &.disabled{
          background-color: #dadada;
        }
      }
    }
    .dh-contentleft{
      margin-right: 12px;
    }
    .dh-contentright{
      padding: 5px;
      border: solid 1px #eaecee;
    }
    .dh-content{
      margin-top: 15px;
      font-size: 14px;
      color: #606060;
    }
    .dh-subcontent{
      margin-top: 15px;
    }
</style>
<style lang="less" scoped>
  .dh-partright{
      font{
        color: red;
        font-weight: bold;
      }
    }
</style>
