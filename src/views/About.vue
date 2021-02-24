<template>
<div class="about">
  <h1>About</h1>
    <div class="block_container" v-for="(block, index) in blocks" :key="block.picture">
      <div v-if="index % 2 == 0" class="block">
        <div class="even">
          <img :style="{ width: 150 - block.downsize + 'px' }" :alt="block.pictureAlt" :src="block.picture"/>
        </div>
        <p class="even">{{ block.text }}</p>
      </div>
      <div v-else class="block">
        <p class="odd">{{ block.text }}</p>
        <div class="odd">
          <img :style="{ width: 150 - block.downsize + 'px' }" :alt="block.pictureAlt" :src="block.picture"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
    margin: $page-margin;
}
.block {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: 200px;
}
.block>div {
    height: 100%;
    min-width: 250px;
    display: flex;
}
.block_container {
    margin: 20px 0;
    display: flex;
}
h1 {
    text-align: center;
    letter-spacing: 0.1em;
    font-size: 50px;
}
img {
    margin: auto;
}
p {
    font-size: 18px;
    padding: 0 30px;
}
.block>div.odd {
    border-left: 2px solid black;
}
.block>div.even {
    border-right: 2px solid black;
}
p.odd {
    text-align: right;
}
</style>

<script>
export default {
    name: 'About',
    data() {
        return {
            blocks: [
                {
                    picture: require('../assets/images/bio/cesi.svg'),
                    pictureAlt: "Cesi logo",
                    downsize: 15,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    picture: require('../assets/images/bio/code.svg'),
                    pictureAlt: "Code illustration logo",
                    downsize: 0,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    picture: require('../assets/images/bio/gnu.svg'),
                    pictureAlt: "GNU head logo",
                    downsize: 0,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }
            ]
        }
    }
}
</script>
