import React from 'react';

const UnitToggle = ({ handleUnitToggle, unit }) => {
  return (
    <button onClick={handleUnitToggle}>
      Toggle to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
    </button>
  );
};

export default UnitToggle;

