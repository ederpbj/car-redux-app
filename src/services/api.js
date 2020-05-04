import axios from 'axios'

/* 
const api ={
    baseUrl: 'http://localhost:4000'
}

export default axios.get(api.baseUrl) 
*/

export default axios.create({
    baseUrl: 'http://localhost:4000'
})
