<template>
  <div>
    <!-- PC -->
    <div class="subTab inner sm2" id="featureTab">
      <a href="javascript:void(0)" @click="href('/feature/eth')" id="ethTab">
        <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-eth.png"/>
        <span>Ethereum</span>
      </a>
      <a href="javascript:void(0)" @click="href('/feature/eos')" id="eosTab">
        <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-eos.png"/>
        <span>EOS</span>
      </a>
      <a href="javascript:void(0)" @click="href('/feature/bos')" id="bosTab">
        <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-bos.png"/>
        <span>BOSCore</span>
      </a>
      <a href="javascript:void(0)" @click="href('/feature/klaytn')" id="klayTab">
        <img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-klay.png"/>
        <span>Klaytn</span>
        <span class="new"><img src="https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/label-new.png"/></span>
      </a>
    </div>

    <!-- MOBILE -->
    <div id="featureMbTab">
      <v-select
        :items = items
        v-model="selected"
        return-object
        @change="href(selected.path)"
      >
        <template slot="selection" slot-scope="data">
          <v-avatar>
            <img :src="data.item.avatar">
          </v-avatar>
          <div v-bind:class="{ on: isOn }">
            {{ data.item.title }}
          </div>
        </template>
        <template slot="item" slot-scope="data">
          <v-list-tile-avatar>
            <img :src="data.item.avatar">
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
</template>

<script>
  import { langPr } from '../../translations/langEvent'
  export default {
    name: "featureNav",
    data(){
      let icon = [
        'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-eth.png',
        'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-eos.png',
        'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-bos.png',
        'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-klay.png'
      ];
      return{
        isOn: false,
        selected: { title: 'Ethereum', avatar: icon[0], path: '/feature/eth' },
        items: [
          { title: 'Ethereum', avatar: icon[0], path: '/feature/eth' },
          { title: 'EOS', avatar: icon[1], path: '/feature/eos' },
          { title: 'BOS', avatar: icon[2], path: '/feature/bos' },
          { title: 'Klaytn', avatar: icon[3], path: '/feature/klaytn' }
          // { title: 'Klaytn', avatar: icon[3], disabled: true }
        ],
      }
    },
    created(){
      let icon = [
        'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-eth.png',
        'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-eos.png',
        'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-bos.png',
        'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/image2.0/feature/icon-klay.png'
      ];

      let url = location.href;
      if( url.match('feature/eos') ){
        this.selected = { title: 'EOS', avatar: icon[1], path: '/feature/eos' }
      }
      else if( url.match('feature/bos') ){
        this.selected = { title: 'BOS', avatar: icon[2], path: '/feature/bos' }
      }
      else if( url.match('feature/klaytn') ){
        this.selected = { title: 'Klaytn', avatar: icon[3], path: '/feature/klaytn' }
      }
      else{
        this.selected = { title: 'Ethereum', avatar: icon[0], path: '/feature/eth' }
      }
    },
    methods:{
      href(path){
        let name = path;
        let langParam = langPr;
        this.$router.push({ path:name, query:{ l:langParam } });
      }
    }
  }
</script>

<style scoped>

</style>
