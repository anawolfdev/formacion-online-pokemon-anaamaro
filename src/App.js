import React from 'react';
import './App.css';
import getData from './api/Api';
import PokeFilter from './components/PokeFilter';
import PokeList from './components/PokeList';

let pokemonesFilter = [];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemones: [],
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
        <PokeFilter
          pokemones={pokemonesFilter}
          handleFilter={this.handleFilter}
        />
        <PokeList
        />
      </div>
    );
  }
}

export default App;
