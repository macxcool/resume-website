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
                    text: 'I am now in my third year of a five program at the <strong><a href="https://ecole-ingenieurs.cesi.fr/en/" target="blank">CESI</a></strong> school. I am working on an Engineer degree in computer science. This has allowed me to develop many skills, especially teamwork, and self-directed and quick learning. My school uses the <strong><a href="https://ecole-ingenieurs.cesi.fr/en/pedagogy-support/" target="blank">Problem Based Learning</a></strong> (PBL) approach. This is a pro-active method that is very similar to real world jobs so I can be quickly integrated into a company project.'
                },
                {
                    picture: require('../assets/images/bio/code.svg'),
                    pictureAlt: "Code illustration logo",
                    downsize: 0,
                    text: 'I had my first experience with development in 2014 as a hobby, and it quickly became a passion. Since then I have been learning many other languages out of curiosity or for learning purposes. Right now I consider <strong><a href="https://golang.org/" target="blank">Golang</a></strong> to be a good thing to know for the modern IT world; that\'s why I chose it. Simplicity and performance are its key features, in my opinion. Also, for me there is no debate that Vue.js is the best frontend framework.'
                },
                {
                    picture: require('../assets/images/bio/gnu.svg'),
                    pictureAlt: "GNU head logo",
                    downsize: 0,
                    text: 'The <strong><a href="https://fsf.org/" target="blank">Free Software</a></strong> movement is something that is really close to my heart. Since 2016 I have been using GNU/Linux operating systems as a daily driver on my main computer. I know this type of OS like the back of my hand. It is handy to know how to use the Go-To system for devops and system administration ;-)'
                }
            ]
        }
    }
}
</script>
