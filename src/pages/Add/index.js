import React, {useState} from 'react';

// para disparar actions
import { useDispatch } from "react-redux";

// importar a actions
// import {addCar} from '../../store/ducks/cars'
import { addMessage} from '../../store/ducks/layout' //v4
// import {showMessage, hideMessage} from '../../store/ducks/layout' //v1 e v3
// import {Creators as CreatorsLayout} from '../../store/layout' //v2

import {addCarFetch} from '../../store/fetchActions'

export default function Add() {
	const [form, setForm] = useState({name: '', url: ''});
	// para disparar actions
	const dispatch = useDispatch();

	// captura dados do formulário
	function formChange(e){
		// console.log(e.target.name);
		setForm({...form, [e.target.name]: e.target.value })

		
	}

	function onSubmit(e){
		e.preventDefault();

		// const {hideMessage, showMessage} = CreatorsLayout; //v2
		
		// console.log("Formulário: ",form)
		// passar para action, 
		// dispara uma action
		console.log(form)
		dispatch(addCarFetch(form));
		// dispatch(addCar(form));

		// Zerar form
		setForm({name: '', url: ''});

		dispatch(addMessage('Cadastrado com sucesso!'))
		
		// Message v1
		// disparar
		/* dispatch(showMessage());

		// apagar message
		setTimeout(() => {
			dispatch(hideMessage());
		}, 2500); */
	}

	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input 
					onChange={formChange} 
					type="text" 
					name="name" 
					className="form-control" 
					placeholder="Nome..." 
					value={form.name}
				/>
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input 
					onChange={formChange}
					type="text" 
					name="url" 
					className="form-control" 
					placeholder="URL:https://cars" 
					value={form.url}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}