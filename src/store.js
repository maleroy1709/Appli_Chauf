import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth.js'
import globalAxios from 'axios'
import VueLocalStorage from 'vue-localstorage'




Vue.use(Vuex)
Vue.use(VueLocalStorage)


export default new Vuex.Store({

    state: {
        access: null,
        userId: null,
        user: null,
        refresh: null,
        ent: null,
        client: null,
        chois_cli: null,
        RecP: null
    },
    mutations: {
        authUser(state, userData) {
            globalAxios.defaults.headers.common['Authorization'] = `Bearer ${userData.access}`
            state.access = userData.access
            state.refresh = userData.refresh
            Vue.localStorage.set('Access', userData.access)
            Vue.localStorage.set('Refresh', userData.refresh)
        },
        storeUser(state, user) {

            state.user = user
        },
        storeEnt(state, ent) {
            state.ent = ent
        },
        storeCli(state, client) {
            state.client = client
        },
        storeRecp(state, RecP) {
            state.RecP = RecP
        }
    },
    actions: {
        signup({ commit, dispatch }, authData) {
            console.log(authData)
            axios.post('v1/user/create/', {
                    username: authData.username,
                    password: authData.password,
                    first_name: authData.prenom,
                    last_name: authData.nom,
                    email: authData.mail,
                    returnSecureToken: true,
                })
                .then(res => {
                    Vue.localStorage.set('username', authData.username)
                    Vue.localStorage.set('password', authData.password)
                    console.log(res)
                    dispatch('storeUser', authData)
                })
                .catch(error => console.log(error))
        },
        login({ commit }, authData) {
            axios.post('/token/', {
                    username: authData.username,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => {
                    Vue.localStorage.set('username', authData.username)
                    Vue.localStorage.set('password', authData.password)
                    console.log(res.statusText)
                    commit('authUser', {
                        access: res.data.access,
                        refresh: res.data.refresh
                    })
                })
                .catch(error => console.log(error))
        },
        storeUser({ commit, state }, userData) {
            if (!state.access) {
                return
            }
            globalAxios.post('v1/user.json' + '?auth=' + state.access, userData)
                .then(res => {
                    console.log(res)
                })
                .catch(error => console.log(error))
        },
        /*storeCli({ commit, state }, userData) {
            if (!state.access) {
                console.log('coucou storeCli')
                return
            }
            globalAxios.post('v1/user.json' + '?auth=' + state.access, userData, {
                    headers: { "Authorization": `Bearer ${state.access}` }
                })
                .then(res => {

                    console.log(res)
                })
                .catch(error => console.log(error))
        },*/
        createRecp({ commit, state }, Data) {
            axios.post('v1/documents/doc4-v1/', {
                    date: Data.date,
                    signature_client: Data.signature_client,
                    comb_liquide: Data.comb_liquide,
                    returnSecureToken: true
                }, {
                    headers: { "Authorization": `Bearer ${state.access}` }
                })
                .then(res => {
                    console.log(res)
                    this.dispatch("fetchRecp");
                    //this.dispatch('storeCli', authData)
                })
                .catch(error => console.log(error))
        },
        createCli({ commit, state }, authData) {
            axios.post('v1/clients/', {
                    nom: authData.nom,
                    prenom: authData.prenom,
                    entreprise: authData.entreprise,
                    rue: authData.rue,
                    code_postal: authData.cp,
                    localite: authData.loc,
                    tel: authData.tel,
                    mail: authData.mail,
                    loc_generateur: authData.loc_generateur,
                    returnSecureToken: true
                }, {
                    headers: { "Authorization": `Bearer ${state.access}` }
                })
                .then(res => {
                    console.log(res)
                    this.dispatch("fetchCli");
                    console.log('liste cli')
                    console.log(state.client.results)
                        //this.dispatch('storeCli', authData)
                })
                .catch(error => console.log(error))
        },
        fetchRecp({ commit, state }) {
            if (!state.access) {
                return
            }
            globalAxios.get('/v1/documents/doc4-v1/', {
                    headers: { "Authorization": `Bearer ${state.access}` }
                })
                .then(res => {
                    commit('storeRecp', res.data)
                })
                .catch(error => {
                    console.error("fail in");
                    console.log(error)
                })
        },
        fetchEnt({ commit, state }) {
            if (!state.access) {
                return
            }
            globalAxios.get('/v1/entreprise/', {
                    headers: { "Authorization": `Bearer ${state.access}` }
                })
                .then(res => {
                    console.log('enter in entreprise')
                    console.log(res)
                    commit('storeEnt', res.data)
                })
                .catch(error => {
                    console.error("fail in");
                    console.log(error)
                })
        },
        fetchCli({ commit, state }) {
            if (!state.access) {
                return
            }
            globalAxios.get('/v1/clients/', {
                    headers: { "Authorization": `Bearer ${state.access}` }
                })
                .then(res => {
                    console.log('enter in client')
                    console.log(res)
                    commit('storeCli', res.data)
                })
                .catch(error => {
                    console.error("fail in");
                    console.log(error)
                })
        },
        fetchUser({ commit, state }) {
            if (!state.access) {
                return
            }
            globalAxios.get('v1/user/', {
                    headers: { "Authorization": `Bearer ${state.access}` }
                })
                .then(res => {
                    console.log('enter in')
                    console.log(res)

                    commit('storeUser', res.data)
                })
                .catch(error => {
                    console.error("fail in");
                    console.log(error)
                })

        }
    },
    getters: {
        user(state) {

            return state.user
        }
    }
});