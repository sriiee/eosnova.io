<template>
    <div id="c_footer">
      <footer id="footer" class="inner">
        <div class="info">
          <h1>
            <a href="http://wzdworks.com/" target="_blank">
              <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/logo-wizard-white.png"/>
            </a>
          </h1>
          <div class="rBox">

            <div class="langBox2" id="footerLan">
              <v-select
                :items= langList
                v-model="langTitle"
                return-object
                @change="$EventBus.$emit('lang_event',langTitle.title), langChange(langTitle.title)"
              >
                <template slot="selection" slot-scope="data">
                  <v-avatar>
                    <img :src="data.item.icon">
                  </v-avatar>
                  <div v-bind:class="{ on: langOn }">
                    {{ data.item.title }}
                  </div>
                </template>
                <template slot="item" slot-scope="data">
                  <v-list-tile-avatar>
                    <img :src="data.item.icon">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ data.item.title }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </template>
              </v-select>
            </div>
            <div class="copy">
              <span class="block">{{ lang.copyright_01 }}</span>
              <span>{{ lang.copyright_02 }}</span>
              <!--<a href="javascript:void(0)">{{ lang.terms }}</a>-->
            </div>
          </div>
        </div>
        <div class="sitemap">
          <ul>
            <li>
              <h4>NOVA Wallet</h4>
              <ul class="list">
                <li><a href="javascript:void(0)" @click="href('/')">HOME</a></li>
                <li><a href="https://novawallet.io/bp.json" target="_blank">bp.json</a></li>
                <li><a href="javascript:void(0)" @click="href('/feature/eth')">Features</a></li>
                <li><a href="javascript:void(0)" @click="href('/dapp/ETH')">DApp/BApp Station</a></li>
                <li><a href="https://generate.eosnova.io" target="_blank">Key Generator</a></li>
              </ul>
            </li>
            <li class="submitList">
              <h4>For Project</h4>
              <ul class="list">
                <li><a href="javascript:void(0)" @click="href('/submit/dapp')">Submit DApp/BApp</a></li>
                <li><a href="javascript:void(0)" @click="href('/submit/token')">Submit Token</a></li>
                <li><a href="javascript:void(0)" @click="href('/submit/dapp', 'promotion')">Promotion</a></li>
              </ul>
            </li>
            <li>
              <h4>For Developers</h4>
              <ul class="list">
                <li><a href="https://github.com/EOSNOVA/Auth-SDK-iOS" target="_blank">iOS SDK</a></li>
                <li><a href="https://github.com/EOSNOVA/Auth-SDK-ANDROID" target="_blank">Android SDK</a></li>
              </ul>
            </li>
            <li>
              <h4>Contact</h4>
              <ul class="list contact">
                <li>
                  <a href="https://medium.com/eosnova" target="_blank">
                    <span><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/icon-medium.png"/></span>
                    Medium
                  </a>
                </li>
                <li>
                  <a href="https://t.me/eosnova" target="_blank">
                    <span><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/icon-telegram.png"/></span>
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="https://github.com/EOSNOVA" target="_blank">
                    <span><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/icon-github.png"/></span>
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/eosnova_io" target="_blank">
                    <span><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/icon-twitter.png"/></span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@eosnova.io">
                    <span><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/icon-mail.png"/></span>
                    Email
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
</template>

<script>
  import { langPr, langTitle, langRes, langEvent } from '../../translations/langEvent'
  import { langText } from '../../translations/language'

  export default {
    name: "footerCon",
    data(){
      return{
        lang: langRes,
        langTitle: [],
        langList: [
          { title: '한글', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png' },
          { title: 'ENG', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png' },
          { title: '中文', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_cn.png' }
        ],
        langOn:true,
      }
    },
    created(){
      this.$EventBus.$on('lang_event', (tit)=>{
        if( tit === '한글' ){
          this.langTitle = [];
          this.langTitle['title'] = '한글';
          this.langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png';
          this.lang = [];
          this.lang = langText['ko'];
        }
        else if( tit === '中文' ){
          this.langTitle = [];
          this.langTitle['title'] = '中文';
          this.langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_cn.png';
          this.lang = [];
          this.lang = langText['zh'];
        }
        else {
          this.langTitle = [];
          this.langTitle['title'] = 'ENG';
          this.langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png';
          this.lang = [];
          this.lang = langText['en'];
        }
      });
    },
    mounted(){
      this.langTitle = langTitle;
    },
    methods:{
      langToggle(){
        if( this.langOn ){
          this.langOn = false;
        }
        else{
          this.langOn = true;
        }
      },
      langChange(item){
        // console.log('change@@', item);
        this.langOn = true;
        if( item === '한글' ){
          window.history.pushState(null, null, '?l=ko');
          langEvent();
          this.langTitle = '';
          this.langTitle = langTitle;
        }
        else if( item === '中文' ){
          window.history.pushState(null, null, '?l=zh');
          langEvent();
          this.langTitle = '';
          this.langTitle = langTitle;
        }
        else {
          window.history.pushState(null, null, '?l=en');
          langEvent();
          this.langTitle = '';
          this.langTitle = langTitle;
        }
      },
      href(path, promotion){
        let name = path;
        let langParam = langPr;
        let url = location.href;
        if( promotion ) {
          if( url.match('promotion') ) {
            this.$EventBus.$emit('promotion');
          }
          else{
            this.$router.push({ path:name, query:{ l:langParam, p:promotion } });
          }
        }
        else {
          window.scrollTo(0,0);
          this.$router.push({ path:name, query:{ l:langParam } });
        }
      },
    }
  }
</script>

<style scoped>

</style>
