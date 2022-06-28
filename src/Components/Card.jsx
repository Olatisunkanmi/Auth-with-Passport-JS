import React from 'react'

export const Card =  ( { posts }) => {


  return (
    <div className='items-center   pl-5 pr-10 mt-24' >

    <div className='bg-slate-500 p-5 rounded-xl'>
         <span className='text-xl font-bold text-white'>{posts.title}</span>
                <img src={posts.img} alt='' className='h-80 w-full m-0 mt-3'/>
                <p className='mt-2 font-bold'> {posts.desc}</p>
                <button className='mt-5 p-2  font-bold bg-slate-700 text-white cursor-pointer
                 hover:bg-slate-200 hover:text-black'> Read More</button>
    </div>
           
    </div>
  )
}
