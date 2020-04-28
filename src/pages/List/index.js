import React from 'react';
import Car from '../../components/Car';
// usando hooks, qual estado trago: (reducer)
import {useSelector} from 'react-redux'

// Removar para usar initial_state
// const cars = [];

export default function List() {
	// selector retorna para mim meu estado (state)
	// Redux: state nesse caso pega de apenas um reducer
	const cars = useSelector(state => state.cars)

	return (
		<div className="container-fluid">
			<div className="row">{cars.map(
				(car, index) => <Car key={index} car={car} />)}
			</div>
		</div>
	);
}
