<template>
    <div>

      <!--<v-btn @click="onRightClick"></v-btn>-->
      <v-btn to="/dapp/test2"></v-btn>
      <!--<div id="sub">{{data}}</div>-->

    </div>
</template>

<script>


  export default {
    name: "test",
    created(){
      // console.log(8888888888,this.test);
      // this.test = 'testtest';
      // console.log(77777777, this.test);
    },
    data(){
      return{
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  #sub {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
</style>
