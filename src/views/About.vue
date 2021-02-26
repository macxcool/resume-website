<template>
<div class="about">
  <h1>About</h1>
    <div class="block_container" v-for="(block, index) in blocks" :key="block.picture">
      <div v-if="index % 2 == 0" class="block">
        <div class="even">
          <img :style="{ width: 150 - block.downsize + 'px' }" :alt="block.pictureAlt" :src="block.picture"/>
        </div>
        <p v-html="block.text" class="even"></p>
      </div>
      <div v-else class="block">
        <p v-html="block.text" class="odd"></p>
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
@media all and (max-width: 1050px)
{
    .block {
        flex-direction: column;
        height: auto;
    }
    .block>div.odd, .block>div.even{
        border: 0;
        margin-bottom: 20px;
    }
    p, p.odd {
        text-align: justify;
        margin-bottom: 20px;
    }
    .block>div.odd {
        order: -1;
    }
    a:hover {
        text-decoration: underline;
    }
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
                    text: 'I am actually in my third year out of five at the <strong><a href="https://ecole-ingenieurs.cesi.fr/en/" target="blank">CESI</a></strong> school. I prepare here an engineer degree in computer science. This environment give me a lot of skills including: team work, autonomous capabilities and quick learning for main ones. My school use the <strong><a href="https://ecole-ingenieurs.cesi.fr/en/pedagogy-support/" target="blank">Problem Based Learning</a></strong> (PBL), it\'s a pro active method that is very close to real world jobs so I can be quickly available in an company project.'
                },
                {
                    picture: require('../assets/images/bio/code.svg'),
                    pictureAlt: "Code illustration logo",
                    downsize: 0,
                    text: 'I had my first touch with developpment in 2014 as a Hobby and it quickly became a passion. Since there I have been going through many other languages by curiosity or for the purpose of my formation. Today <strong><a href="https://golang.org/" target="blank">Golang</a></strong> seems to me a really good competitor in the IT modern world. That why I choose it, simplicity and performance can resume the all language to me. For Vue.js there is no debate it is just the best in its field.'
                },
                {
                    picture: require('../assets/images/bio/gnu.svg'),
                    pictureAlt: "GNU head logo",
                    downsize: 0,
                    text: 'The <strong><a href="https://fsf.org/" target="blank">Free Software</a></strong> movement is something that is really close to my heart. Since 2016 I use GNU/Linux operating systems as a daily driver on my main computer. I know this type of OS like the back of my hand. It is handy to know how to use the GO TO system for devops and system administration ;-)'
                }
            ]
        }
    }
}
</script>
