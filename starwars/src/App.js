import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
const [character, setCharacter] = useState([])

  let thisURL = 'https://swapi.py4e.com/api/people/'

useEffect(() => {
  axios.get(thisURL)
    .then((info) => {
      console.log(info.data.results)
      setCharacter(info.data.results)
    })

    .catch(error => {
      console.log('Error, check your api')
    })

  },[])

 // console.log(character)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map(info => {
        return  <Character key={info.id} info={info}/>
      })
     
    }
    </div>
  );
}

export default App;
