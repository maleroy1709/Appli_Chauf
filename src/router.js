import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import tableau from './components/tableau.vue';

import ContPe from './components/taches/ContPe.vue';
import Rec from './components/taches/Rec.vue';
import Dep from './components/taches/Dep.vue';
import RecP from './components/taches/RecP.vue';
import IdCli from './components/taches/forms/IdCli.vue';
import Combustible from './components/taches/forms/Combustible.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/components/tableau',
        name: 'tab',
        components: {
            default: tableau
        }
    },
    {
        path: '/components/taches/ContPe',
        name: 'ContPe',
        components: {
            default: ContPe
        }
    },
    {
        path: '/components/taches/Rec',
        name: 'Rec',
        components: {
            default: Rec
        }
    },
    {
        path: '/components/taches/Dep',
        name: 'Dep',
        components: {
            default: Dep
        }
    },
    {
        path: '/components/taches/RecP',
        name: 'RecP',
        components: {
            default: RecP
        }
    },
    {
        path: '/components/taches/forms/IdCli',
        name: 'IdCli',
        components: {
            default: IdCli
        }
    },
    {
        path: '/components/taches/forms/Combustible',
        name: 'Combustible',
        components: {
            default: Combustible
        }
    },
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/signup',
        component: SignupPage
    },
    {
        path: '/signin',
        component: SigninPage
    },
    {
        path: '/dashboard',
        component: DashboardPage
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})