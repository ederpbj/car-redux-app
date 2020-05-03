import api from '../../services/api'
import {addCars, addCar} from '../ducks/cars'

// Faz chamadas no back-end
// Quando a aplicação iniciar chama essa action
// Pega do DB
export const getAllCars = () => {
    return (dispatch) => {
        api 
            .get('/cars')
            .then((res) => {
                dispatch(addCars(res.data))
            })
                // .the(res => console.log(res)) // v1
                .catch(console.log())
    }
}

// Action que adiciona carro
// Grava no DB
export const addCarFetch = (car) => {
    return (dispatch) => {
        api.post('/cars', car)
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