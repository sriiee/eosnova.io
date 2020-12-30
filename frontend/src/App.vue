<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {},
  }
</script>

<style>
  #app {
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size:1em;
    font-weight:400;
    line-height:1.5;
    color:#fff;
    word-break:keep-all;
  }
</style>
