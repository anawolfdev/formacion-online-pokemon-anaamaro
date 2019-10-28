import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokeDetail = props => {

	const { RouteProps, pokemones } = props;
	const pokemonId = parseInt(RouteProps.match.params.pokemonId);
	//const evolutionId = parseInt(RouteProps.match.params.evolutionId);
	const pokemon = pokemones.find(item => item.id === pokemonId);
	//const evolution = evolutions.find(item => item.id === evolutionId);


	if (pokemon) {
		const { url, name, height, weight, abilities } = pokemon;
		//const { level, species } = evolution;
		return (
			<React.Fragment>
				<div className='pokemon__detail'>
					<Link to='/' className='pokemon__detail__link'>
						Volver
				</Link>

					<div className='pokemon__detail__wrap'>
						<img src={url} alt={name} />
						<ul className='pokemon__detail__descriptions'>
							<h2 className='pokemon__detail__name'>{name}</h2>
							<li className='pokemon__detail__height'>
								Height: {height}
							</li>
							<li className='pokemon__detail__weight'>
								Weight: {weight}
							</li>
							<li className='pokemon__detail__abilities'>Abilities: {abilities}</li>
							<li className='pokemon__detail__level'>
							</li>
							<li className='pokemon__detail__species'>
							</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<Link to='/' className='app__back'>
					Volver al listado
        </Link>
			</React.Fragment>
		);
	}
}

PokeDetail.propTypes = {
	RouteProps: PropTypes.object,
	pokemones: PropTypes.arrayOf(PropTypes.object)
};

export default PokeDetail;