<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
 @font-face {
     font-family: Raleway;
     src: url(./assets/fonts/Raleway.ttf);
 }
 #app {
     font-family: Raleway;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
 }
</style>
