const INITIAL_STATE = {
    // Propriedade do state.layout
    showMessage: false
};

// Reducer para layout global
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SHOW_MESSAGE':
            return {...state, showMessage: true};
        case 'HIDE_MESSAGE':
            return {...state, showMessage: false};
        default: 
            return state;
    }
}

// actions
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