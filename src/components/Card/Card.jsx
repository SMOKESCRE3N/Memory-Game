import React from 'react'


function Card({name, image, onClick}) {
  return (
    <>
    <div  
        className='flex flex-col items-center w-11/12 h-11/12 p-5 border-2  rounded-lg justify-center shadow-xl 
       transition-transform group bg-blue-300 cursor-pointer hover:bg-blend-hard-light'
        onClick={onClick}>
        <div className='w-full h-full flex items-center justify-center  bg-blue-500 border-2 border-gray-400 rounded-lg '
                        
             
        >
            <img 
            src={image}
            alt={name}
            className="w-full h-60 overflow-auto  group-hover:scale-120 transition-transform"
            />
        </div>
        <h2 className='text-center mt-2 text-lg font-serif font-extrabold text-black text-wrap italic'>{name.toUpperCase()}</h2>

    </div>
    </>
  )
}

export default Card

