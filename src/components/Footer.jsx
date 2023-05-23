import React from 'react'

function Footer() {
  return (
    <div name="contact" className='w-full h-129'>
      
      <div className='snap-y px-9 mx-9 my-10 py-8'>
            <p className='text-8xl border-b-4'>Contact
            & Catch Me</p>
      </div>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
       
      <div class="transition ease-in-out bg-white delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-950 hover:text-white duration-300 flex flex-col mx-auto py-8 box-border items-center h-1/4 w-1/2 border-4 rounded-lg border-black  hover:box-content">
      <p>mohammedabdul99@gmail.com</p>
      </div>
      
      <div class="text-lg transition ease-in-out bg-white delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-950 hover:text-white duration-300 flex flex-col mx-auto py-8 my-16 items-center box-border h-1/4 w-1/2 border-4 border-black rounded-lg">
      <p>+919894825590</p>
      </div>
      
      </div>
    </div>
  )
}

export default Footer