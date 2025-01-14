import React from 'react'
import Cinemala from '../image/Cinemala_with_slogan.png'
import Ram from '../image/ram.png'
import logo from '../image/logo1.png'

function Home() {
  return (
<div className='w-full h-full flex flex-col gap-5 justify-center items-center drop-shadow-[0_35px_35px_rgba(0,0,0,1)]'>
{/* <img src={logo} className='h-24 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]'/> */}
<img src={Ram} className='w-[96%] md:w-2/5 drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)]'/>
<div className='flex flex-row justify-between'>
     {/* Get started  */}
<div>
  <div className="flex items-center justify-center">
    <div className="relative group">
      <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
          <div className="relative z-10 flex items-center space-x-3">
            <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">Book Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
            </svg>
          </div>
        </span>
      </button>
    </div>
  </div>
</div>


</div>
</div>

  )
}

export default Home