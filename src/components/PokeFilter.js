import React from 'react';

class PokeFilter extends React.Component {
	render() {
		return (
			<div>
				<label htmlFor='pokefilter'>
					<input
						type='text'
						id='name'
						name='name'
						onChange={this.props.handleFilter}
						value={this.props.filter}
					/>
				</label>
			</div>
		);
	}
}

export default PokeFilter;