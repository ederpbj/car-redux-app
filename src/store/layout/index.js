import {createAction, createReducer} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    // Propriedade do state.layout
    showMessage: false
};
// Actions v3
export const showMessage = createAction('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

// Reducer v3
export default createReducer(INITIAL_STATE, {
    [showMessage.type]: (state, action) => ({...state, showMessage: true}),
    [hideMessage.type]: (state, action) => ({...state, showMessage: false})
})

// Reducer para layout global v1
// ver reducer.test.js
/* export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case showMessage.type: //v2.2
            // case Types.SHOW_MESSAGE: //v2
            //case 'SHOW_MESSAGE': //v1
            return {...state, showMessage: true};
        case hideMessage.type:
            return {...state, showMessage: false};
        default: 
            return state;
    }
} */

// Para Testes
// Actions v2 Types 
/* export const Types = {
    SHOW_MESSAGE: 'SHOW_MESSAGE',
    HIDE_MESSAGE: 'HIDE_MESSAGE'
}; */

// Para Testes
// Actions v2 Creators
/* export const Creators = {
    // se colocar parenteses () pode retornar objeto direto
    showMessage: () => ({
        type: Types.SHOW_MESSAGE
    }),
    hideMessage: () => {
        return {
            type: Types.HIDE_MESSAGE
        }
    }
    
}; */

// actions v1 antigo 
/* 
export const showMessage = () => {
    return {
        type: 'SHOW_MESSAGE'
    }
}

export const hideMessage = () => {
    return {
        type: 'HIDE_MESSAGE'
    }
}
 */