import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
})



axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

//instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance