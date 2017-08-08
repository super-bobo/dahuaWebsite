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
               <li class="dh-searchlist-list" v-for="(item, index) in searchList.data.list" v-if="index < dateCount.listCount">
                <template v-if="$route.params.menu == 'events'">
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
                </template>
                <template v-else>
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
              </template>
            </li>
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
                return 'IPCSupportDetail'
                break;
            case 'SuccessStories':
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
    margin: 20px 0;
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
      }
      .dh-partright{
        font{
          color: red;
        }
      }
    }
  }
</style>
<style lang="less">
  .dh-partright{
      font{
        color: red;
        font-weight: bold;
      }
    }
</style>
