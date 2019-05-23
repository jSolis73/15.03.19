import VueRouter from 'vue-router'
import Home from './pages/Home'
import People from './pages/People'
import About from './pages/About'
import Vasiliy from './pages/people/Vasiliy'
import Semien from './pages/people/Semien'
import Anatol from './pages/people/Anatol'
import Stanislav from './pages/people/Stanislav'


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/team',
            component: People,
            children: [
                {
                    path: 'Vasiliy',
                    component: Vasiliy,
                    props: true
                    
                },
                {
                    path: 'Semien',
                    component: Semien
                },
                {
                    path: 'Anatol',
                    component: Anatol
                },
                {
                    path: 'Stanislav',
                    component: Stanislav
                }                                
            ]
        },
        {
            path: '/about',
            component: About
        }
    ],
    mode: 'history'
})