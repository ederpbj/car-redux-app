// Testar types de layout actions
import reducer from './index';

describe('Layout Reducer', () => {
    // Types
    describe('Actions Types', () => {
        // teste default
        test('deve retornar o state inicial', () => {
            expect(reducer(undefined, {})).toEqual({showMessage: false});
        })
        // teste true
        test('deve retornar o state com a props showMessage= true', () => {
            expect(reducer(undefined, {type: 'SHOW_MESSAGE'})).toEqual({showMessage: true});
        })
        
        // teste false
        test('deve retornar o state com a props showMessage= false', () => {
            expect(reducer(showMessage: true, {type: 'HIDE_MESSAGE'})).toEqual({showMessage: false});
        })
       
    })
    
})