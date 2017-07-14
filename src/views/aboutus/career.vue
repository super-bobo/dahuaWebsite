<template>
  	<div>
      <transition name="router-fade" mode="out-in">
        <div>
          <head-top></head-top>
          <div class="dh-container-scroller">
            <section class="dh-product-wrapper">
              <div class="dh-sub-title">
                <h3>Open positions</h3>
              </div>
              <div class="dh-career-top">
                <section class="dh-container dh-search-wrapper">
                  <ul  v-if="career">
                    <li>
                      <p>Country</p>
                      <select class="dh-select-option" v-model="countryId">
                        <option v-for="(item, index) in career.data.country" v-bind:value="item.id">  
                          {{item.name}}
                        </option>  
                      </select>
                    </li>
                    <li>
                      <p>Function</p>
                      <select class="dh-select-option" v-model="functions">  
                        <option v-for="(item, index) in career.data.function" v-bind:value="item.job">  
                          {{item.job}}
                        </option>  
                      </select>
                    </li>
                    <li>
                      <p>Full text search</p>
                      <input class="dh-select-option" type="text" v-model="searchType">
                    </li>
                  </ul>
                  <div class="dh-search-btn">
                    <button @click="getStatus">Search</button>
                  </div>
                </section>
              </div>
              <div class="dh-career-content" v-if="career">
                <table cellspacing="0" cellpadding="0" width="100%">
                  <colgroup>
                    <col width="50%">
                    <col width="25%">
                    <col>
                  </colgroup>
                  <tr class="dh-table-title">
                    <td>Open positions</td>
                    <td>Country</td>
                    <td>Start date</td>
                  </tr>
                  <tr v-for="(item, index) in career.data.career">
                    <td>{{item.name}}</td>
                    <td>{{item.region_name}}</td>
                    <td>{{item.post_date}}</td>
                  </tr>
                </table>
              </div>
            </section>
            <footer-part></footer-part>
          </div>
        </div>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
          countryId: '',
          functions: '',
          searchType: ''
        }
    },
    components: {
        headTop,
        footerPart
    },
    computed: {
      ...mapGetters([
        'career'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getCareer', {
            country_id: this.countryId,
            functions: this.functions,
            search: this.searchType
        })
      },
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-career-top{
      background-color: #fbf3dc;
      padding-top: 2px;
      padding-bottom: 15px;
      .dh-search-wrapper{
        li{
          padding-top: 8px;
          p{
            font-weight: bold;
            font-size: 14px;
            line-height: 20px;
            color: #606060;
          }
          .dh-select-option{
            width: 100%;
            padding: 0 12px;
            height: 26px;
            line-height: 26px;
            margin-top: 3px;
          }
        }
      }
      .dh-search-btn{
        margin-top: 15px;
        text-align: center;
        button{
          background-color: #ee4503;
          border-radius: 5px;
          padding: 6px 24px;
          color: #fff;
          font-size: 15px;
        }
      }
    }
    .dh-career-content{
      margin-top: 15px;
      margin-bottom: 25px;
      td{
        padding: 12px 6px;
        font-size: 12px;
        color: #606060;
      }
      tr{
        &:nth-child(2n){
          background-color: #f0f0f0;
        }
        &.dh-table-title{
        background-color: #999;
        td{
          font-size: 13px;
          color: #fff;
        }
      }
      }
    }
</style>
