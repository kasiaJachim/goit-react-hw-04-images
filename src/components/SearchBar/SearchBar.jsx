import { useState } from 'react';
import css from './searchBar.module.css';

import PropTypes from 'prop-types';

const SearchBar = props => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(searchValue);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchButton}>
          <span className={css.searchButtonLabel}>Search</span>
        </button>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </form>
    </header>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
