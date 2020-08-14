// Write your Character component here
import React from 'react';
import Planets from './Planets'
import styled, {keyframes} from 'styled-components'

const Character = ({info}) => {
   
    const StyledContainer = styled.div`
    opacity: .7;
    border: solid 5px black;
    border-bottom: none;
    width: 75vw;
    margin-left: 10%;
    margin-bottom: 0;
    padding: 0;
    padding-bottom: 1%;
    padding-right: 4%;
   
    `

    const StyledCharacter = styled.div`
    display: flex;
    opacity: .7;
    border: solid 5px black;
    border-top: none;
    width: 75vw;
    align-items: center;
    margin-left: 10%;
    margin-top: 0;
    font-family: 'Source Code Pro';
    justify-content: space-between;
    padding-bottom: 2%;
    padding-top: 0;
    padding-left: 2%;
    padding-right: 2%;
    `

    return (
        <>
        <StyledContainer className='container'>
        <h2>Character Name: {info.name}</h2>
        </StyledContainer>
      <StyledCharacter className="character">
       
         <h3>Height: {info.height}</h3>
         <h3>Mass: {info.mass}</h3>
        <h3>Hair Color: {info.hair_color}</h3>
        <h3>Skin Color: {info.skin_color}</h3>
        <h3>Eye Color:{info.eye_color} </h3>
    <h3>Birth Year: {info.birth_year}</h3>
        <h3>Gender: {info.gender}</h3>       
      </StyledCharacter>
     
      </>
    );
  }
  
  export default Character;