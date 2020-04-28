import React from 'react'

// conectar com redux
import {useSelector} from 'react-redux'

export default function Message() {
    // verificar dentro do state.layout
    const isShow = useSelector((state) => state.layout.showMessage)
    
    return (
        <React.Fragment>
            {/* Se for verdadeiro mostre */}
            {isShow && (
                <div className="container mt-3">
                    <div className="alert alert-success" role="alert">
                        Cadastro realizado com sucesso!
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
