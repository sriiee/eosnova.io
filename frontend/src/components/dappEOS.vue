<template>
  <div id="dappstation">
    <!-- Side Nav -->
    <div id="sideNav">
      <h1>
        <a href="javascript:void(0)" @click="href('/')">
          <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/nova_logo.png"/><span>NOVA</span>
        </a>
      </h1>
      <ul>
        <li class="eth">
          <a href="javascript:void(0)" @click="href('/dapp/ETH')">
            <span></span>
            ETH
          </a>
        </li>
        <li class="eos on">
          <a href="javascript:void(0)" @click="href('/dapp/EOS')">
            <span></span>
            EOS
          </a>
        </li>
        <li class="bos">
          <a href="javascript:void(0)" @click="href('/dapp/BOS')">
            <span></span>
            BOS
          </a>
        </li>
        <li class="klay">
          <a href="javascript:void(0)" @click="href('/dapp/KLAY')">
            <span></span>
            KLAY
          </a>
        </li>
      </ul>
      <div class="submitBox">
        <a href="javascript:void(0)" @click="href('/submit/dapp')">
          <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-plus.png" width="12"/>
          <span>Submit DApp</span>
        </a>
      </div>
    </div>
    <!-- Page Top Nav -->
    <div id="topNav">
      <div id="mobileGnb">
         <h1>
           <a href="javascript:void(0)" @click="href('/')">
            <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/nova_logo.png" width="26"/><span>NOVA</span>
          </a>
        </h1>
        <div class="rightGnb">
          <!-- Chain -->
          <div class="chainList">
            <div>
              <v-menu bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                  >
                    <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-eos.png">
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile
                    v-for="(item, index) in chainList"
                    :key="index"
                    :id="item.title"
                    @click="href(`/dapp/${item.title}`)"
                  >
                    <span class="icon" :style="`background:#fff url('${item.icon}') no-repeat center`"></span>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </div>
          <!-- Search -->
          <div class="m_searchBox" v-bind:class="{ active : isSearch }" >
            <v-btn @click="isSearch = !isSearch, focusOn()">
              <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-search-wht.png" width="18"/>
            </v-btn>
            <div class="in" v-if="isSearch">
              <input type="text" class="search" id="mbSearch" v-model="search" v-on:keyup="computed=true" @blur="isSearch = false" placeholder="검색"/>
            </div>
          </div>
          <!-- Language -->
          <div class="dappLang">
            <div>
              <v-menu bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    @click="langToggle"
                  >
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile
                    v-for="(item, index) in langList"
                    :key="index"
                    :id="item.mId"
                    @click="$EventBus.$emit('lang_event',item.title), langChange(item.title)"
                  >
                    <span class="icon"><img :src="item.icon"/></span>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll">
        <ul id="topNavUl" v-show="menuSet">
          <li class="on" id="c_all">
            <label><input type="radio" v-model="category" value="All" @change="computed=true, categoryChange('c_all')"/> All</label>
          </li>
          <li id="c_game">
            <label><input type="radio" v-model="category" value="Game" @change="computed=true, categoryChange('c_game')"/> Game</label>
          </li>
          <li id="c_social">
            <label><input type="radio" v-model="category" value="Social" @change="computed=true, categoryChange('c_social')"/> Social</label>
          </li>
          <li id="c_tool">
            <label><input type="radio" v-model="category" value="Tool" @change="computed=true, categoryChange('c_tool')"/> Tool</label>
          </li>
          <li id="c_resource">
            <label><input type="radio" v-model="category" value="Resource" @change="computed=true, categoryChange('c_resource')"/> Resource</label>
          </li>
          <li id="c_exchange">
            <label><input type="radio" v-model="category" value="Exchange" @change="computed=true, categoryChange('c_exchange')"/> Exchange</label>
          </li>
          <li id="c_market">
            <label><input type="radio" v-model="category" value="Market" @change="computed=true, categoryChange('c_market')"/> Market</label>
          </li>
        </ul>
        <div class="rightBox">
          <div class="searchWrap">
            <input type="text" class="search" v-model="search" v-on:keyup="computed=true"/>
          </div>
          <div class="dappLang">
            <div>
              <v-menu bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    @click="langToggle"
                  >
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile
                    v-for="(item, index) in langList"
                    :key="index"
                    :id="item.id"
                    @click="$EventBus.$emit('lang_event',item.title), langChange(item.title)"
                  >
                    <span class="icon"><img :src="item.icon"/></span>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- contents -->
    <div id="contents">

      <ul class="dappList" v-if="!computed">
        <li class="hide">ADP{{hideData}}</li>
        <!-- AD -->
        <!--
        <li class="list adWrap">
          <div class="adBox">
            <carousel
              :data="langPr === 'ko' ? adData_ko : adData_en"
              :indicators="false"
              :interval="5000"
              :controls="false"
            >
            </carousel>
          </div>
        </li>
        -->
        <li v-for="item in dappList" class="list">
          <a :href="item.url.android.length > 0 ? item.url.android : item.url.ios" target="_blank">
            <p class="img"><img :src="item.icon"/></p>
            <h2>{{ item.title }}</h2>
            <p class="desc" v-if="langPr === 'ko'">{{ item.desc.ko }}</p>
            <p class="desc" v-else>{{ item.desc.en }}</p>
            <p class="chain">
              <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="10"/>
              <span>{{ item.chain }}</span>
            </p>
          </a>
        </li>
      </ul>

      <ul class="dappList" v-else>
        <!-- AD -->
        <!--
        <li class="list adWrap">
          <div class="adBox">
            <carousel
              :data="langPr === 'ko' ? adData_ko : adData_en"
              :indicators="false"
              :interval="5000"
              :controls="false"
            >
            </carousel>
          </div>
        </li>
        -->
        <li v-show="dappRst.length < 1" class="noData">{{ lang.dappstation_noData }}</li>
        <li v-for="dapp in dappRst" class="list">
          <a :href="dapp.url.android.length > 0 ? dapp.url.android : dapp.url.ios" target="_blank">
            <p class="img"><img :src="dapp.icon"/></p>
            <h2>{{ dapp.title }}</h2>
            <p class="desc" v-if="langPr === 'ko'">{{ dapp.desc.ko }}</p>
            <p class="desc" v-else>{{ dapp.desc.en }}</p>
            <p class="chain">
              <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="10"/>
              <span>{{ dapp.chain }}</span>
            </p>
          </a>
        </li>
      </ul>

      <div class="loadingWrap" v-if="loading">
        <v-progress-circular
          :size="80"
          :width="7"
          color="purple lighten-1"
          indeterminate
        ></v-progress-circular>
      </div>

    </div>
  </div>
</template>

<script>

  import { langPr, langTitle, langRes, langEvent } from '../../translations/langEvent'
  import { langText } from '../../translations/language'
  import axios from 'axios'

  export default {
    name: "dappEOS",
    data(){
      return{
        dappList : [],
        dappAll: [],
        category:'All',
        computed:false,
        hideData:'',
        search:'',
        langPr,
        lang: langRes,
        langTitle: [],
        langList: [
          { title: '한글', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png', id:'KOR', mId:'mKOR' },
          { title: 'ENG', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png', id:'ENG', mId:'mENG' },
          { title: '中文', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_cn.png', id:'ZH', mId:'mZH' },
        ],
        langOn:true,
        adData_ko: [
          '<a href="javascript:void(0)" class="example-slide">' +
          '<p class="img"><img src="http://d2irep64wuv8bo.cloudfront.net/dapp/icon/app/eos_tiger.jpg"/><span class="ad">AD</span></p>' +
          '<h2>EOS knight</h2>' +
          '<p class="desc">111 KO Mobile game that runs on an EOS block chain</p>' +
          '<p class="chain">' +
          '<img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="10"/><span>EOS</span>' +
          '</p>' +
          '</a>',
          '<a href="javascript:void(0)" class="example-slide">' +
          '<p class="img"><img src="http://d2irep64wuv8bo.cloudfront.net/dapp/icon/app/se_7_ens.jpg"/><span class="ad">AD</span></p>' +
          '<h2>EOS knight</h2>' +
          '<p class="desc">222 KO Mobile game that runs on an EOS block chain</p>' +
          '<p class="chain">' +
          '<img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="10"/><span>EOS</span>' +
          '</p>' +
          '</a>',
        ],
        adData_en: [
          '<a href="javascript:void(0)" class="example-slide">' +
          '<p class="img"><img src="http://d2irep64wuv8bo.cloudfront.net/dapp/icon/app/eos_tiger.jpg"/><span class="ad">AD</span></p>' +
          '<h2>EOS knight</h2>' +
          '<p class="desc">111 EN Mobile game that runs on an EOS block chain</p>' +
          '<p class="chain">' +
          '<img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="10"/><span>EOS</span>' +
          '</p>' +
          '</a>',
          '<a href="javascript:void(0)" class="example-slide">' +
          '<p class="img"><img src="http://d2irep64wuv8bo.cloudfront.net/dapp/icon/app/se_7_ens.jpg"/><span class="ad">AD</span></p>' +
          '<h2>EOS knight</h2>' +
          '<p class="desc">222 EN Mobile game that runs on an EOS block chain</p>' +
          '<p class="chain">' +
          '<img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="10"/><span>EOS</span>' +
          '</p>' +
          '</a>',
        ],
        isSearch : false,
        chainList: [
          { title: 'ETH', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-eth.png'},
          { title: 'EOS', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-eos.png'},
          { title: 'BOS', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-bos.png'},
          { title: 'KLAY', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-klaytn.png'}
        ],
        loading: false,
        menuSet: false,
      }
    },
    created(){
      let eosDApp = async () => {
        await axios.get('/api/dapp')
          .then(res => {
            for (let key in res['data']) {
              res['data'][key]['chain'] = 'EOS';
            }
            Object.assign(this.dappList, res['data']);
            this.hideData = this.dappList[0]['title'];

            let cateList = [];
            // for( let item of this.dappList ){
            //   cateList.push(item['category'][0]);
            //   cateList.push(item['category'][1]);
            // }

            let dappLen = this.dappList.length;
            for( let i=dappLen-1; i>-1; i-- ){
              // category
              cateList.push(this.dappList[i]['category'][0]);
              cateList.push(this.dappList[i]['category'][1]);

              // url account 치환
              if (this.dappList[i]['url']['android'].match('{account}')) {
                let url = this.dappList[i]['url']['android'],
                    urlRes = url.replace('{account}', 'suchagoodday');
                this.dappList[i]['url']['android'] = urlRes;
              }
              if (this.dappList[i]['url']['ios'].match('{account}')) {
                let url = this.dappList[i]['url']['ios'],
                    urlRes = url.replace('{account}', 'suchagoodday');
                this.dappList[i]['url']['ios'] = urlRes;
              }

              // enable
              if( !this.dappList[i]['enable']['android'] && !this.dappList[i]['enable']['ios'] ){
                this.dappList.splice(i,1)
              }
            }

            let uniqCate = cateList.reduce((a,b)=>{
              if(a.indexOf(b) < 0) a.push(b);
              return a;
            }, []);
            let allCate = ['game', 'social', 'tool', 'resource', 'exchange', 'market'];
            uniqCate.forEach(allEl=>{
              allCate.forEach(el=>{
                if(allEl === el){
                  let cat = allCate.indexOf(el);
                  allCate.splice(cat,1);
                }
              })
            })

            allCate.forEach(el=>{
              let element = document.getElementById('c_'+el);
              element.parentNode.removeChild(element);
            })
            this.menuSet = true;
          })
          .catch(err => {
            console.log('DApp api error', err);
          })
      }

      // All
      eosDApp();

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
    computed: {
      dappRst: function(){
        let vm = this;
        let category = vm.category.toLowerCase();

        if(this.search){
          this.loading = true;
          if( category !== 'all' ){
            return vm.dappList.filter((dapp)=> {
              this.loading = false;
              return dapp.category.includes(category) && dapp.title.toLowerCase().indexOf(this.search) > -1
            });
          }
          else{
            return vm.dappList.filter((dapp)=> {
              this.loading = false;
              return dapp.title.toLowerCase().indexOf(this.search) > -1
            });
          }
        }
        if(this.category){
          if(category === "all") {
            return vm.dappList;
          } else {
            return vm.dappList.filter((dapp)=> {
              return dapp.category.includes(category);
            });
          }
        }
      },
    },
    mounted(){
      document.getElementById('EOS').classList.add('on');
      if( langPr === 'en') {
        document.getElementById('ENG').classList.add('on');
        document.getElementById('mENG').classList.add('on');
      }
      else if( langPr === 'zh'){
        document.getElementById('ZH').classList.add('on');
        document.getElementById('mZH').classList.add('on');
      }
      else {
        document.getElementById('KOR').classList.add('on');
        document.getElementById('mKOR').classList.add('on');
      }
    },
    methods:{
      categoryChange(id){
        this.search = '';
        let li = document.getElementById(id),
          tabChild = document.getElementById('topNavUl').children;
        for (let i = 0; i < tabChild.length; i++) {
          tabChild[i].classList.remove('on');
        }
        li.classList.add('on');
      },
      href(path){
        let name = path;
        let langParam = langPr;
        this.$router.push({ path:name, query:{ l:langParam } });
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
          this.langTitle = '';
          this.langTitle = langTitle;
          this.langPr = 'ko';
          document.getElementById('KOR').classList.add('on');
          document.getElementById('mKOR').classList.add('on');
          document.getElementById('ENG').classList.remove('on');
          document.getElementById('mENG').classList.remove('on');
          document.getElementById('ZH').classList.remove('on');
          document.getElementById('mZH').classList.remove('on');
        }
        else if( item === '中文' ){
          window.history.pushState(null, null, '?l=zh');
          langEvent();
          this.langTitle = '';
          this.langTitle = langTitle;
          this.langPr = 'zh';
          document.getElementById('ZH').classList.add('on');
          document.getElementById('mZH').classList.add('on');
          document.getElementById('ENG').classList.remove('on');
          document.getElementById('mENG').classList.remove('on');
          document.getElementById('KOR').classList.remove('on');
          document.getElementById('mKOR').classList.remove('on');
        }
        else {
          window.history.pushState(null, null, '?l=en');
          langEvent();
          this.langTitle = '';
          this.langTitle = langTitle;
          this.langPr = 'en';
          document.getElementById('ENG').classList.add('on');
          document.getElementById('mENG').classList.add('on');
          document.getElementById('KOR').classList.remove('on');
          document.getElementById('mKOR').classList.remove('on');
          document.getElementById('ZH').classList.remove('on');
          document.getElementById('mZH').classList.remove('on');
        }
      },
      focusOn(){
        setTimeout(()=>{
          let input = document.getElementById('mbSearch');
          input.focus();
        },100)
      }
    }
  }
</script>

<style scoped>

</style>
