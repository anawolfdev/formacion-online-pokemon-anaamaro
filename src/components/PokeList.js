import React from 'react';
import PokeCard from './PokeCard';

const renderList = props => {
	return props.pokemons.map((pokemon, index) => {
		return <PokeCard key={index} pokemon={pokemon} />;
	});
};

const PokeList = props => {
	return <ul className='pokemon__list'>{renderList(props)}</ul>;
};

export default PokeList;