<template>
  <div id="app">
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
import Parse from 'parse'
  export default {
    name: 'App',
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700');
  #app {
    font-family: 'Quicksand', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
