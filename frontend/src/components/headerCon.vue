<template>
    <div id="c_header">
      <header id="header">
        <div class="inner_l">
          <h1>
            <a href="javascript:void(0)" @click="href('/')">
              <span>NOVA</span>
            </a>
          </h1>
          <ul id="nav">
            <li id="home"><v-btn @click="href('/')">Home</v-btn></li>
            <li id="feature"><v-btn @click="href('/feature/eth')">Features</v-btn></li>
            <li id="dapp"><v-btn @click="href('/dapp/ETH')">DApp</v-btn></li>
            <li id="submit"><v-btn @click="href('/submit/token')">Submit</v-btn></li>
          </ul>
          <div class="langBox headerLan">
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
        </div>
        <a href="javascript:void(0)" @click="drawer=true" class="mbNavBtn">
          <v-icon>menu</v-icon>
        </a>
      </header>

      <v-navigation-drawer
        v-model="drawer"
        app
        id="mb_header"
      >
        <v-list>
          <v-list-tile class="logoTitle">
            <span class="logo"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/nova_logo.png"/></span>
            <h1>NOVA</h1>
            <a href="javascript:void(0)" @click="drawer=false" class="closeBtn"><v-icon>close</v-icon></a>
          </v-list-tile>

          <template v-for="item in items">
            <v-list-group
              v-if="item.children"
              :key="item.title"
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title class="depth" :id="item.id">
                    {{ item.title }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"
                @click="href(child.action)"
                class="subMenu"
                :id="child.id"
              >
                <v-list-tile-content>
                  <v-list-tile-title class="childMenu">
                    {{ child.title }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile
              v-else
              :key="item.title"
              @click="href(item.action)"
              :id="item.id"
            >
              <v-list-tile-content>
                <v-list-tile-title class="depth">
                  {{ item.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <div class="langBox headerLan mHeadLan">
            <v-select
              :items= mLangList
              v-model="mLangTitle"
              return-object
              @change="$EventBus.$emit('lang_event',mLangTitle.title), langChange(mLangTitle.title), drawer=!drawer"
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
        </v-list>
      </v-navigation-drawer>


    </div>
</template>

<script>
  import { langPr, langTitle, langRes, langEvent } from '../../translations/langEvent'
  import { langText } from '../../translations/language'

  export default {
    name: "headerCon",
    data(){
      return{
        lang: langRes,
        langTitle: [],
        mLangTitle: [],
        langList: [
          { title: '한글', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png' },
          { title: 'ENG', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png' },
          { title: '中文', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_cn.png' }
        ],
        mLangList: [
          { title: '한글', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png' },
          { title: 'ENG', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png' },
          { title: '中文', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_cn.png' }
        ],
        langOn:true,
        drawer: null,
        items: [
          {
            title: 'HOME',
            id: 'm_home',
            action: '/'
          },
          {
            title: 'FEATURES',
            id: 'm_feature',
            children:[
              {
                title: 'Ethereum',
                id: 'm_featureETH',
                action: '/feature/eth'
              },
              {
                title: 'EOS',
                id: 'm_featureEOS',
                action: '/feature/eos'
              },
              {
                title: 'BOSCore',
                id: 'm_featureBOS',
                action: '/feature/bos'
              },
              {
                title: 'Klaytn',
                id: 'm_featureKLAY',
                action: '/feature/klaytn'
              }
            ]
          },
          {
            title: 'DAPP STATION',
            children:[
              {
                title: 'Ethereum',
                id: 'm_dappETH',
                action: '/dapp/ETH'
              },
              {
                title: 'EOS',
                id: 'm_dappEOS',
                action: '/dapp/EOS'
              },
              {
                title: 'BOS',
                id: 'm_dappBOS',
                action: '/dapp/BOS'
              },
              {
                title: 'Klaytn',
                id: 'm_dappKLAY',
                action: '/dapp/KLAY'
              }
            ]
          }
        ]
      }
    },
    watch: {
      '$route': 'fetchData',
    },
    created(){
      // Header Fix Ctrl
      window.onscroll = () => {
        let url = location.href;
        if( !url.match('dappstation') ) {
          let scrollPosition = window.scrollY,
            nav = document.getElementById('header');

          if (scrollPosition > 0) nav.classList.add('fix');
          else nav.classList.remove('fix');
        }
      };
      // window.history.pushState(null, null, '?page=' + 'aaaa');

      this.$EventBus.$on('lang_event', (tit)=>{
        if( tit === '한글' ){
          this.langTitle = [];
          this.langTitle['title'] = '한글';
          this.langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png';
          this.mLangTitle = [];
          this.mLangTitle['title'] = '한글';
          this.mLangTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png';
          this.lang = [];
          this.lang = langText['ko'];
        }
        else if( tit === '中文' ){
          this.langTitle = [];
          this.langTitle['title'] = '中文';
          this.langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_cn.png';
          this.mLangTitle = [];
          this.mLangTitle['title'] = '中文';
          this.mLangTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_cn.png';
          this.lang = [];
          this.lang = langText['zh'];
        }
        else {
          this.langTitle = [];
          this.langTitle['title'] = 'ENG';
          this.langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png';
          this.mLangTitle = [];
          this.mLangTitle['title'] = 'ENG';
          this.mLangTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png';
          this.lang = [];
          this.lang = langText['en'];
        }
      });
      document.addEventListener("backbutton", this.back, false);
      this.drawer = false;

      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    beforeDestroy () {
      document.removeEventListener("backbutton", this.back);
    },
    mounted(){
      let scrollPosition = window.scrollY,
        nav = document.getElementById('header');
      if (scrollPosition > 0) nav.classList.add('fix');
      else nav.classList.remove('fix');

      this.fetchData();
      this.langTitle = langTitle;
      this.mLangTitle = langTitle;
    },
    methods:{
      fetchData(){
        langEvent();
        let width = document.body.clientWidth;
        let url = location.href,
            btn = null,
            tabBtn = null;
        if( url.match('feature') ) {
          if( width > 580 ) {
            btn = document.getElementById('feature');
          }
          else {
            if( url.match('feature/eos') ) btn = document.getElementById('m_featureEOS');
            else if( url.match('feature/eth') ) btn = document.getElementById('m_featureETH');
            else if( url.match('feature/klaytn') ) btn = document.getElementById('m_featureKLAY');
            else btn = document.getElementById('m_featureBOS');
            document.getElementById('m_feature').classList.add('on');
          }
          this.removeClass();
          btn.classList.add('on');

          if( width > 860 ){
            if( url.match('feature/eos') ) {
              tabBtn = document.getElementById('eosTab');
              tabBtn.classList.add('on');
            }
            else if( url.match('feature/bos') ) {
              tabBtn = document.getElementById('bosTab');
              tabBtn.classList.add('on');
            }
            else if( url.match('feature/klaytn') ) {
              tabBtn = document.getElementById('klayTab');
              tabBtn.classList.add('on');
            }
            else {
              tabBtn = document.getElementById('ethTab');
              tabBtn.classList.add('on');
            }
          }
        }
        else if( url.match('submit') ) {
          btn = document.getElementById('submit');
          this.removeClass();
          btn.classList.add('on');
        }
        else {
          if( width > 580  ) btn = document.getElementById('home');
          else btn = document.getElementById('m_home');
          this.removeClass();
          btn.classList.add('on');
        }
      },
      removeClass(){
        let navLi = document.getElementById('nav').children,
            navLen = document.getElementById('nav').children.length;
        for (let i = 0; i < navLen; i++) {
          let currentId = navLi[i].id;
          document.getElementById(currentId).classList.remove('on');
        }
      },
      langToggle(){
        if( this.langOn ){
          this.langOn = false;
        }
        else{
          this.langOn = true;
        }
      },
      langChange(item){
        this.langOn = true;
        if( item === '한글' ){
          window.history.pushState(null, null, '?l=ko');
          langEvent();
          this.langTitle = [];
          this.langTitle = langTitle;
          this.mLangTitle = [];
          this.mLangTitle = langTitle;
        }
        else if( item === '中文' ){
          window.history.pushState(null, null, '?l=zh');
          langEvent();
          this.langTitle = [];
          this.langTitle = langTitle;
          this.mLangTitle = [];
          this.mLangTitle = langTitle;
        }
        else {
          window.history.pushState(null, null, '?l=en');
          langEvent();
          this.langTitle = [];
          this.langTitle = langTitle;
          this.mLangTitle = [];
          this.mLangTitle = langTitle;
        }
      },
      href(path){
        let name = path;
        let langParam = langPr;
        this.$router.push({ path:name, query:{ l:langParam } });
      },
      handleResize(){
        let width = document.body.clientWidth,
          tabBtn = null,
          url = location.href;
        if( url.match('feature') ){
          if( width > 860 ){
            if( url.match('feature/eos') ) {
              tabBtn = document.getElementById('eosTab');
              tabBtn.classList.add('on');
            }
            else if( url.match('feature/bos') ) {
              tabBtn = document.getElementById('bosTab');
              tabBtn.classList.add('on');
            }
            else if( url.match('feature/klaytn') ) {
              tabBtn = document.getElementById('klayTab');
              tabBtn.classList.add('on');
            }
            else {
              tabBtn = document.getElementById('ethTab');
              tabBtn.classList.add('on');
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  #mb_header .v-list__tile {

  }
</style>
