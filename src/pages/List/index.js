// Igual, confere
import React, {useEffect} from 'react';
import Car from '../../components/Car';
// usando hooks, qual estado trago: (reducer)
import {useSelector, useDispatch} from 'react-redux'

// importar action fatchActions
import {getAllCars} from '../../store/fetchActions/'

// Remover para usar initial_state
// const cars = [];

export default function List() {
	// selector retorna para mim meu estado (state)
	// Redux: state nesse caso pega de apenas um reducer
	const cars = useSelector((state) => state.cars);
	const dispatch = useDispatch();

	// console.log("Carros vazio",getAllCars)

	// Similar ao componentDidMount e componentDidUpdate:
	 useEffect(
		 () => {
		// Atualiza o titulo do documento usando a API do browser
		dispatch(getAllCars())
		// console.log("Carros: ",getAllCars())
	  }, 
	  [dispatch]
	);

	function addItemCart(car){
		console.log(car)
	}

	return (
		<div className="container-fluid">
			<div className="row">{cars.map(
				(car, index) => <Car key={index} car={car} addItemCart={addItemCart} />)}
			</div>
		</div>
	);
}
