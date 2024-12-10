import React from 'react';

const SavedCities = ({ savedCities, handleSavedCityClick }) => {
  return (
    <div className="saved-cities">
      <h3>Saved Cities</h3>
      <ul>
        {savedCities.map((city, index) => (
          <li key={index}>
            <button onClick={() => handleSavedCityClick(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCities;
