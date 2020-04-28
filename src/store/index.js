import {createStore, combineReducers} from 'redux';

import carReducer from './cars'

const rootReducer = combineReducers({
	cars: carReducer,
})

export default createStore(rootReducer)
