<template>
    <div class="dh-subpage">
        <head-top></head-top>
        <div class="dh-container-scroller" ref="totalHeight">
          <section class="dh-main-wrapper">
            <div class="dh-sub-title">
              <h3>Product select</h3>
            </div>
            <div class="dh-container-fluid">
              <section class="dh-filter-wrapper dh-container" :class="{'dh-filter-float': showFilterFloat}">
                <div class="dh-filter-top">
                  <div class="dh-leftpart">
                    <button class="dh-filter-btn" @click="showFilterBox">Filter</button>
                    <span>Product (<span v-text="ischeckedFilterNum"></span>/<span v-text="filternum"></span>)</span>
                  </div>
                  <div class="dh-rightpart">
                    <button class="dh-compare-btn" @click="showCompareBox">Compare</button>
                  </div>
                </div>
                <div class="dh-filter-content">
                  <flexbox :gutter="0" wrap="wrap">
                    <flexbox-item :span="1/2" v-for="(item, index) in 4" :key="index">
                      <div class="dh-filter-list dh-elip" ref="box" @click="moveFilter(index)" :class="{'dh-has-product': filterProduct[index]}">
                        <span v-if="filterProduct[index]">{{filterProduct[index].filterName}}</span>
                      </div>
                    </flexbox-item>
                  </flexbox>
                </div>
              </section>
              <div class="dh-filter-search">
                <input type="text" name="" placeholder="Search..." v-model="filterKey">
              </div>
              <div class="dh-filter-productlist">
                <h3 class="dh-filter-title">Products list</h3>
                <ul class="dh-filter-item" id="dhFilterItem" v-if="productSelect">
                  <template v-for="(item, index) in productSelect.data">
                    <li class="dh-filter-list"  v-for="(item2, index2) in item.product_models" v-if="myfilter(item2.model)">
                      <div class="dh-list-part dh-product-img">
                        <img :src="item.pro_thumb">
                      </div>
                      <div class="dh-list-part dh-product-name">
                        <span class="dh-elip">{{item2.model}}</span>
                      </div>
                      <div class="dh-list-part dh-product-todo">
                        <input type="checkbox" @click="setFilter(item.name, item.id, item2.id)" name="outAllFilter" :data-id="item.id" :data-modulid="item2.id">
                        <div class="dh-product-btngroup">
                          <span class="dh-plus">
                          <svg viewBox="0 0 1024 1024" width="20" height="20"><path fill="#fff" d="M959.623295 458.232422H565.724087V64.376193H458.275913v393.856229H64.376705v107.447151h393.899208v393.943211h107.448174V565.679573h393.899208z" p-id="4827"></path></svg>
                          </span>
                          <span class="dh-minus">
                            <svg viewBox="0 0 1024 1024" width="18" height="18"><path fill="#fff" d="M63.981708 447.77628l895.431809 0 0 127.881552-895.431809 0 0-127.881552Z" p-id="5596"></path></svg>
                          </span>
                        </div>
                      </div>
                    </li>
                  </template>
                  <li class="dh-no-data" v-if="isHasData">
                    No related products
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <footer-part></footer-part>
          <select-filter :class="{showFilterBox: isShowFilterBox}" v-on:listerTosubInfo="showFilterInfo"></select-filter>
          <compare-filter :class="{showCompareBox: isShowCompareBox}" :infoCompareObj="infoCompareObj" v-on:listerToCompare="showCompareInfo"></compare-filter>
        </div>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'
import selectFilter from '@/components/product/selectFilter'
import compareFilter from '@/components/product/compareFilter'

import { Flexbox, FlexboxItem } from 'vux'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            filterProduct: [],
            isShowFilterBox: false,
            isShowCompareBox: false,
            filternum: 0,
            ischeckedFilterNum: 0,
            infoCompareObj: "",
            showFilterFloat: false,
            filterKey: "",
            isHasData: false
        }
    },
    components: {
        headTop,
        footerPart,
        selectFilter,
        compareFilter,
        Flexbox,
        FlexboxItem
    },
    computed: {
      ...mapGetters([
        'productSelect'
      ]),
    },
    created () {
      console.log(this.$route.params.productId)
      this.getStatus()
    },
    mounted () {
      this.$nextTick( () => {
        window.onscroll = () => {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          if(scrollTop > 78){
            this.showFilterFloat = true
          }else{
            this.showFilterFloat = false
          }
        }
     })
    },
    methods: {
      filterNum () {//获取删选后产品个数
        let timer = setInterval( () => {
          if(this.productSelect){
            clearInterval(timer)
            this.filternum = 0
            for(let i in this.productSelect.data){
              for(let j in this.productSelect.data[i].product_models){
                this.filternum ++
              }
            }

            let itemNode = document.getElementById('dhFilterItem') //获取显示着的产品个数
            console.log(itemNode.getElementsByTagName('li').length)
            this.ischeckedFilterNum = itemNode.getElementsByClassName('dh-filter-list').length
            this.isHasData = this.ischeckedFilterNum == 0 
          }
        }, 10)
      },
      myfilter (res) {
        return res.toLowerCase().indexOf(this.filterKey.toLowerCase()) != -1
      },
      showFilterBox() {//显示删选框
        this.isShowFilterBox = !this.isShowFilterBox
      },
      showCompareBox() {//显示比较框
        
        if(this.getCompareObj()){
          this.infoCompareObj = this.getCompareObj()
          this.isShowCompareBox = !this.isShowCompareBox
        }else{
          alert('Not less than 0')
        }
        
      },
      getStatus () {//监听数据变化
        this.$store.dispatch('getProductSelect', {
          category_id: this.$route.params.productId
        })
      },
      setFilter (name, id, modulid) {//选择产品或者删除已选产品
        let selectedNum = this.filterProduct.length
        let canSelectNum = 4
        let checkbox = document.getElementsByName('outAllFilter');
        checkbox.forEach( (ele, index) => {
          if(ele.dataset.modulid == modulid){
            if(ele.checked){
              this.filterProduct.push({
                filterName: name,
                selectedId: id,
                moduleId: modulid
              })
              if(selectedNum >= canSelectNum){
                checkbox.forEach( (ele, index) => {
                  if(ele.dataset.modulid == this.filterProduct[0].moduleId){//判断否是存在显示的产品
                    checkbox[index].checked = false
                    return
                  }
                })
                this.filterProduct.splice(0,1)
                this.$refs.box[0].className = 'dh-filter-list dh-elip dh-del-product'
                setTimeout( () => {
                  this.$refs.box[0].className = 'dh-filter-list dh-elip dh-has-product'
                }, 1000)
              }
            }else{
              this.filterProduct.forEach( (ele, index) => {
                if(ele.moduleId == modulid){
                  this.filterProduct.splice(index, 1)
                }
              })
            }
            return
          }
        })
      },
      moveFilter (index) {//删除已选产品
        if(this.filterProduct.length > index){
          let indexId = this.filterProduct[index].moduleId;
          this.filterProduct.splice(index,1)
          let checkbox = document.getElementsByName('outAllFilter')
          checkbox.forEach( (ele, index) => {
            if(ele.dataset.modulid == indexId){
              ele.checked = false
              return
            }
          }) 
        }
        
      },
      getCompareObj () {//获取已选中框的对象
        let compareObj = new Object()
        this.filterProduct.forEach( (ele, index) => {
          compareObj[ele.moduleId] = ele.selectedId
        })
        console.log(compareObj)
        return compareObj
      },
      resetFilterProduct () {//清空已选择的产品
        this.filterProduct = []
        this.selectedId = []
        let checkbox = document.getElementsByName('outAllFilter');
        for(let i in checkbox){
          if (checkbox.hasOwnProperty(i)) {
            checkbox[i].checked = false
          }
            
        }
        console.log(this.filterProduct)
      },
      showFilterInfo (res){//获取子路由变化的数据
        this.isShowFilterBox = res.filterColse
        console.log(res.filterMainMenu)
        this.$store.dispatch('getProductSelect', {
          category_id: res.filterMainMenu,
          menu_id: res.filterSecondMenu,
          search: res.filterSearchbox
        })
        this.resetFilterProduct()
        //清空选择框
      },
      showCompareInfo (res){//获取子路由变化的数据
        this.isShowCompareBox = res.compareColse
      }
    },
    watch: {
      '$route' (to, from) {//监听路由变化
        this.getStatus()
      },
      filterKey: function(val, oldval){
        this.filterNum() //获取产品总数量
      },
      productSelect: function () {
        this.filterNum() //获取产品总数量
        this.filterKey = ''
      }
    }
}

</script>

<style lang="less">
    @import '../../assets/styles/common';
    .dh-filter-wrapper{
      width: 100%;
      margin: 16px auto 5px;
      padding-top: 12px;
      border-top: solid 2px @dh-bg-color;
      background-color: #fff;
      .trandtion-ease();
      top: 0;
    }
    .dh-filter-float{
      position: fixed;
      top: 46px;
      left: 0;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
    .dh-filter-top{
        display: table;
        width: 100%;
        @filter-height: 28px;
        >div{
          display: table-cell;
          height: @filter-height;

          .dh-filter-btn{
            height: 28px;
            padding: 0 10px;
            border-radius: 5px;
            border: none;
            background-color: #287ec8;
            color: #fff;
          }
          span{
            line-height: @filter-height;
            font-size: 15px;
            margin-left: 5px;
          }
        }
       .dh-rightpart{
          text-align: right;
          width: 42%;
          .dh-compare-btn{
            height: 28px;
            padding: 0 10px;
            border-radius: 5px;
            border: solid 1px #ee4503;
            background-color: #fff;
          }
        }
      }
    .dh-filter-content{
      margin-top: 8px;
      .vux-flexbox-item{
        &:nth-child(2n-1){
          .dh-filter-list{
            margin-right: 5px;
          }
        }
        &:nth-child(2n){
          .dh-filter-list{
            margin-left: 5px;
          }
        }
      }
      .dh-filter-list{
        border: dashed 1px @dh-bg-color;
        height: 30px;
        line-height: 30px;
        margin-bottom: 8px;
        text-align: center;
        color: #606060;
        font-size: 12px;
        padding: 0 8px;
        .trandtion-ease();
        &.dh-has-product{
          border-style: solid;
          background-color: @dh-bg-color;
        }
        &.dh-del-product{
          border-style: solid;
          background-color: @dh-bg-color;
          animation: delproduct 1s;
        }
      }
    }
    @keyframes delproduct
    {
      from { 
        background-color: #ee4503;
        border-color: #ee4503;
        color: #fff;
      }
      to { 
        background-color: @dh-bg-color;
        border-color: @dh-bg-color;
        color: #606060;
      }
    }
    .dh-filter-search{
      padding: 6px 10px;
      background-color: @dh-bg-color * .94;
      input{
        width: 100%;
        padding: 7px 10px;
        border-radius: 3px;
        border: solid 1px @dh-bg-color * .9;
        .trandtion-ease();
        &:focus{
          border: solid 1px #287ec8;
        }
      }
    }
    .dh-filter-productlist{
      min-height: 276px;
      margin-bottom: 15px;
      .dh-filter-title{
        line-height: 40px;
        margin-bottom: 2px;
        margin-left: 16px;
        font-weight: bold;
        color: @dh-font-color;
        font-size: 18px;
      }
      .dh-filter-list{
        display: table;
        width: 100%;
        table-layout: fixed;
        @list-height: 46px;
        .dh-list-part{
          display: table-cell;
          height: @list-height;
          vertical-align: middle;
        }
        .dh-product-img{
          width: 16%;
          text-align: center;
          img{
            display: block;
            max-height: 100%;
            max-width: 90%;
            margin: 0 auto;
          }
        }
        .dh-product-name{
          background-color: @dh-bg-color;
          span{
            display: block;
            font-size: 15px;
            color: #606060;
            padding: 0 8px;
          }
        }
        .dh-product-todo{
          width: @list-height;
          position: relative;
          overflow: hidden;
          input{
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
          input[type="checkbox"]:checked + .dh-product-btngroup{
            margin-left: -100%;
            background-color: #606060;
          }
          .dh-product-btngroup{
            width: 200%;
            height: 100%;
            background-color: #ee4503;
            .trandtion-ease();
            span{
              width: 50%;
              height: @list-height;
              line-height: @list-height;
              text-align: center;
              color: #fff;
              display: block;
              float: left;
              font-size: 22px;
            }
          }
        }
      }
    }
</style>
