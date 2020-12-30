let myMixin = {
  props:{
    weight:{
      default:10
    }
  },
  created(){
    console.log('mixin');
  },
  methods:{
    onclick(){
      console.log('mixin onclick ##');
      this.data++;
    }
  }
};


export default myMixin;
