import React from 'react';

const PokeTypes = props => {
	return props.pokemon.types.map((type, index) => {
		return (
			<li className='pokemon__skills' key={index}>
				{type}
			</li>
		);
	});
};

const PokeCard = props => {
	return (
		<li className='pokemons' key={props.pokemon.id}>
			<img
				src={props.pokemon.url}
				alt={props.pokemon.name}
				title={props.pokemon.name}
			/>
			<div className='pokemon__card'>
				<h2 className='pokemon__name'>{props.pokemon.name}</h2>
				<ul className='pokemon__types'>{PokeTypes(props)}</ul>
			</div>
		</li>
	);
};

export default PokeCard;

