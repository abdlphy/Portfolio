import React, { useState, useEffect} from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
import './nav.css'



function Navbar() {

   const [nav, setNav] = useState(false);
   const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(true);
        setTimeout(() => {
            setCount(false)
        },8000)
    },[])

    
    const links = [
       {
        id:1,
        link:'home'
       },
       {
        id:2,
        link:'about'
        },
      {
        id:3,
        link:'contact'
        },
    ]


  return (
  <div >
    {count ? (
      <div className='h-130 justify-center mx-auto flex'>
          
         
          <div class="slider-wrapper scale-150">
          
          <div class="slider scale-150">
              <div class="slider-text1 text-black text-5xl">Hello</div>
              <div class="text-black text-5xl">こんにちは</div>
              <div class="text-black text-5xl">Hola</div>
              <div class="text-black text-5xl">Bonjour</div>
              <div class="text-black text-5xl">Ciao</div>
              <div class="text-black text-5xl">سلام</div>

          </div>
        </div> 
      
   
  </div>
  ):(
  <div className='flex justify-between items-center w-full h-20 px-4 text-black bg-white'>
   
    <div className='text-1xl my-10 ml-2 '>
          <h1> © Code By Abdul</h1>
   
         
        </div> 
        
       <ul className='hidden md:flex'> 
       {links.map(({ id, link}) => (
         <li 
          key={id} 
          className='px-4 text-2xl my-10 cursor-pointer capitalize text-black hover:scale-105 duration-200'>
           <Link to={link} smooth duration={500}>
            {link}
           </Link>
        </li>
       ))}
        
       </ul>
      
       <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 my-8 overflow  md:hidden'>
         {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div> 
       
        {nav && ( <ul className='flex flex-col justify-center items-center w-1/4 h-screen bg-yellow-600 text-white'>
            
            {links.map(({ id, link}) => (
         <li 
          key={id} 
          className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            
          <Link onClick={() => setNav(!nav
            )} to={link} smooth duration={500}>
          {link}
            </Link>
            </li>
         ))}
        </ul>
       )}
       
       
          

    </div>
    )
    }
   </div> 
  )
}

export default Navbar