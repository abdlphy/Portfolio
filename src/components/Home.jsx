import React from 'react'
import Hero from '../assets/download.png'

function Home() {
  return (
     <div name='home' className='flex flex-col relative h-full w-full snap-center text-white scroll-smooth hover:scroll-auto'>
      
      <div className="-pb-17 flex flex-col justify-center w-screen h-screen bg-slate-950">
        <img src={Hero} alt="" className='scale-110'/>
         
         <div className='absolute flex flex-col bottom-80 right-14'>
           <h1 className='font-bold text-9xl transition ease-out delay-150 text-white hover:scale-110 hover:text-sky-300 duration-300 '>ABDUL RAHIM M</h1>
         </div>    

        <div className='max-h-lg text-4xl p-7 my-auto absolute bottom-0 '>
         <p className=' text-white box-border h-50 w-45 shadow-lg
         transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none shadow-cyan-500/50 p-4 border-4'>PORTFOLIO</p>
        </div>

      </div>
 
      
      </div>

   
    
      
      
  
  )
}

export default Home