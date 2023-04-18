import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView'
import ContactView from '../views/ContactView'

Vue.use(Router)

const router = new Router({
mode: 'history',
base: process.env.BASE_URL,
routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path:'/portfolio',
        name: 'portfolio',
        component: PortfolioView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    }
]

})

export default router;
