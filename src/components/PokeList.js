import React from 'react';
import PokeCard from './PokeCard';

const renderList = props => {
	return props.pokemones.map((item, index) => {
		return <PokeCard key={index} pokemones={item} />;
	});
};

const PokeList = props => {
	return <ul className='pokemones__list'>{renderList(props)}</ul>;
};

export default PokeList;