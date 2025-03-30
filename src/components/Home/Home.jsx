// import React from 'react'

// function Home() {
//   return (
//   <>
//   <div>
//     <h2 className='text-4xl font-bold '>Test your Memory!!</h2>
//   </div>
//   </>
//   )
// }

// export default Home
// src/App.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Test your Memory!!</h1>
      </header>
      <main >
        <div className='flex items-center justify-center'>
            <NavLink
         
         to="/play"
         className={()=>
            `px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600  `
         }
         >
          PLAY
        
        </NavLink>
        </div>

        <div className='  flex items-center justify-center text-xl pb-2 p-8 font-bold text-white'> 
          HOW TO PLAY
        </div>
          <div className='flex items-center justify-center'>
          <ul 
          className=' list-disc text-xl font-semibold text-white'>
            <li>Click each card only once to score.</li>
            <li>Clicking the same card twice resets your score.</li>
            <li>Cards shuffle after every click.</li>
          </ul>
          </div>
        
      </main>
    </div>
  );
}

export default App;

