<template>
    <Header></Header>
    <router-view/>
</template>

<style lang="scss">
 @font-face {
     font-family: Raleway;
     src: url(./assets/fonts/Raleway.ttf);
 }
 body {
     margin: 0;
 }
 a {
     text-decoration: none;
     color: $text-color;
 }
 #app {
     font-family: Raleway;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
 }
</style>

<script>
 import Header from '@/components/Header.vue'

 export default {
     name: 'App',
     components: {
         Header
     }
 }
</script>
