import React, { useState } from 'react'


import Grid from '../Grid/Grid';
import { NavLink } from 'react-router-dom';

function Game() {
  const [score,setScore]=useState(0);
  const [bestScore,setBestScore]=useState(0);
  return (
    <>
    <header className='flex  border-2 shadow-lg bg-green-300 '>
        <div className='flex items-center justify-between w-full h-16 p-6 text-4xl '>
        <div className='font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-green-500 '>
            Score:{score}
        </div>
        <div>
          <NavLink
          to="/"
          className={()=>`flex items-center justify-center px-5 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-green-700`}
          >
          HOME 
          
          </NavLink>
        </div>
        
        <div className='font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-600'>
            Best Score:{bestScore}
        </div>
        </div>
    </header>
    <Grid setScore={setScore} score={score} setBestScore={setBestScore} bestScore={bestScore} />


    </>
  )
}

export default Game;


