<template>
  	<div>
      <transition name="router-fade" mode="out-in">
      <div>
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-main-wrapper">
            <div class="dh-sub-title">
              <h3>Key Technology</h3>
            </div>
            <div class="dh-keytechnology dh-container" v-html="keyTechnology.data.solution.content31"></div>
          </section>
          <footer-part></footer-part>
        </div>
      </div>
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
          bankId: '',
        }
    },
    components: {
        headTop,
        footerPart,
    },
    computed: {
      ...mapGetters([
        'keyTechnology'
      ])
    },
    created () {
      this.getStatus()
    },
    methods: {
      getStatus () {
        this.bankId = this.$route.params.bankId
        this.$store.dispatch('getKeyTechnology', this.$route.params.keyId)
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
    .dh-keytechnology{
      margin-top: 16px;
      img{
        max-width: 100%;
        margin-left: 0!important;
      }
      td{
        width: auto;
      }
    }
    .keytech-title{
      display: inline-block;
      font-size: 15px;
      padding: 5px 24px 5px 16px;
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
      background-color: #0e5fae;
      color: #fff;
    }
    .sub-keytech-title{
      color: #606060;
      font-weight: bold;
      font-size: 14px;
      margin-top: 5px;
    }
    .keytechP{
      font-size: 14px;
      margin-top: 12px;
      color: #606060;
    }
    .systemBox{
      img{
        margin-top: 5px;
      }
    }
    .sub-keytech-con{
      font-size: 14px;
      color: #606060;
    }
    .sub-keytech-img{
      img{
        margin-top: 8px;
      }
    }
    .section{
      margin-bottom: 18px;
    }
    .keytech-sub-title{
      font-size: 14px;
    }
    table.smart-table{
      table-layout: fixed;
      word-break: break-all;
      width: 100%;
      margin: 10px 0 20px;
      th{
        width: auto;
      }
      td,th{
        padding: 6px 12px;
      }
    }
    .data-safety{
      margin-top: 16px!important;
      td{
        border-top: dashed 1px #d4d5d6;
        padding-top: 10px;
        .systemBox{
          margin-left: 6px;
          margin-bottom: 10px;
        }
        .keytechP{
          margin-top: 2px;
        }
      }
      img{
        max-width: 100px;
      }
    }
    .tabletop{
      margin-top: 5px;
      margin-bottom: 12px;
      td{
        width: auto;
        .systemBox{
          margin-left: 6px;
          margin-bottom: 10px;
        }
        .keytechP{
          margin-top: 2px;
        }
      }
    }

</style>
