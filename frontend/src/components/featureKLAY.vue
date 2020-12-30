<template>
  <div id="featureWrap">
    <header-con></header-con>
    <!-- Feature Tab -->
    <feature-tab></feature-tab>

    <div class="subTit txt_center">
      <div class="inner ss2 table">
        <div class="cell title">
          <h1 class="title_sub s48">{{lang.klay_f_main_title}}</h1>
          <p class="title_desc s20">{{lang.klay_f_main_desc}}</p>
        </div>
        <div class="cell img">
          <p><img :src="lang.klay_f_main_img"/></p>
        </div>
      </div>
    </div>
    <!-- Features -->
    <div class="f_about">
      <ul class="inner sm2">
        <li>
          <div>
            <p class="img"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-send.png"/></p>
            <div class="tit title_sub s24 table">
              <div class="cell">
                {{lang.eth_f_title_01_1}}<br/>
                {{lang.eth_f_title_01_2}}
              </div>
            </div>
            <p class="color_desc">
              {{lang.f_about_desc_01_1}}<br/>
              {{lang.f_about_desc_01_2}}
            </p>
          </div>
        </li>
        <li>
          <div>
            <p class="img"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-market.png"/>
            </p>
            <div class="tit title_sub s24 table">
              <div class="cell">
                {{lang.klay_f_title_01}}
              </div>
            </div>
            <p class="color_desc">
              {{lang.klay_f_about_desc_01}}
            </p>
          </div>
        </li>
        <li>
          <div>
            <p class="img"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-dappstation.png"/></p>
            <div class="tit title_sub s24 table">
              <div class="cell">
                {{lang.klay_f_title_02}}
              </div>
            </div>
            <p class="color_desc">
              {{lang.klay_f_desc_02}}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- ##################### KLAY ##################### -->
    <div class="featureBox">
      <div class="outBox">
        <div class="inBox table">
          <div class="img cell pc">
            <p class="img"><img :src="lang.klay_f_img_01"/></p>
          </div>
          <div class="title cell txt_right">
            <div class="in">
              <h2 class="title_sub s48">
                  {{lang.f_about_title_01_1}} <br/>
                  {{lang.f_about_title_01_2}}
              </h2>
              <p class="desc">
                {{lang.f_about_desc_01_1}}<br/>
                {{lang.f_about_desc_01_2}}
              </p>
            </div>
          </div>
          <div class="img mobile">
            <img :src="lang.klay_f_img_01"/>
          </div>
        </div>
      </div>
      <div class="outBox">
        <div class="inBox table">
          <div class="title cell">
            <div class="in">
              <h2 class="title_sub s48">
                {{lang.f_about_title_02_1}} <br/>
                {{lang.f_about_title_02_2}}
              </h2>
              <p class="desc">
                {{lang.f_about_desc_02_1}}<br/>
                {{lang.f_about_desc_02_2}}
              </p>
            </div>
          </div>
          <div class="img cell">
            <p class="img"><img :src="lang.f_img_security"/></p>
          </div>
        </div>
      </div>
      <div class="outBox">
        <div class="inBox table">
          <div class="img cell pc">
            <p class="img"><img :src="lang.klay_f_img_02"/></p>
          </div>
          <div class="title cell txt_right">
            <div class="in">
              <h2 class="title_sub s48">
                {{lang.klay_f_title_01}}
              </h2>
              <p class="desc">
                {{lang.klay_f_desc_01}}
              </p>
            </div>
          </div>
          <div class="img mobile">
            <img :src="lang.klay_f_img_02"/>
          </div>
        </div>
      </div>
      <div class="outBox">
        <div class="inBox table">
          <div class="title cell">
            <div class="in">
              <h2 class="title_sub s48">
                {{lang.klay_f_title_02}}
              </h2>
              <p class="desc">
                {{lang.klay_f_desc_02}}
              </p>
            </div>
          </div>
          <div class="img cell">
            <p class="img"><img :src="lang.klay_f_img_03"/></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Download -->
    <div class="downWrap txt_center noImg">
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
                    @click=""
                  >
                    <v-list-tile-title>APK Download</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-con></footer-con>

  </div>
</template>

<script>

  import headerCon from './headerCon'
  import footerCon from './footerCon'
  import featureNav from './featureNav'
  import { langPr, langTitle, langRes, langEvent } from '../../translations/langEvent'
  import { langText } from '../../translations/language'

  export default {
    name: "featureKLAY",
    components: {
      'header-con': headerCon,
      'footer-con': footerCon,
      'feature-tab': featureNav
    },
    data(){
      return{
        lang: langRes,
      }
    },
    watch: {
      '$route': 'fetchData',
    },
    mounted(){
      this.fetchData();
    },
    created(){
      // console.log(this.$route.params.token);
      this.$EventBus.$on('lang_event', (tit)=>{
        if( tit === '한글' ){
          this.lang = [];
          this.lang = langText['ko'];
        }
        else if( tit === '中文' ){
          this.lang = [];
          this.lang = langText['zh'];
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
