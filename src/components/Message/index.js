import React, {useEffect} from 'react'

import {useDispatch} from 'react-redux'
import {removeMessage} from '../../store/ducks/layout'


export default function Message({message}) {
    const dispatch = useDispatch()

    // após 2,5 segundo adicioa e remove a msg na tela
    // Quando montar ou desmontar o componente
    useEffect(() => {
        setTimeout(() => {
            dispatch(removeMessage(message))
        }, 2500)
    }, [dispatch, message])

    return (
        <div className="container mt-3">
            <div className="alert alert-success" role="alert">
                {message}
            </div>
        </div>
    )
}
