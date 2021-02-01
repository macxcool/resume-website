import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        isInMenu: false,
        component: Home
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        isInMenu: true,
        component: Portfolio
    },
    {
        path: '/about',
        name: 'About',
        isInMenu: true,
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        isInMenu: true,
        component: Contact
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
