// Write your Character component here
import React from 'react';
import Planets from './Planets'

const Character = ({info}) => {
   
    return (
      <div className="character">
          <h1 className='details'>Character Details</h1>
        <h2>Character Name: {info.name}</h2>
         <h4>Height: {info.height}</h4>
         <h4>Mass: {info.mass}</h4>
        <h4>Hair Color: {info.hair_color}</h4>
        <h4>Skin Color: {info.skin_color}</h4>
        <h4>Eye Color:{info.eye_color} </h4>
    <h4>Birth Year: {info.birth_year}</h4>
        <h4>Gender: {info.gender}</h4>
        <Planets/>
       
      </div>
    );
  }
  
  export default Character;