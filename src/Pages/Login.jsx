// import React from 'react'
import Git from '../images/Git.png';
import FB from '../images/Face.png';
import Twi from '../images/Twi.png';
import Google from '../images/Google.png';

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center '>
            <h1 className='text-4xl font-serif absolute hidden'> Choose a Login Method </h1>

            <div className='w-3/5 h-3/4 rounded-lg flex flex-row pl-10 items-center m-10 bg-slate-500'>

                  <div className='flex-1 flex flex-col items-center cursor-pointer'>
                            <div>
                                  <img src={Git} alt="" className='w-24 hover:w-28'/>
                          </div>
                            <div>
                                  <img src={FB} alt=""  className='w-20 hover:w-24'/>
                          </div>
                            <div>
                            <img src={Twi} alt=""  className='w-20 hover:w-24'/>
                            
                          </div>
                            <div>
                                  <img src={Google} alt="" className='w-16 hover:w-20'/>
                          </div>
                  </div>
                
                  <div className='h-full flex items-center justify-center relative'>
                      <div className='h-2/5 bg-violet-300 w-px absolute  top-0 bottom-2'/>
                      <div className='border-violet-300 border-4 rounded-full p-5 font-bold font-mono ' > OR </div>
                      <div className='h-2/5 bg-violet-300 w-px absolute   bottom-0'/>
                  </div>

                           <div className='flex-1 flex flex-col items-center flex-wrap'>
                                <input type="text"  placeholder='Enter Username' className='mt-4 border-none bg-inherit border-b-2 text-white font-bold placeholder:text-white'/>
                                <input type="text"  placeholder='Enter Password' className='mt-3 border-none bg-inherit border-b-2 text-white font-bold placeholder:text-white '/>
                                  <button className='border-violet-300 border-2 rounded-lg bg-red-500 pt-2 pb-2 pl-5 pr-5 mt-4'  >
                                          Submit
                                  </button>
                        </div>
            </div>
    </div>
  )
}

export default Login