<template>
  <div>

    <!--<v-btn @click="onclick">plus</v-btn>-->
    <!--<v-btn @click="onRightClick">minus</v-btn>-->
    <v-btn to="/dapp/test"></v-btn>
    <!--<div id="sub">{{data}}</div>-->

  </div>
</template>

<script>

  export default {
    name: "test2",
    created(){
      // console.log(1234565432, this.test);
    },
    data(){
      return{
        data: 10+this.weight,
      }
    },
    methods:{
      onRightClick(){
        this.data--;
      }
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
