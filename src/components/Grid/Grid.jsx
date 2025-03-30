import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

// const fetchPokemon=async(count=12)=>{
//     const response=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
//     const data=await response.json();

//     return data.results.map((pokemon) => {
//         const id = pokemon.url.split("/").slice(-2, -1)[0]; // pokemon id
//         return {
//           name: pokemon.name,
//           //image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,     
//           //image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`, //high quality images
//           image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
//          // image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
//           id,
//         };
//       });
// }


const fetchPokemon = async (count = 12) => {
  const totalPokemon = 200; 
  
  // Generate an array of 12 unique random numbers within the total range
  const randomIds = new Set();
  while (randomIds.size < count) {
      randomIds.add(Math.floor(Math.random() * totalPokemon) + 1);
  }

  // Fetch details for each randomly selected Pokémon
  const pokemonPromises = [...randomIds].map(async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      return {
          name: data.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
          id,
      };
  });

  return Promise.all(pokemonPromises);
};


function Grid({ score, setScore, bestScore, setBestScore }) {
    const [pokemon,setPokemon]=useState([]);
    const [clickedPokemon, setClickedPokemon] = useState(new Set());
    useEffect(()=>{
        fetchPokemon(12).then(setPokemon);
    },[]);

    const handleClick = (name) => {
      if (clickedPokemon.has(name)) {
        // Reset score if Pokémon was already clicked
        setScore(0);
        setClickedPokemon(new Set());
      } else {
        // Increase score and update best score if necessary
        setScore(score + 1);
        if (score + 1 > bestScore) {
          setBestScore(score + 1);
        }
        setClickedPokemon(new Set([...clickedPokemon, name]));
      }
      setPokemon((prev) => [...prev].sort(() => Math.random() - 0.5));//shuffle cards after click
    }
   
  return (
    <div className='grid grid-cols-4 p-4 bg-blue-900'>
        {
            pokemon.map((p)=>(
                <Card key={p.id} name={p.name} image={p.image} onClick={() => handleClick(p.name)} />
            ))
        }
      
    </div>
  )
}

export default Grid;
