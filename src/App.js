import React from 'react';
import getData from './api/Api';
import PokeList from './components/PokeList';
import PokeFilter from './components/PokeFilter';
import './App.css';

let pokemonsFilter = [];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      filter: ''
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    getData().then(pokemons => {
      this.setState({
        pokemons: pokemons
      });
    });
  }

  handleFilter(event) {
    const pokeFilter = event.target.value;
    this.setState({
      filter: pokeFilter
    });
  }

  render() {
    pokemonsFilter = this.state.pokemons.filter(pokemon => {
      return pokemon.name
        .toUpperCase()
        .includes(this.state.filter.toUpperCase());
    });

    return (
      <div className='app'>
        <h1 className='title'>
        </h1>
        <PokeFilter
          filter={pokemonsFilter}
          handleFilter={this.handleFilter}
        />
        <PokeList pokemons={pokemonsFilter}
        />
      </div>
    );
  }
}

export default App;
