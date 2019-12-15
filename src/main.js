import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.get['Accepts'] = 'applications/json'


const reqInterceptor = axios.interceptors.request.use(config => {
    console.log(config)
    return config
})

const resInterceptor = axios.interceptors.response.use(res => {

    console.log(res)
    return res
})

axios.interceptors.response.use(
    function(response) {
        console.log('pas d erreur')
            // If the request succeeds, we don't have to do anything and just return the response
        return response
    },
    function(error) {
        const errorResponse = error.response
        if (isTokenExpiredError(errorResponse)) {
            return resetTokenAndReattemptRequest(error)
        }
        // If the error is due to other reasons, we just throw it back to axios
        return Promise.reject(error)
    }
)

function isTokenExpiredError(errorResponse) {
    if (errorResponse.data.code == 'token_not_valid') {
        return true
    }
    // Your own logic to determine if the error is due to JWT token expired returns a boolean value
}


let isAlreadyFetchingAccessToken = false;

// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers = [];

function resetTokenAndReattemptRequest(error) {
    console.log(store.state.refresh)
    try {
        const { response: errorResponse } = error;
        const resetToken = store.state.refresh; // Your own mechanism to get the refresh token to refresh the JWT token
        if (!resetToken) {
            // We can't refresh, throw the error anyway
            return Promise.reject(error);
        }
        /* Proceed to the token refresh procedure
        We create a new Promise that will retry the request,
        clone all the request configuration from the failed
        request in the error object. */
        const retryOriginalRequest = new Promise(resolve => {
            /* We need to add the request retry to the queue
            since there another request that already attempt to
            refresh the token */
            addSubscriber(access_token => {
                console.log("ici tu re" + access_token)
                errorResponse.config.headers.Authorization = 'Bearer ' + access_token;
                return resolve(axios(errorResponse.config));
            });
        });
        if (!isAlreadyFetchingAccessToken) {
            isAlreadyFetchingAccessToken = true;
            axios({
                method: 'post',
                url: '/refresh/',
                data: {
                    refresh: resetToken // Just an example, your case may vary
                }
            }).then(response => {
                console.log("coucou1");
                console.log(response.data)
                const newToken = response.data.access;
                store.access = newToken;
                onAccessTokenFetched(newToken);
            }).catch(err => {
                console.log("coucou2");
                console.log(err)
            });

        }
        return retryOriginalRequest;
    } catch (err) {
        return Promise.reject(err);
    }
}

function onAccessTokenFetched(access_token) {
    // When the refresh is successful, we start retrying the requests one by one and empty the queue
    subscribers.forEach(callback => callback(access_token));
    subscribers = [];
}

function addSubscriber(callback) {
    subscribers.push(callback);
}

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)




new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})