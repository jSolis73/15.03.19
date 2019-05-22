import VueRouter from 'vue-router'
import Home from './pages/Home'
export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        }
    ],
    mode: 'history'
})