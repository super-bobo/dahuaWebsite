<template>
<div>
  <section class="dh-footer dh-container">
    <article class="dh-footer-part">
      <h2 class="dh-footer-title">Newsletter</h2> 
      <P class="dh-footer-text">Enter your email address to receive the latest news & products information</P>
      <div class="dh-footer-form">
        <div class="part1">
          <input type="text" name="" v-model="emailAddress" @change="changeEmial()">
        </div>
        <div class="part2">
          <router-link tag="a" :to="'/newslettersub'">Submit</router-link> 
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
</div>
</template>

<script>
import { Toast } from 'vux'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      emailAddress: "",
    }
  },
  components: {
    Toast
  },
  computed: {
    ...mapGetters([
      'letterEmail'
    ])
  },
  methods: {
    changeEmial() { 
      this.$store.commit('change', this.emailAddress)
      console.log(this.letterEmail)
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
    vertical-align: top;
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
    a{
      display: block;
      width: 100%;
      height: @dh-form-height;
      line-height: @dh-form-height;
      text-align: center;
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