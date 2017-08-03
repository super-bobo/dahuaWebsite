<template>
<div>
  <section class="dh-footer dh-container">
    <article class="dh-footer-part">
      <h2 class="dh-footer-title">Newsletter</h2> 
      <P class="dh-footer-text">Enter your email address to receive the latest news & products information</P>
      <div class="dh-footer-form">
        <div class="part1">
          <input type="text" name="" v-model="emailAddress">
        </div>
        <div class="part2">
          <button @click="postAddress">Submit</button>
        </div>
      </div>
    </article>
    <article class="dh-footer-part">
      <h2 class="dh-footer-title">Follow Us</h2> 
      <div class="dh-footer-link">
        <a href="https://www.facebook.com/pages/Dahua-Technology-Co-Ltd/440623362714293?fref=ts">
          <span class="dh-facebook"></span>
        </a>
        <a href="https://www.youtube.com/user/DahuaTechnology">
          <span class="dh-youtobe"></span>
        </a>
        <a href="http://www.linkedin.com/company/dahua-technology?trk=biz-companies-cym">
          <span class="dh-linkedin"></span>
        </a>
        <a href="https://plus.google.com/109119030969053311967">
          <span class="dh-google"></span>
        </a>
        <a href="http://www.dahuasecurity.com/feed.php">
          <span class="dh-rss"></span>
        </a>
      </div>
    </article>
    <article class="dh-footer-copyright">
      <p>© 2010-2017 Dahua Technology Co., Ltd</p>
    </article>
  </section>
  <toast v-model="showModule" type="text" :text="showText"></toast>
</div>
</template>

<script>
import { Toast } from 'vux'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      emailAddress: "",
      showModule: false,
      showText: '',
      emptyText: 'Please input your email',
      errorText: 'Worry email',
      successText: 'Subscription success'
    }
  },
  components: {
    Toast
  },
  computed: {
    ...mapGetters([
      'sendEmail'
    ])
  },
  methods: {
    postAddress: function(){
      let emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
      if(this.emailAddress == ""){//邮件为空
          this.showText = this.emptyText
          this.showModule = true
      }else if(!emailReg.test(this.emailAddress)){//邮件格式不正确
        this.showText = this.errorText
        this.showModule = true
      }else{//邮件格式正确，传数据到后台
        this.$store.dispatch('getSendEmail', {
          email: this.emailAddress
        })
        this.showText = this.successText
        this.showModule = true
      }
    }
  },
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/common';
@dh-footer-bg: #696d74;
@dh-form-height: 35px;
.dh-footer{
  background-color: @dh-footer-bg;
  padding-top: 10px;
  *{
    color: #fff;
  }
}
.dh-footer-title{
  font-size: 16px;
  line-height: 42px;
  border-bottom: 1px solid #aaa;
  font-weight: 500;
}
.dh-footer-text{
  font-size: 15px;
  margin: 10px 0;
}
.dh-footer-form{
  width: 100%;
  margin: 10px 0;
  display: table;
  .part1, .part2{
    display: table-cell;
    font-size: 16px;
  }
  .part1{
    width: 70%;
    input{
      width: 96%;
      height: @dh-form-height;
      border: solid 1px #eaecee;
      border-radius: 0;
      outline: none;
      background-color: transparent;
      text-indent: 8px;
      font-size: 16px;
      .trandtion-ease();
      &:focus{
        border-color: @dh-theme-color * 1.2;
      }
    }
  }
  .part2{
    button{
      width: 100%;
      height: @dh-form-height;
      border: none;
      background-color: #eaecee;
      color: @dh-footer-bg;
      font-size: 16px;
    }
  }
}
.dh-footer-link{
  padding: 12px 0 8px;
  a{
    margin-right: 5%;
    display: inline-block;
    span{
      display: block;
      width: 36px;
      height: 36px;
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .dh-facebook{
      background-image: url(../../assets/images/dh-footer-facebook.png);
    }
    .dh-youtobe{
      background-image: url(../../assets/images/dh-footer-youtobe.png);
    }
    .dh-linkedin{
      background-image: url(../../assets/images/dh-footer-linkedin.png);
    }
    .dh-google{
     background-image: url(../../assets/images/dh-footer-google.png);
    }
    .dh-rss{
      background-image: url(../../assets/images/dh-footer-rss.png);
    }
  }
}
.dh-footer-copyright{
  padding: 12px 0;
  text-align: center;
  font-size: 12px;
}
</style>