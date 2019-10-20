import React from 'react';

class PokeFilter extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor='pokefilter'>
					<input className='poke__input'
						type='text'
						id='name'
						name='name'
						onChange={this.props.handleFilter}
						placeholder='Filtra pokemons por nombre...'
					/>
				</label>
			</div>
		);
	}
}

export default PokeFilter;