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
              <button class="dh-compare-btn dh-reset-btn" @click="saveToPdf">Save result as PDF</button>
              <a :href="htmlToPdf.data"  target="_blank" ref="linkToPdf"></a>
            </div>
          </div>
        </section>
        <section class="dh-filter-selectall">
          <h3 class="dh-select-title dh-container">Compatible Product</h3>
          <div class="dh-compare-wrapper" ref="dh-save-pdf">
            <table class="dh-compare-table" style="table-layout: fixed;word-break: break-all;font-size: 12px;margin-bottom: 15px;" cellpadding="0" cellspacing="0" width="100%"  v-if="productToCompare">
              <tr class="dh-compare-top">
                <td class="dh-compare-list dh-compare-listtitle" style="border-right: solid 1px #eaecee;padding: 8px 5px;">Network Camera</td>
                <td class="dh-compare-list" style="border-right: solid 1px #eaecee;padding: 8px 5px;" v-for="(item, index) in productToCompare.data.product">
                  <img :src="item.pro_thumb" class="dh-width-fluid">
                  <span>{{item.name}}</span>
                </td>
              </tr>
              <template v-for="(item, index) in productToCompare.data.attribute">
                <tr  class="dh-compare-center" style="background-color: #eaecee;">
                  <td :colspan="getColspan()" style="padding: 6px 5px;font-size: 15px;">{{item.name}}</td>
                </tr>
                <tr v-for="(itemtwo, indextwo) in item.child"  class="dh-compare-bottom">
                  <td class="dh-compare-list dh-compare-listtitle" style="border-right: solid 1px #eaecee;padding: 8px 5px;border-bottom: solid 1px #eaecee;background-color: #f6f6f6;">{{itemtwo.name}}</td>
                  <td  class="dh-compare-list" style="border-right: solid 1px #eaecee;padding: 8px 5px;border-bottom: solid 1px #eaecee;background-color: #ffffce;" v-for="(itemthree, indexthree) in itemtwo.text">
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
        'htmlToPdf'
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
      },
      saveToPdf () {
        this.$store.dispatch('getHtmlToPdf', {//返回pdf地址
          html: this.$refs['dh-save-pdf'].innerHTML
        })
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
      },
      htmlToPdf: function(){
        console.log(this.htmlToPdf.data)
        //window.open(this.htmlToPdf.data)
        this.$refs.linkToPdf.click()
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
        vertical-align: top;
      }
      .dh-compare-listtitle{
        text-align: left;
        vertical-align: middle;
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
