import VueRouter from 'vue-router'
import Home from './pages/Home'
import People from './pages/People'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/team',
            component: People
        }
    ],
    mode: 'history'
})