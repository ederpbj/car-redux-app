// Reducer de cars
import {createAction, createReducer} from '@reduxjs/toolkit'
const INITIAL_STATE = []

// Action
export const addCar = createAction('ADD_CAR')
export const addCars = createAction('ADD_CARS')

// Reducer
export default createReducer(INITIAL_STATE, {
	[addCar.type]: (state, action) => [...state, action.payload],
	[addCars.type]: (state, action) => [...action.payload]
})

// state é inicializado pelo store
// caso de um redux só
/* V1
const INITIAL_STATE = [
	{
		name: 'Ferrari',
		url:
			'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	},
	{
		name: 'Mercedes',
		url:
			'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	},
	{
		name: 'Audi',
		url:
			'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
	}
]
*/

// caso state seja undefined state retorna array vazio []
// Setando initial_state com lista de carros
// Reducer V1
/* export default function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'ADD_CAR'){
        return [...state, action.car];
    }
    return state
} */

// Criando action V1
/* export const addCar = car => {
    return{
        type: 'ADD_CAR',
        car
    }
} */