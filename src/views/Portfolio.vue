<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <div class="menu">
      <input v-model="searchQuery" type="text" placeholder="What are you searching for?">
      <div class="tags">
        <h2 v-for="tag in uniqTags" :key="tag" @click="currentTag = tag">
          <strong v-if="tag == currentTag">
            {{ tag }}
          </strong>
          <span v-else>
            {{ tag }}
          </span>
        </h2>
        <img alt="Trash icon" @click="currentTag = ''" src="../assets/icons/trash.svg"/>
      </div>
    </div>
    <div class="list">
      <a v-for="realization in realizationsSubSet" :key="realization.name" :href="realization.link">
        <div class="card">
          <img :alt="realization.description" :src="realization.path"/>
          <div class="card-heading">
            <h3>{{ realization.name }}</h3>
            <p>{{ realization.description }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
    letter-spacing: 0.1em;
    font-size: 50px;
}
.list {
    display: flex;
    flex-wrap: wrap;
}
a {
    margin: 30px 60px 30px 0;
}
a:last-child {
    margin: 30px 0;
}
.card {
    width: 320px;
    height: 300px;
    border: 2px solid black;
}
.card img {
    width: 100%;
    border-bottom: 2px solid black;
}
.card-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
p {
    margin: 0;
}
.menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.menu h2 {
    margin: 15px;
    display: inline;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    padding: 5px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
}
.menu h2:first-child {
    margin: 15px 15px 15px 0;
    padding: 5px 5px 5px 0;
}
.menu h2:hover {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}
.menu img {
    display: inline;
    height: 20px;
    margin: 0 0 0 15px;
    cursor: pointer;
}
.tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.portfolio {
    margin: $page-margin;
}
input {
    border: 2px solid black;
    outline: none;
    background-color: transparent;
    padding: 10px;
    margin: 15px 0;
}
@media all and (max-width: 787px)
{
    a {
        margin: 30px 0;
    }
    .list {
        flex-direction: column;
        align-items: center;
    }
}
@media all and (max-width: 375px)
{
    .card {
        width: 250px;
        height: 234px;
    }
}
</style>

<script>
export default {
    name: 'Portfolio',
    data() {
        return {
            searchQuery: '',
            currentTag: '',
            realizations: [
                {
                    name: "Mail API",
                    description: "Personal mail forwarding API",
                    link: "https://github.com/achille-garin/mail-api",
                    path: require('../assets/images/portfolio/mail-api.jpg'),
                    tags: [
                        "Golang",
                        "API"
                    ]
                },
                {
                    name: "This Website",
                    description: "My personal showcase website",
                    link: "https://github.com/achille-garin/resume-website",
                    path: require('../assets/images/portfolio/this.jpg'),
                    tags: [
                        "Vue.js"
                    ]
                }
            ]
        }
    },
    computed: {
        uniqTags() {
            let result = []
            this.realizations.forEach(function(realization) {
                realization.tags.forEach(function(tag) {
                    if (!result.includes(tag)) {
                        result.push(tag)
                    }
                })
            })
            return result
        },
        realizationsSubSet() {
            let subSet = this.realizations
            if(this.currentTag != '') {
                subSet = subSet.filter(realization => realization.tags.includes(this.currentTag))
            }
            if(this.searchQuery != '') {
                let re = new RegExp(this.searchQuery, 'i')
                subSet = subSet.filter(realization => realization.name.match(re))
            }
            return subSet
        }
    }
}
</script>
