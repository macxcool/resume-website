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
  </div>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
    letter-spacing: 0.1em;
    font-size: 50px;
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
</style>

<script>
export default {
    name: 'Portfolio',
    data() {
        return {
            searchQuery: "",
            currentTag: "",
            realizations: [
                {
                    name: "Mail API",
                    description: "Personal mail forwarding API",
                    image: require("../assets/images/portfolio/mail-api.webp"),
                    tags: [
                        "Golang",
                        "API"
                    ]
                },
                {
                    name: "This Website",
                    description: "My personal showcase website",
                    image: require("../assets/images/portfolio/this.webp"),
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
        }
    }
}
</script>
