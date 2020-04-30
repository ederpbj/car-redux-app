const INITIAL_STATE = {
    // Propriedade do state.layout
    showMessage: false
};

// Reducer para layout global
// ver reducer.test.js
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        //case 'SHOW_MESSAGE':
        case Types.SHOW_MESSAGE:
            return {...state, showMessage: true};
        case Types.HIDE_MESSAGE:
            return {...state, showMessage: false};
        default: 
            return state;
    }
}

// Para Testes
// Actions Types 
export const Types = {
    SHOW_MESSAGE: 'SHOW_MESSAGE',
    HIDE_MESSAGE: 'HIDE_MESSAGE'
};

// Para Testes
// Actions Creators
export const Creators = {
    // se colocar parenteses () pode retornar objeto direto
    showMessage: () => ({
        type: Types.SHOW_MESSAGE
    }),
    hideMessage: () => {
        return {
            type: Types.HIDE_MESSAGE
        }
    }
    
};

// actions antigo
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