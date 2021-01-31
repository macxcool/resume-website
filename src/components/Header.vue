<template>
<header>
  <router-link to="/">Achille</router-link>
  <router-link to="/">Lien</router-link>
  <router-link to="/">Lien</router-link>
  <router-link to="/">Lien</router-link>
</header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    border-bottom: 2px solid black;
}
a {
    padding: 0 15px;
    height: 100%;
    width: 125px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
a:hover {
    background-color: $main-color;
    color: white;
}
a:first-child {
    margin-right: auto;
    font-family: Lobster;
    font-size: 40px;
}
</style>
