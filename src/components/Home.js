import React, { Fragment } from 'react';
import PokeFilter from './PokeFilter';
import PokeList from './PokeList';
import PropTypes from 'prop-types';

const Home = props => {
  const { filter, handleFilter, pokemones } = props;

  return (
    <Fragment>
      <PokeFilter filter={filter} handleFilter={handleFilter} />
      <PokeList pokemones={pokemones} />
    </Fragment>
  );
};

Home.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;