import React from 'react';

const SearchBar = ({ city, setCity, handleCitySearch }) => {
  return (
    <form onSubmit={handleCitySearch}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

