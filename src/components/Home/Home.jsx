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
      <main>
        <div>
            <NavLink
         
         to="/play"
         className={()=>
            `px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600  `
         }
         >
          PLAY
        
        </NavLink>
        </div>
      </main>
    </div>
  );
}

export default App;

