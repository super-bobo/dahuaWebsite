<template>
  <div class="dh-filter-modulebox">
    <section class="dh-filterproduct-wrapper">
      <div class="dh-sub-title">
        <h3>Product select</h3>
      </div>
      <div class="dh-container-fluid">
        <section class="dh-filter-wrapper dh-container">
          <div class="dh-filter-top">
            <div class="dh-leftpart">
              <button class="dh-filter-btn" @click="sendInfoToParent">Back</button>
            </div>
            <div class="dh-rightpart">
              <button class="dh-compare-btn dh-reset-btn" @click="">Save result as PDF</button>
            </div>
          </div>
        </section>
        <section class="dh-filter-selectall">
          <h3 class="dh-select-title dh-container">Compatible Product</h3>
          <div class="dh-compare-wrapper">
            <table class="dh-compare-table" cellpadding="0" cellspacing="0" width="100%"  v-if="productToCompare">
              <tr class="dh-compare-top">
                <td class="dh-compare-list dh-compare-listtitle">Network Camera</td>
                <td class="dh-compare-list" v-for="(item, index) in productToCompare.data.product">
                  <img :src="item.pro_thumb" class="dh-width-fluid">
                  <span>{{item.name}}</span>
                </td>
              </tr>
              <template v-for="(item, index) in productToCompare.data.attribute">
                <tr  class="dh-compare-center">
                  <td :colspan="getColspan()">{{item.name}}</td>
                </tr>
                <tr v-for="(itemtwo, indextwo) in item.child"  class="dh-compare-bottom">
                  <td class="dh-compare-list dh-compare-listtitle">{{itemtwo.name}}</td>
                  <td  class="dh-compare-list" v-for="(itemthree, indexthree) in itemtwo.text">
                    <template v-if="itemthree.text == ''">N/A</template>
                    <template v-else>
                      <span>{{itemthree.text}}</span>
                    </template>
                  </td>
                </tr>
              </template>
            </table>
          </div>
        </section>
      </div>
    </section>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import { Flexbox, FlexboxItem } from 'vux'

export default {
    props: ['infoCompareObj'],
    data(){
        return{
          tableColspan: 2
        }
    },
    components: {
      Flexbox,
      FlexboxItem
    },
    computed: {
      ...mapGetters([
        'productToCompare',
      ])
    },
    created () {
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getProductToCompare', {//渲染产品比较表格
          compare: this.infoCompareObj
        })
      },
      sendInfoToParent () {
        this.$emit('listerToCompare', {
          compareColse: false,
        })
      },
      getColspan () {
        return Object.keys(this.infoCompareObj).length + 1
      }
    },
    mounted:function(){
      this.$nextTick(function () {
        this.getColspan()
      })
    },
    watch: {
      infoCompareObj: function(){
        this.getStatus()
        this.getColspan()
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .showCompareBox{
      top: 62px;
      &:before{
        display: block;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .dh-compare-table{
      table-layout: fixed;
      word-break: break-all;
      font-size: 12px;
      margin-bottom: 15px;
      .dh-compare-item{
        width: 100%;
        
      }
      .dh-compare-list{
        border-right: solid 1px #eaecee;
        padding: 8px 5px;

        &:last-child{
          border-right: 0;
        }
      }
      .dh-compare-listtitle{
        background-color: #f6f6f6;
      }
    }
    .dh-compare-top{
      .dh-compare-list{
        text-align: center;
      }
      .dh-compare-listtitle{
        text-align: left;
      }
    }
    .dh-compare-bottom{
      .dh-compare-list{
        border-bottom: solid 1px #eaecee;
        background-color: #ffffce;
      }
      .dh-compare-listtitle{
        background-color: #f6f6f6;
      }
    }
    .dh-compare-center{
      background-color: #eaecee;
      td{
        padding: 6px 5px;
        font-size: 15px;
      }
    }
</style>
