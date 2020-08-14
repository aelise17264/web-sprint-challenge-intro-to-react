import React from 'react';

const Planet = ({info}) => {
   
   function toggleButton(id){
       let details = document.getElementById('planetName')
       if(details.style.display == 'block'){
           details.style.display = 'none'
       }else{
           details.style.display = 'block'
       }
   }

    return (
      <>
      <button onClick='toggleButton()'>Home Planet Info</button>
      <div id='planetName' style='display: none'>
        <h4>Home Planet: {info.name}</h4>
    <h5>Climate: {info.climate}</h5>
    <h5>Population: {info.population}</h5>
    <h5>Terrain: {info.terrain}</h5>
    <h5>Gravity: {info.gravity}</h5>
    </div>
        </>
    );
  }
  
  export default Planet;