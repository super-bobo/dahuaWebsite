<template>
  	<div>
        <head-top></head-top>
        <div class="dh-container-scroller">
          <section class="dh-main-wrapper">
            <div class="dh-sub-title">
              <h3>Newsletter Subscription</h3>
            </div>
            <section class="newsletter-top dh-container">
              <ul>
                <li class="newsletter-label">
                  <label>Please fill in your email address <sup>*</sup></label>
                  <input type="text" placeholder="Email address" v-model="formDate.email" ref="email">
                </li>
              </ul>
            </section>
            <section class="newsletter-content dh-container">
              <p class="newsletter-text">For providing better services, we need your personal information. Dahua promises that none of your details will be disclosed.</p>
              <ul>
                <li class="newsletter-label">
                  <label>Given Name <sup>*</sup></label>
                  <input type="text" placeholder="Given Name" v-model="formDate.givenName" ref="givenName">
                </li>
                <li class="newsletter-label">
                  <label>Last Name <sup>*</sup></label>
                  <input type="text" placeholder="Last Name" v-model="formDate.lastName" ref="lastName">
                </li>
                <li class="newsletter-label">
                  <label>Company <sup>*</sup></label>
                  <input type="text" placeholder="Company" v-model="formDate.company" ref="company">
                </li>
                <li class="newsletter-label">
                  <label>Region <sup>*</sup></label>
                  <select v-model="formDate.region" ref="region">
                    <option selected="selected" value="-1">Place select</option>
                    <option v-for="option in region.data" :value="option.id">{{option.name}}</option>
                  </select>
                </li>
                <li class="newsletter-label">
                  <label>Job title</label>
                  <input type="text" placeholder="Job title" name="jobTitle" v-model="formDate.jobTitle">
                </li>
                <li class="newsletter-label">
                  <label>Tel No.</label>
                  <input type="text" placeholder="Tel No." v-model="formDate.telNo">
                </li>
                <li class="newsletter-label">
                  <label>Verification code <sup>*</sup></label>
                  <div class="code-box">
                    <input type="text" placeholder="Verification code" class="code-input" v-model="localCode" ref="localCode">
                    <div class="code-img" @click="changeCode()"><img :src="verificationCode.data.imageUrl" v-if="verificationCode"></div>
                  </div>
                </li>
              </ul>
              <div class="newsletter-info">
                <p>You will subscribe the below information.</p>
                <ul>
                  <li>
                    <svg viewBox="0 0 1024 1024"><path d="M531.808 728.672h-44.016l113.616-468.352h39.936z"></path><path d="M508.8 728.672h-44.752L402.24 479.424l42.784-0.128z"></path><path d="M344.048 479.296h99.008v35.12h-99.008z"></path></svg>New Products
                  </li>
                  <li>
                    <svg viewBox="0 0 1024 1024"><path d="M531.808 728.672h-44.016l113.616-468.352h39.936z"></path><path d="M508.8 728.672h-44.752L402.24 479.424l42.784-0.128z"></path><path d="M344.048 479.296h99.008v35.12h-99.008z"></path></svg>News & Notice
                  </li>
                  <li>
                    <svg viewBox="0 0 1024 1024"><path d="M531.808 728.672h-44.016l113.616-468.352h39.936z"></path><path d="M508.8 728.672h-44.752L402.24 479.424l42.784-0.128z"></path><path d="M344.048 479.296h99.008v35.12h-99.008z"></path></svg>Success Stories
                  </li>
                  <li>
                    <svg viewBox="0 0 1024 1024"><path d="M531.808 728.672h-44.016l113.616-468.352h39.936z"></path><path d="M508.8 728.672h-44.752L402.24 479.424l42.784-0.128z"></path><path d="M344.048 479.296h99.008v35.12h-99.008z"></path></svg>Expo
                  </li>
                </ul>
              </div>
              <div class="newsletter-submit">
                <button @click="subscribe">Subscribe</button>
              </div>
            </section>
          </section>
          <footer-part></footer-part>
        </div>
        <alert v-model="showAlert" :title="alertTitle" :content="alertContent" :button-text="alertBtnText" @on-hide="inputFocus"></alert>
        <alert v-model="linkToHome" :title="alertTitle" :content="alertContent" :button-text="alertBtnText" @on-hide="loadTohome"></alert>
    </div>
</template>

<script>
import headTop from '@/components/header/'
import footerPart from '@/components/footer/'

import { mapGetters } from 'vuex'

import { Alert } from 'vux'

export default {
    data(){
        return{
          formDate: {
            email: '',
            givenName: '',
            lastName: '',
            company: '',
            region: '-1',
            jobTitle: '',
            telNo: '',
          },
          localCode: '',
          emptyText: 'field is required',
          errorText: 'Worry email',
          focusNode: '',
          alertTitle: 'Tips',
          alertContent: '',
          alertBtnText: 'OK',
          showAlert: false,
          linkToHome: false
        }
    },
    components: {
        headTop,
        footerPart,
        Alert
    },
    computed: {
      ...mapGetters([
        'region',
        'letterEmail',
        'verificationCode',
        'openAlert',
        'successText'
      ])
    },
    created() {
      this.getStatus()
      this.changeCode()
    },
    mounted () {
      this.$nextTick( () => {
        console.log(this.letterEmail)
        this.formDate.email = this.letterEmail
     })
    },
    methods: {
      getStatus () {
        this.$store.dispatch('getRegion')
      },
      changeCode (){
        this.$store.dispatch('getVerificationCode')
      },
      subscribe() {
        let emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        if(this.formDate.email == ""){//邮件为空
          this.focusNode = 'email'
          this.alertContent = `The email address ${this.emptyText}`
          this.showAlert = true
          return false
        }else if(!emailReg.test(this.formDate.email)){//邮件格式不正确
          this.focusNode = 'email'
          this.alertContent = 'Worry email'
          this.showAlert = true
          return false
        }
        if(this.formDate.givenName == ""){
          this.focusNode = 'givenName'
          this.alertContent = `The Given Name ${this.emptyText}`
          this.showAlert = true
          return false
        }
        if(this.formDate.lastName == ""){
          this.focusNode = 'lastName'
          this.alertContent = `The Last Name ${this.emptyText}`
          this.showAlert = true
          return false
        }
        if(this.formDate.company == ""){
          this.focusNode = 'company'
          this.alertContent = `The Company ${this.emptyText}`
          this.showAlert = true
          return false
        }
        if(this.formDate.region == "-1"){
          this.focusNode = 'region'
          this.alertContent = `The Region ${this.emptyText}`
          this.showAlert = true
          return false
        }
        console.log(this.verificationCode.data.word)
        if(this.localCode == ""){
          this.focusNode = 'localCode'
          this.alertContent = `The Verification code ${this.emptyText}`
          this.showAlert = true
          return false
        }else if(this.localCode.toUpperCase() != this.verificationCode.data.word.toUpperCase()){
          this.focusNode = 'localCode'
          this.alertContent = 'Worry verification code'
          this.showAlert = true
          return false
        }
        this.$store.dispatch('getSendEmail', this.formDate)
      },
      inputFocus(){
        this.$refs[this.focusNode].focus()
      },
      loadTohome(){
        window.location.href = '/home'
      }
    },
    watch: {
      openAlert: function (newValue, oldValue) {
        if(newValue){
          this.alertContent = this.successText
          this.linkToHome = true
        }
      }
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/styles/common';
    .newsletter-top{
      background-color: #e0eefb;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .newsletter-label{
      label{
        display: block;
        font-size: 16px;
        color: #333;
        margin-bottom: 5px;
        sup{
          color: #ff0000;
          font-weight: bold;
        }
      }
      input[type="text"], select{
        width: 100%;
        height: 32px;
        font-size: 15px;
        padding: 0 12px;
        border-radius: 3px;
        border: solid 1px #999;
        background-color: transparent;
        .trandtion-ease();
        &:focus{
          background-color: rgba(255, 255, 255, 0.5);
          outline: none;
          border-color: #0e5fae;
        }
      }
      .code-box{
        overflow: hidden;
      }
      input.code-input{
        float: left;
        width: 80%;
      }
      .code-img{
        float: right;
        width: 18%;
        height: 32px;
        border-radius: 3px;
        border: solid 1px #999;
        img{
          width: 100%;
          height: 100%;
          border-radius: 3px;
        }
      }
    }
    .newsletter-content{
      margin-bottom: 40px;
      .newsletter-text{
        font-size: 15px;
        color: #666;
        margin: 20px 0;
      }
      .newsletter-label{
        margin-bottom: 10px;
      }
    }
    .newsletter-info{
      p{
        padding: 16px 0 12px;
        font-size: 15px;
        color: #666;
      }
      svg{
        width: 20px;
        height: 20px;
        vertical-align: middle;
        path{
          fill: #666;
        }
      }
      li{
        font-size: 15px;
        color: #999;
      }
    }
    .newsletter-submit{
      margin-top: 20px;
      button{
        width: 100%;
        height: 35px;
        line-height: 35px;
        background-color: #0e5fae;
        border-radius: 3px;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
        &:hover{
          opacity: .8;
        }
      }
    }
</style>
