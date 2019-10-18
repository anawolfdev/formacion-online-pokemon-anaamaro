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
		<li className='pokemones'>
			<div className="pokemones__img">
				<img
					src={props.pokemones.url}
					alt={props.pokemones.name}
					title={props.pokemones.name}
				/>
				<h2 className='pokemon_id'>ID/{props.pokemones.id}</h2>
			</div>
			<div className='pokemon__card'>
				<h2 className='pokemon__name'>{props.pokemones.name}</h2>
				<ul className='pokemon__types'>{PokeTypes(props)}</ul>
			</div>
		</li>
	);
};

export default PokeCard;

