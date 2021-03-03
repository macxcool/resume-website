<template>
  <div class="home">
    <div class="profile">
      <div class="heading">
        <h1>Golang and Vue js Developper</h1>
        <div class="icons">
          <a href="https://www.linkedin.com/in/achille-garin"><img class="linkedin" alt="" src="../assets/icons/linkedin.svg"/></a>
          <a href="https://github.com/achille-garin"><img class="github" alt="" src="../assets/icons/github.svg"/></a>
        </div>
        <h2>Hello, my name is Achille. I'm a computer science engineering student who develops programs alongside my courses.</h2>
      </div>
      <img class="photo" src="../assets/images/Achille.webp"/>
    </div>
    <div class="stack">
      <img v-for="skill in stack" :key="skill.path" :alt="skill.alt" :src="skill.path"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
    font-size: 50px;
}
h2 {
    max-width: 1000px;
    margin-top: 0;
    text-align: center;
    letter-spacing: 0.3em;
}
.home {
    margin: $page-margin;
}
.profile {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.heading {
    display: flex;
    justify-content: space-around;
    letter-spacing: 0.7em;
    align-items: center;
    flex-direction: column;
}
.icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.icons a {
    margin: 20px 20px 50.5px 20px;
}
.icons img {
    padding: 7px 0;
    width: 50px;
    height: 50px;
}
.icons img:hover {
    padding: 5px 0;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}
.photo {
    width: 350px;
    border: 2px solid black;
}
.stack {
    margin-top: 45px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.stack img {
    margin: 25px;
    height: 150px;
    width: 175px;
}
@media all and (max-width: 1200px)
{
    h2 {
        margin-bottom: 35px;
    }
    .profile {
        margin-top: 20px;
    }
}
@media all and (max-width: 768px)
{
    .heading {
        letter-spacing: 0.6em;
    }
    h1 {
        font-size: 40px;
    }
    h2 {
        font-size: 20px;
    }
    .icons a {
        margin: 0 20px 30.5px 20px;
    }
    .stack img {
        margin: 20px;
        height: 100px;
        width: 125px;
    }
}
@media all and (max-width: 375px)
{
    h1 {
        font-size: 33px;
    }
    h2 {
        font-size: 16px;
    }
    .photo {
        width: 90%
    }
    .stack {
        justify-content: space-around;
    }
    .stack img {
        margin: 20px 0;
        height: 80px;
        width: 100px;
    }
}
</style>

<script>
export default {
    name: 'Home',
    data() {
        return {
            stack: [
                {
                    alt: '',
                    path: require('../assets/images/stack/go.svg')
                },
                {
                    alt: '',
                    path: require('../assets/images/stack/vue.svg')
                },
                {
                    alt: '',
                    path: require('../assets/images/stack/docker.svg')
                },
                {
                    alt: '',
                    path: require('../assets/images/stack/html.svg')
                },
                {
                    alt: '',
                    path: require('../assets/images/stack/sass.svg')
                }
            ]
        }
    }
}
</script>
