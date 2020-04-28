import {createStore, combineReducers} from 'redux';

import carReducer from './cars'
import layoutReducer from './layout'

// state global da aplicação
const rootReducer = combineReducers({
	cars: carReducer,
	layout: layoutReducer,
})

export default createStore(rootReducer)
