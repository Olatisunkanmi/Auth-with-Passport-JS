import React from 'react'
import image from '../images/pro.jpeg'

const Navbar = () => {
  const user = false;
  return (
    <div className='h-16 justify-around bg-gray-800 text-white flex  items-center flex-wrap'>
          <span className='font-bold text-xl'> Authentication With PassPort JS</span>
          <ul className='flex items-center list-none  '>
          <img src={image} alt="" className='w-10 h-10 rounded-full mr-3 p-1 cursor-pointer' />
          <li className='mr-3 font-bold cursor-pointer'> John Doe </li>
      { user ?
        <li className='mr-3 font-bold cursor-pointer p-2 m-1 bg-slate-400'> Logout  </li>
          :  <li className='mr-3 font-bold cursor-pointer p-2 m-1 bg-slate-400'> Login  </li>

      }            
          </ul>
    </div>
  )
}

export default Navbar