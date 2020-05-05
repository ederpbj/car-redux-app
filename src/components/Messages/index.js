import React from 'react'

import Message from '../Message'
// usar o state
import {useSelector} from 'react-redux'

import './styles.css'

export default function Messages() {
    const {messages} = useSelector((state) => state.layout)
    
    // console.log(messages)
    
    /* <Message message="Item adicionado com sucesso!!!" /> */
    
    return (
        <div className="messages">
            {messages.map((msg, index) => <Message key={index} message={msg} />)}
        </div>
    )
}
