import VueRouter from 'vue-router'
import Home from './pages/Home'
import People from './pages/People'
import About from './pages/About'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/team',
            component: People
        },
        {
            path: '/about',
            component: About
        }
    ],
    mode: 'history'
})