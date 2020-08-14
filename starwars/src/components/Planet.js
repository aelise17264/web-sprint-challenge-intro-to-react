import React from 'react';

const Planet = ({info}) => {
   
    return (
      <div className="planetName">
        <h4>Home Planet: {info.name}</h4>
    <h5>Climate: {info.climate}</h5>
    <h5>Population: {info.population}</h5>
    <h5>Terrain: {info.terrain}</h5>
    <h5>Gravity: {info.gravity}</h5>
        </div>
    );
  }
  
  export default Planet;