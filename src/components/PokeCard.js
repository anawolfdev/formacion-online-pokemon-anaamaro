import React from 'react';

const PokeTypes = props => {
	return props.pokemones.types.map((type, index) => {
		return (
			<li className='pokemones__types' key={index}>
				{type}
			</li>
		);
	});
};

const PokeCard = props => {
	return (
		<li className='pokemones' key={props.pokemones.id}>
			<img
				src={props.pokemones.url}
				alt={props.pokemones.name}
				title={props.pokemones.name}
			/>
			<div className='pokemon__card'>
				<h2 className='pokemon__name'>{props.pokemones.name}</h2>
				<ul className='pokemon__types'>{PokeTypes(props)}</ul>
			</div>
		</li>
	);
};

export default PokeCard;

