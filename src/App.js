import React from 'react';
import getData from './api/Api';
import getEvolData from './api/EvolApi';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

let pokemonesFilter = [];

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			pokemones: [],
			evolutions: [],
			filter: ''
		};

		this.handleFilter = this.handleFilter.bind(this);
	}

	componentDidMount() {
		getData().then(pokemones => {
			this.setState({
				pokemones: pokemones
			});
		});
		getEvolData().then(evolutions => {
			this.setState({
				evolutions: evolutions
			})
		})
	}

	handleFilter(event) {
		const pokeFilter = event.target.value;
		this.setState({
			filter: pokeFilter
		});
	}

	render() {
		pokemonesFilter = this.state.pokemones.filter(pokemones => {
			return pokemones.name
				.toUpperCase()
				.includes(this.state.filter.toUpperCase());
		});

		return (
			<div className='app'>
				<h1 className='title'>
				</h1>
				<BrowserRouter>
					<Switch>
						<Route
							exact path='/'
							render={() => {
								return (
									<Home
										filter={pokemonesFilter}
										handleFilter={this.handleFilter}
									/>
								);
							}}
						/>

						<Route path='/pokemon__detail/:pokemonesId'
							render={RouteProps => {
								return (
									<PokeDetail
										RouteProps={RouteProps}
										pokemones={pokemonesFilter}
									/>
								);
							}}
						/>
					</Switch>
				</BrowserRouter>

			</div>
		);
	}
}

export default App;
