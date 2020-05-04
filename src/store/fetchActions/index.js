// Middleware
import api from '../../services/api'
import {addCars, addCar} from '../ducks/cars'

var axios = require('axios')


// Faz chamadas no back-end
// Quando a aplicação iniciar chama essa action
// Pega do DB

console.log("===>")
// Teste ok
/* var axios = require("axios")
var dados 
function lista() {
    return axios.get('http://localhost:4000/cars')
}

dados = lista()
dados.then(function(resposta){
    console.log(resposta.data);
}).catch(function(error){
    if(error){
        console.log(error)
    }
}); */
// <Teste

/* .then((res) => {
    dispatch(addCars(res.data))
}) */
export const getAllCars = () => {
    // Comunica com action
    return (dispatch) => {
        // console.log("host que veio==>: ",api.get())
        // api.get('/cars')
        axios.get('http://localhost:4000/cars')
            .then((res) => {dispatch(addCars(res.data))})
            // .then((res) => console.log(addCars(res.data)))
            .catch(console.log())
    }
}

// Action que adiciona carro
// Grava no DB
export const addCarFetch = (car) => {
    return (dispatch) => {
        // api.post('/cars', car)
        axios.post('http://localhost:4000/cars',car)
        .then((res) => dispatch(addCar(res.data)))
        // .the(res => console.log(res)) // v1
        .catch(console.log())
    }
}

// Consultas no browser Ex:
/* 
fetch('')
    .then()
    .catch 
*/
