import {configureStore} from '@reduxjs/toolkit'

// import {createStore, combineReducers} from 'redux';

import carReducer from './ducks/cars'
import layoutReducer from './ducks/layout'

// Middleware e redux pronto
export default configureStore({
	reducer: {
		cars: carReducer,
		layout: layoutReducer
	}
})


// state global da aplicação
// Combine reducer //v1
/* 
const rootReducer = combineReducers({
	cars: carReducer,
	layout: layoutReducer,
}) 

export default createStore(rootReducer) //V1
*/