<template>
  <div id="main">
    <header-con></header-con>
    <div>
      <agile>
        <!-- Slider -->
        <div class="slide">
          <div class="asyncImage sliderCon slider01" data-src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/bg-shape.png">
            <div class="inner ss txt_center">
              <h2 class="title_sub s28 color_p">{{ lang.wallet_title_sub }}</h2>
              <h1 class="title_l">{{ lang.wallet_title }}</h1>
              <p class="title_desc s20">
                {{ lang.wallet_desc_01 }}<br/>
                {{ lang.wallet_desc_02 }}<br/>
              </p>
              <div class="downBox">
                <a href="https://apple.co/2NZZrUj" class="btn grd1" target="_blank">
                  <span class="icon"><img src='https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/apple.png'/></span>
                  App Store
                  <span class="arw"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/arrow-right.png"/></span>
                </a>
                <a href="http://bit.ly/2CySJnr" class="btn grd2" target="_blank">
                  <span class="icon"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/android.png"/></span>
                  Google play
                  <span class="arw"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/arrow-right.png"/></span>
                </a>
                <div class="qrBox">
                  <v-menu bottom left>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        class="btn qr"
                        v-on="on"
                      >
                      </v-btn>
                    </template>
                    <v-list>
                      <p class="img"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/qr.png"/></p>
                      <v-list-tile
                        href="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/NovaWallet-release-apk.apk"
                        target="_blank"
                      >
                        <v-list-tile-title>APK Download</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </div>
              </div>
              <p class="img">
                <img :src="lang.wallet_title_img"/>
              </p>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="sliderCon slider02">
            <div class="inner ss txt_center">
              <h2 class="title_sub s28 color_klay">{{ lang.klaytn_main_title }}</h2>
              <h1 class="title_l">{{ lang.klaytn_main }}</h1>
              <p class="title_desc s20">
                {{ lang.klaytn_main_desc_01 }}<br/>
                {{ lang.klaytn_main_desc_02 }}
              </p>
              <div class="downBox">
                <a href="https://apple.co/2NZZrUj" class="btn grd4" target="_blank">
                  {{ lang.klaytn_main_button }}
                </a>
              </div>
              <p class="img">
                <img :src="lang.klaytn_main_img"/>
              </p>
            </div>
          </div>
        </div>
        <!-- // Slider -->
      </agile>

    </div>
    <!-- ABOUT -->
    <div class="main_about bg_b">
      <ul class="inner sm2 txt_center">
        <li>
          <p class="img"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/icon-multiwallet.png"/></p>
          <h4 class="title s24">{{lang.wallet_about_title_01}}</h4>
          <p class="color_desc">
            {{lang.wallet_about_desc_01_1}}<br/>
            {{lang.wallet_about_desc_01_2}}
          </p>
        </li>
        <li>
          <p class="img"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/icon-send.png"/></p>
          <h4 class="title s24">{{lang.wallet_about_title_02}}</h4>
          <p class="color_desc">
            {{lang.wallet_about_desc_02_1}}<br/>
            {{lang.wallet_about_desc_02_2}}
          </p>
        </li>
        <li>
          <p class="img"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/icon-security.png"/></p>
          <h4 class="title s24">{{lang.wallet_about_title_03}}</h4>
          <p class="color_desc">
            {{lang.wallet_about_desc_03}}
          </p>
        </li>
      </ul>
      <p class="moreBtnWrap">
        <a href="javascript:void(0);" class="moreBtn" @click="href('/feature/eth')">{{lang.more_btn}}</a>
      </p>
    </div>
    <!-- DApp Station -->
    <div class="main_dapp">
      <div class="inner sm2 table">
        <div class="cell txt">
          <h2 class="title_sub s48">{{lang.main_dapp_title}}</h2>
          <p class="title_desc s16">
            {{lang.main_dapp_desc_01}}
          </p>
          <p class="moreBtnWrap">
            <a href="javascript:void(0);" class="moreBtn" @click="href('/dapp/ETH')">{{lang.more_btn}}</a>
          </p>
        </div>
        <div class="cell img">
          <img :src="lang.main_dapp_img"/>
        </div>
      </div>
    </div>
    <!-- Submit -->
    <div class="main_submit">
      <div class="inner sm2 table">
        <div class="cell txt">
          <h2 class="title_sub s48">{{lang.main_submit_title}}</h2>
          <p class="title_desc s16">
            {{lang.main_submit_desc_01}}<br/>
            {{lang.main_submit_desc_02}}
          </p>
          <p class="moreBtnWrap">
            <a href="javascript:void(0);" class="moreBtn" @click="href('/submit/dapp')">{{lang.main_submit_btn_01}}</a>
            <a href="javascript:void(0);" class="moreBtn" @click="href('/submit/token')">{{lang.main_submit_btn_02}}</a>
          </p>
        </div>
        <div class="cell img">
          <img :src="lang.main_submit_img"/>
        </div>
      </div>
    </div>
    <!-- Partners -->
    <div class="main_partner">
      <div class="inner sm2">
        <h1 class="title_sub s48">Partners</h1>
        <ul>
          <li v-for="item in partner">
            <a :href="item.link" target="_blank">
              <img :src="item.logo" :alt="item.partner"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Download -->
    <div class="downWrap" style="margin-top:150px;">
      <div class="inner sm2">
        <div class="txt">
          <h2 class="title_sub s40">{{lang.down_title}}</h2>
          <p class="desc">
            {{lang.down_desc}}
          </p>
          <div class="downBox">
            <a href="https://apple.co/2NZZrUj" class="btn" target="_blank">
              <span class="icon"><img src='https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/apple-dark.png'/></span>
              App Store
              <span class="arw"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/arrow-right-dark.png"/></span>
            </a>
            <a href="http://bit.ly/2CySJnr" class="btn" target="_blank">
              <span class="icon"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/android-color.png"/></span>
              Google play
              <span class="arw"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/arrow-right-dark.png"/></span>
            </a>
            <div class="qrBox">
              <v-menu bottom left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="btn qr"
                    v-on="on"
                  >
                  </v-btn>
                </template>
                <v-list>
                  <p class="img"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/qr.png"/></p>
                  <v-list-tile
                    href="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/NovaWallet-release-apk.apk"
                    target="_blank"
                  >
                    <v-list-tile-title>APK Download</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
        <div class="imgCon">
          <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/download-nova-img.png"/>
        </div>
      </div>
    </div>

    <footer-con></footer-con>
  </div>
</template>

<script>
  import headerCon from './headerCon'
  import footerCon from './footerCon'
  import { langPr, langTitle, langRes, langEvent } from '../../translations/langEvent'
  import { langText } from '../../translations/language'
  import { partner } from '../assets/partner'

  import VueAgile from 'vue-agile'


  export default {
    name: "index",
    components: {
      'header-con': headerCon,
      'footer-con': footerCon,
    },
    data(){
      return{
        lang: langRes,
        partner,
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    mounted(){
      'use strict';
      const objects = document.getElementsByClassName('asyncImage');
      Array.from(objects).map((item) => {
        const img = new Image();
        img.src = item.dataset.src;
        img.onload = () => {
          item.classList.remove('asyncImage');
          return item.nodeName === 'IMG' ?
            item.src = item.dataset.src :
            item.style.backgroundImage = `url(${item.dataset.src})`;
        };
      });
      this.fetchData();
    },
    created(){
      this.$EventBus.$on('lang_event', (tit)=>{
        if( tit === '한글' ){
          this.lang = [];
          this.lang = langText['ko'];
        }
        else {
          this.lang = [];
          this.lang = langText['en'];
        }
      });
    },
    methods:{
      fetchData(){
        langEvent();
        this.lang = langRes;
      },
      href(path){
        let name = path;
        let langParam = langPr;
        this.$router.push({ path:name, query:{ l:langParam } });
      },
    }
  }
</script>

<style scoped>
</style>
