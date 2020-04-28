import {createStore} from 'redux';

// caso state seja undefined retorna array vazio
function reducer(state = [], action) {
    return state
}

export default createStore(reducer)
