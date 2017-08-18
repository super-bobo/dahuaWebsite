<template>
  <div class="dh-filter-modulebox">
    <section class="dh-filterproduct-wrapper">
      <div class="dh-sub-title">
        <h3>Product Select</h3>
      </div>
      <div class="dh-container-fluid">
        <section class="dh-filter-wrapper dh-container">
          <div class="dh-filter-top">
            <div class="dh-leftpart">
              <button class="dh-filter-btn" @click="sendInfoToParent">Back</button>
            </div>
            <div class="dh-rightpart">
              <button class="dh-compare-btn dh-reset-btn" @click="resetFilterCheckbox">Reset</button>
            </div>
          </div>
        </section>
        <section class="dh-filter-selectall">
          <h3 class="dh-select-title dh-container">Product Category</h3>
          <div class="dh-select-box dh-container">
            <select class="dh-select-option" v-model="mainMenuSelected" @change="changeMainSelected(mainMenuSelected)">  
              <option v-for="(item, index) in productSelectFilter.data" v-bind:value="item.id" v-if="productSelectFilter">  
                {{item.name}}
              </option>  
            </select> 
            <select class="dh-select-option" v-model="secondMenuSelected" @change="changeSecondSelected(secondMenuSelected)">  
              <option v-for="(item, index) in productToFilter.data" v-bind:value="item.id" v-if="productToFilter">  
                {{item.name}}
              </option>  
            </select>
          </div>
        </section>
        <section class="dh-filter-checkall" id="dhFilterCheckall">
          <h3 class="dh-select-title dh-container">Fundamental Options</h3>
          <div class="dh-checkbox" v-for="(item, index) in productToFilterMenu.data" v-if="productToFilterMenu">
            <h4 class="dh-select-subtitle dh-container" :data-id="item.id">{{item.name}}</h4>
            <div class="dh-single-check">
                <flexbox :gutter="0" wrap="wrap">
                  <flexbox-item class="dh-single-checklist dh-elip" :span="1/2" v-for="(item, index) in item.children" :key="index">
                    <label>
                      <input type="checkbox" name="filterCheckboxName" :data-id="item.id" @click="getFilterCheckbox(item.id)">
                      <span class="dh-check-btn">
                        <svg viewBox="0 0 1024 1024" width="84%" height="84%"><path d="M401.4 641.1L199.2 438.9c-31.8-31.8-80.8-31.2-111.4-0.7-30.8 30.8-30.3 80.4 0.7 111.4l256.9 256.8 0.3 0.3 0.3 0.3c15.4 15.4 35.4 23 55.3 22.9 20.4 0 40.2-7.8 55.3-22.9l0.1-0.1 0.1-0.1L936 327.7c30.2-30.2 30.8-80.3 0.2-110.8-30.8-30.8-80.2-30.5-110.9 0.2l-423.9 424z" p-id="4655"></path></svg>
                      </span>
                      {{item.name}}
                    </label>
                  </flexbox-item>
                </flexbox>
            </div>
          </div>
        </section>
      </div>
    </section>

  </div>
</template>

<script>

import { Flexbox, FlexboxItem } from 'vux'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            mainMenuSelected: 1,
            mainSmall: 0,
            secondMenuSelected: '',
            searchId: 10931,
            filterCheckbox: []
        }
    },
    components: {
        Flexbox,
        FlexboxItem
    },
    computed: {
      ...mapGetters([
        'productSelectFilter',
        'productToFilter',
        'productToFilterMenu'
      ])
    },
    created () {
      console.log(this.$route.params.productId)
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getProductSelectFilter')//渲染一级目录
        this.$store.dispatch('getProductToFilter', {//渲染二级目录
          main_id: this.mainMenuSelected,
          small: this.mainSmall
        })
        this.$store.dispatch('getProductToFilterMenu', {//渲染选择框目录
          search_id: this.searchId
        })
      },
      changeMainSelected (value) {
        this.resetFilterCheckbox()
        for(let i in this.productSelectFilter.data){
          if(this.productSelectFilter.data[i].id == value){
            this.mainSmall = this.productSelectFilter.data[i].small
            this.$store.dispatch('getProductToFilter', {//重新渲染二级目录
              main_id: this.mainMenuSelected,
              small: this.mainSmall
            })
            this.secondMenuSelected = this.productToFilter.data[0].id
            console.log(this.secondMenuSelected)
            
            console.log(this.secondMenuSelected)

            if(this.productSelectFilter.data[i].small && this.productSelectFilter.data[i].small == 0){
              this.searchId = this.productSelectFilter.data[i].search_id
              this.$store.dispatch('getProductToFilterMenu', {
                search_id: this.searchId
              })
              console.log(this.searchId);
            }else{
              this.$store.dispatch('getProductToFilterMenu', {
                search_id: '-1'
              })
            }
            return 
          }
        }
      },
      changeSecondSelected (value) {
        this.resetFilterCheckbox()
        if(this.mainSmall == 1){
          for(let i in this.productToFilter.data){
            if(this.productToFilter.data[i].id == value){
              this.searchId = this.productToFilter.data[i].search_id
              this.$store.dispatch('getProductToFilterMenu', {
                search_id: this.searchId
              })
              return 
            }
          }
        }
      },
      getFilterCheckbox (checkboxId){
        let checkbox = document.getElementsByName('filterCheckboxName');
        for(let i in checkbox){
          if(checkbox[i].dataset.id == checkboxId){
            if(checkbox[i].checked){
              this.filterCheckbox.push(checkboxId)
            }else{
              for(let j in this.filterCheckbox) {
                this.filterCheckbox.splice(j,1) 
                return
              }
            }
            return
          }
        }
      },
      sendInfoToParent () {
        this.$emit('listerTosubInfo', {
          filterColse: false,
          filterMainMenu: this.mainMenuSelected,
          filterSecondMenu: this.secondMenuSelected,
          filterSearchbox: this.filterCheckbox
        })
      },
      resetFilterCheckbox () {
        let checkbox = document.getElementsByName('filterCheckboxName');
        this.filterCheckbox = []
        for(let i=0; i < checkbox.length; i++){
          checkbox[i].checked = false
        }
        console.log(this.filterCheckbox)
        return 
      }
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
    .dh-filter-modulebox{
      position: fixed;
      top: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      z-index: 2;
      .trandtion-ease();
      &:before{
        content: "";
        display: none;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        position: fixed;
        left: 0;
        top : 62px;
        z-index: -1;
        transition: background ease-in-out .2s;
      }
    }
    .showFilterBox{
      top: 62px;
      &:before{
        display: block;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .dh-filterproduct-wrapper{
      background-color: #fff;
      height: 100%;
      overflow: auto;
    }
    .dh-reset-btn{
      border-color: #287ec8!important;
    }
    .dh-filter-selectall{
      margin-top: 15px;
    }
    .dh-select-title{
      height: 32px;
      line-height: 32px;
      font-size: 15px;
      font-weight: bold;
      color: #fff;
      background-color: #0e5fae;
    }
    .dh-select-box{
      background-color: @dh-bg-color;
      padding-bottom: 10px;
      .dh-select-option{
        width: 100%;
        padding: 0 8px;
        height: 26px;
        background-color: #fff;
        margin-top: 10px;
      }
    }
    .dh-filter-checkall{
      padding-bottom: 20px;
    }
    .dh-select-subtitle{
      font-size: 15px;
      height: 36px;
      line-height: 36px;
      font-weight: bold;
      background-color: #f6f6f6;
      color: #606060;
      border-bottom: solid 1px #aaa;
    }
    .dh-single-check{
      position: relative;
      background-color: @dh-bg-color;
      &:after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #aaa;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    .dh-single-checklist{
      border-bottom: solid 1px #aaa;
      label{
        display: inline-block;
        padding: 10px 9.6%;
        font-size: 15px;
        position: relative;
        input{
          opacity: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .dh-check-btn{
          display: inline-block;
          background-color: #fff;
          border: solid 1px #606060;
          border-radius: 4px;
          height: 20px;
          line-height: 20px;
          vertical-align: bottom;
          width: 20px;
          text-align: center;
          margin-right: 6px;
          .trandtion-ease();
          path{
            transform: scale(0, 0);
            transform-origin: center center;
            fill: #fff;
            .trandtion-ease();
          }
        }
        input[type="checkbox"]:checked + .dh-check-btn{
          background-color: #287ec8;
          border-color: #287ec8;
          path{
            transform:scale(1, 1); 
          }
        }
      }
    }
</style>
