import {configureStore} from '@reduxjs/toolkit'

import {createStore, combineReducers} from 'redux';

import carReducer from './cars'
import layoutReducer from './layout'

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