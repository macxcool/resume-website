<template>
<div>
  <header>
    <router-link to="/" class="home">Achille</router-link>
    <router-link v-for="route in routes" :to="route.path" :key="route.name" class="desktop">{{ route.name }}</router-link>
    <button @click="toggleMenu"><img src="../assets/icons/bars.svg" /></button>
  </header>
  <nav v-show="showCollapsed" :style="{ maxHeight: maxHeight }">
      <router-link v-for="route in routes" :to="route.path" :key="route.name" class="mobile" @click="killMenu" :style="{ height: childHeight + 'px' }">{{ route.name }}</router-link>
  </nav>
</div>
</template>

<script>
export default {
    name: 'Header',
    created() {
        this.$router.options.routes.forEach(route => {
            if(route.isInMenu){
                this.routes.push({
                    name: route.name,
                    path: route.path
                })
            }
        })
    },
    data() {
        return {
            routes: [],
            showCollapsed: true,
            maxHeight: 0,
            childHeight: 50
        }
    },
    methods: {
        toggleMenu() {
            if (!this.showCollapsed){
                this.showCollapsed = true
            }
            if (this.maxHeight != 0){
                this.maxHeight = 0;
            } else {
                this.maxHeight = this.childHeight * this.routes.length + 'px'
            }
        },
        killMenu() {
            this.showCollapsed = false
        }
    }
}
</script>

<style lang="scss" scoped>
$menu-height: 50px;

button {
    outline: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: none;
}
button:hover {
    background-color: $hover-color;
}
img {
    width: 40px;
    height: 40px;
}
header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: $menu-height;
    border-bottom: 2px solid black;
    padding: $page-margin;
}
nav {
    display: none;
    flex-direction: column;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
}
a.desktop {
    padding: 0 15px;
    height: 100%;
    width: 125px;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
a.mobile {
    width: 100%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
}
.router-link-active {
    text-decoration: underline;
}
a:hover {
    background-color: #F8F8FF;
}
a.home {
    margin-right: auto;
    font-size: 40px;
    text-decoration: none;
}
a.home:hover {
    background-color: transparent;
}
@media all and (max-width: 1200px)
{
    header {
        padding: 0 0 0 10px;
    }
}
@media all and (max-width: 768px)
{
    .desktop {
        display: none !important;
    }
    button {
        display: block;
    }
    nav {
        display: flex;
    }
}
</style>
