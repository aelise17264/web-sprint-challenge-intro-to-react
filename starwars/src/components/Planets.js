import React, {useEffect, useState} from 'react';
import axios from "axios";
import Planet from './Planet'


const Planets = () =>{
 const [planet, setPlanet] = useState([])

    let homeURL = 'https://swapi.py4e.com/api/planets/'
  //console.log(homeURL)
  useEffect(() => {
    axios.get(homeURL)
      .then((home) => {
       // console.log(home.data.results)
        setPlanet(home.data.results)
      })
  
      .catch(error => {
        console.log('Error, check home api')
      })
  
    },[])

    //console.log(planet)

    

    return (
        
        
        <div className="Planet">
          {planet.map(info => {
            return  <Planet key={info.id} info={info}/>
          })
         
        }
        </div>
        
      );
    }


export default Planets