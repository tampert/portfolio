import React, { useState, useEffect} from 'react';
import Hero from './Hero';

const Dota = () => {
    const [heros, setHeros] = useState([])
  
    useEffect(() =>{
      fetchHeros();
    }, [])
  
    const fetchHeros = async () => {
      const data = await fetch('https://api.opendota.com/api/heroStats');
      const items = await data.json();
      console.log(items)
      setHeros(items)
    }
  
    return (
      <div className='route heros'>{heros.map((hero,index) =>{
        return (
        <Hero key={index} name={hero.localized_name} image={hero.img}></Hero>
        )
      })}</div>
    )
  }
  export default Dota;