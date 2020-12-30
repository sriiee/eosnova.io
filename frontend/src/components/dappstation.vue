<template>
    <div id="dappstation">
      <!-- Side Nav -->
      <div id="sideNav">
        <h1>
          <a href="javascript:void(0)" @click="href('/')">
            <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/nova_logo.png" width="26"/><span>NOVA</span>
          </a>
        </h1>
        <ul>
          <li class="eth on">
            <a href="javascript:void(0)">
              <span></span>
              ETH
            </a>
          </li>
          <li class="eos">
            <a href="javascript:void(0)">
              <span></span>
              EOS
            </a>
          </li>
          <li class="all">
            <a href="javascript:void(0)">
              <span></span>
              ALL
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
                      @click="langToggle"
                    >
                      <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-eos.png">
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-tile
                      v-for="(item, index) in chainList"
                      :key="index"
                    >
                      <span class="icon"><img :src="item.icon"/></span>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </div>
            </div>
            <!-- Search -->
            <div class="m_searchBox" v-bind:class="{ active : isSearch }" >
              <input type="text" class="search" v-model="search" v-on:keyup="computed=true" @focus="isSearch = true" @blur="isSearch = false"/>
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
          <ul id="topNavUl">
            <li class="on" id="category_1">
              <label><input type="radio" v-model="category" value="All" @change="computed=true, categoryChange('1')"/> All</label>
              <!--<a href="javascript:void(0)" @click="selectedCategory2('all')" v-model="category">ALL</a>-->
            </li>
            <li id="category_2">
              <label><input type="radio" v-model="category" value="Game" @change="computed=true, categoryChange('2')"/> Game</label>
              <!--<a href="javascript:void(0)" @click="selectedCategory2('game')" v-model="category">Game</a>-->
            </li>
            <li id="category_3">
              <label><input type="radio" v-model="category" value="Social" @change="computed=true, categoryChange('3')"/> Social</label>
              <!--<a href="javascript:void(0)" @click="selectedCategory2('social')" v-model="category">Social</a>-->
            </li>
            <li id="category_4">
              <label><input type="radio" v-model="category" value="Tool" @change="computed=true, categoryChange('4')"/> Tool</label>
              <!--<a href="javascript:void(0)" @click="selectedCategory2('tool')" v-model="category">Tool</a>-->
            </li>
            <li id="category_5">
              <label><input type="radio" v-model="category" value="Resource" @change="computed=true, categoryChange('5')"/> Resource</label>
              <!--<a href="javascript:void(0)" @click="selectedCategory2('resource')" v-model="category">Resource</a>-->
            </li>
            <li id="category_6">
              <label><input type="radio" v-model="category" value="Exchange" @change="computed=true, categoryChange('6')"/> Exchange</label>
              <!--<a href="javascript:void(0)" @click="selectedCategory2('exchange')" v-model="category">Exchange</a>-->
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
          <li v-for="item in dappList" class="list">
            <a :href="item.url.android.length > 0 ? item.url.android : item.url.ios" target="_blank">
              <p class="img"><img :src="item.icon"/></p>
              <h2>{{ item.title }}</h2>
              <p class="desc" v-if="langPr === 'ko'">{{ item.desc.ko }}</p>
              <p class="desc" v-else>{{ item.desc.en }}</p>
              <p class="chain">
                <img v-if="item.chain === 'EOS'" src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="8"/>
                <img v-else src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eth.png" width="8"/>
                {{ item.chain }}
              </p>
            </a>
          </li>
        </ul>

        <ul class="dappList" v-else>
          <!-- AD -->
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
          <li v-for="dapp in dappRst" class="list">
            <a :href="dapp.url.android.length > 0 ? dapp.url.android : dapp.url.ios" target="_blank">
              <p class="img"><img :src="dapp.icon"/></p>
              <h2>{{ dapp.title }}</h2>
              <p class="desc" v-if="langPr === 'ko'">{{ dapp.desc.ko }}</p>
              <p class="desc" v-else>{{ dapp.desc.en }}</p>
              <p class="chain">
                <img v-if="dapp.chain === 'EOS'" src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="8"/>
                <img v-else src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eth.png" width="8"/>
                {{ dapp.chain }}
              </p>
            </a>
          </li>
        </ul>




      </div>
    </div>
</template>

<script>

  import { langPr, langTitle, langRes, langEvent } from '../../translations/langEvent'
  import axios from 'axios'

  export default {
    name: "dappstation",
    data(){
      return{
        dappList : [],
        ethDappList : [],
        dappAll: [],
        category:'All',
        computed:false,
        hideData:'',
        search:'',
        langPr,
        langTitle: [],
        langList: [
          { title: '한글', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png' },
          { title: 'ENG', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png'  },
        ],
        langOn:true,
        adData_ko: [
          '<a href="javascript:void(0)" class="example-slide">' +
            '<p class="img"><img src="http://d2irep64wuv8bo.cloudfront.net/dapp/icon/app/eos_tiger.jpg"/><span class="ad">AD</span></p>' +
            '<h2>EOS knight</h2>' +
            '<p class="desc">111 KO Mobile game that runs on an EOS block chain</p>' +
            '<p class="chain">' +
            '<img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="8"/>EOS' +
            '</p>' +
          '</a>',
          '<a href="javascript:void(0)" class="example-slide">' +
            '<p class="img"><img src="http://d2irep64wuv8bo.cloudfront.net/dapp/icon/app/se_7_ens.jpg"/><span class="ad">AD</span></p>' +
            '<h2>EOS knight</h2>' +
            '<p class="desc">222 KO Mobile game that runs on an EOS block chain</p>' +
            '<p class="chain">' +
            '<img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="8"/>EOS' +
            '</p>' +
          '</a>',
        ],
        adData_en: [
          '<a href="javascript:void(0)" class="example-slide">' +
          '<p class="img"><img src="http://d2irep64wuv8bo.cloudfront.net/dapp/icon/app/eos_tiger.jpg"/><span class="ad">AD</span></p>' +
          '<h2>EOS knight</h2>' +
          '<p class="desc">111 EN Mobile game that runs on an EOS block chain</p>' +
          '<p class="chain">' +
          '<img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="8"/>EOS' +
          '</p>' +
          '</a>',
          '<a href="javascript:void(0)" class="example-slide">' +
            '<p class="img"><img src="http://d2irep64wuv8bo.cloudfront.net/dapp/icon/app/se_7_ens.jpg"/><span class="ad">AD</span></p>' +
            '<h2>EOS knight</h2>' +
            '<p class="desc">222 EN Mobile game that runs on an EOS block chain</p>' +
            '<p class="chain">' +
            '<img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-cate-eos.png" width="8"/>EOS' +
            '</p>' +
          '</a>',
        ],
        isSearch : false,
        chainList: [
          { title: 'EOS', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-eos.png'},
          { title: 'ETH', icon:'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/dappstation/dapp-icon-eth.png'},
        ],
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
            // console.log(this.dappList[0]);
            this.hideData = this.dappList[0]['title'];
          })
          .catch(err => {
            console.log('DApp api error', err);
          })
      }

      let ethDApp = async () => {
        await axios.get('/api/ethDapp')
          .then(res => {
            for (let key in res['data']) {
              res['data'][key]['chain'] = 'ETH';
            }
            Object.assign(this.ethDappList, res['data']);
          })
          .catch(err => {
            console.log('DApp api error', err);
          })
      }

      // All
      Promise.all([eosDApp(), ethDApp()]).then(() => {
        for (let key in this.dappList) {
          this.dappAll.push(this.dappList[key]);
        }
        for (let key in this.ethDappList) {
          this.dappAll.push(this.ethDappList[key]);
        }

        this.dappAll.sort((a,b)=>{
          return a.update_date < b.update_date ? -1 : a.update_date > b.update_date ? 1 : 0;
        })
      })


    },
    computed: {
      dappRst: function(){
        let vm = this;
        let category = vm.category.toLowerCase();

        if(this.search){
          if( category !== 'all' ){
            return vm.dappList.filter((dapp)=> {
              return dapp.category.includes(category) && dapp.title.toLowerCase().indexOf(this.search) > -1
            });
          }
          else{
            return vm.dappList.filter((dapp)=> {
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
    methods:{
      categoryChange(i){
        console.log('categoryChange');
        let li = document.getElementById('category_'+i),
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
        }
        else {
          window.history.pushState(null, null, '?l=en');
          langEvent();
          this.langTitle = '';
          this.langTitle = langTitle;
          this.langPr = 'en';
        }
      },
    }
  }
</script>

<style scoped>

</style>
