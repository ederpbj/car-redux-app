import React, {useState} from 'react';

// para disparar actions
import { useDispatch } from "react-redux";

// importar a action cars
import {addCar} from '../../store/cars'

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
		console.log("Formulário: ",form)
		// passar para action, dispara uma action
		dispatch(addCar(form));
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