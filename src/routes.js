import VueRouter from 'vue-router'
import Home from './pages/Home'
import People from './pages/People'
import About from './pages/About'
import Info from './pages/Info'



export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/team',
            component: People
        },
        {
            path: '/Info/:iId',
            component: Info,
            name: 'Info'
        },
        {
            path: '/about',
            component: About
        }
    ],
    mode: 'history'
})