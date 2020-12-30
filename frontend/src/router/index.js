import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import FeatureETH from '@/components/featureETH'
import FeatureEOS from '@/components/featureEOS'
import FeatureBOS from '@/components/featureBOS'
import FeatureKLAY from '@/components/featureKLAY'
import SubmitDApp from '@/components/submitDApp'
import SubmitToken from '@/components/submitToken'
import DAppEOS from '@/components/dappEOS'
import DAppETH from '@/components/dappETH'
import DAppBOS from '@/components/dappBOS'
import DAppKLAY from '@/components/dappKLAY'
import IndexV2 from '@/components/index_v2_3'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/:lang',
      name: 'Index',
      props: true,
      component: Index
    },
    {
      path: '/feature/eth',
      name: 'FeatureETH',
      props: true,
      component: FeatureETH
    },
    {
      path: '/feature/eos',
      name: 'FeatureEOS',
      props: true,
      component: FeatureEOS
    },
    {
      path: '/feature/bos',
      name: 'FeatureBOS',
      props: true,
      component: FeatureBOS
    },
    {
      path: '/feature/klaytn',
      name: 'FeatureKLAY',
      props: true,
      component: FeatureKLAY
    },
    {
      path: '/submit/dapp',
      name: 'SubmitDApp',
      props: true,
      component: SubmitDApp
    },
    {
      path: '/submit/token',
      name: 'SubmitToken',
      props: true,
      component: SubmitToken
    },
    {
      path: '/dapp/EOS',
      name: 'DAppEOS',
      props: true,
      component: DAppEOS
    },
    {
      path: '/dapp/ETH',
      name: 'DAppETH',
      props: true,
      component: DAppETH
    },
    {
      path: '/dapp/BOS',
      name: 'DAppBOS',
      props: true,
      component: DAppBOS
    },
    {
      path: '/dapp/KLAY',
      name: 'DAppKLAY',
      props: true,
      component: DAppKLAY
    },
    {
      path: '/index/v2',
      name: 'IndexV2',
      props: true,
      component: IndexV2
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if( to['name'] === 'SubmitDApp' ){
      let url = location.href;
      if( !(url.match('promotion')) ) {
        return { x: 0, y: 0 }
      }
    }
    else{
      return { x: 0, y: 0 }
    }
  }
})
