import React from 'react';
import { Link } from 'react-router-dom';

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
			<Link
				to={`/pokemon__detail/${props.pokemones.id}`}
				className='pokemon__link'
			>
				<div className="pokemones__img">
					<img
						src={props.pokemones.url}
						alt={props.pokemones.name}
						title={props.pokemones.name}
					/>
					<h2 className='pokemon__id'>ID / {props.pokemones.id}</h2>
				</div>
				<div className='pokemon__card'>
					<h2 className='pokemon__name'>{props.pokemones.name}</h2>
					<ul className='pokemon__types'>{PokeTypes(props)}</ul>
				</div>
			</Link>
		</li>
	);
};

export default PokeCard;

