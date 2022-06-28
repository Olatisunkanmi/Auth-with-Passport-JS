import React from 'react'
import { posts } from '../data';
import {Card} from './Card'


const Home = () => {
  return (
    <div className='flex flex-row justify-center items-center p-10 ml-20 mr-20'>
    {posts.map(posts => (
        <Card  
        className=''
            key={posts.title}
        posts={posts}
           />
    ))}
    </div>
  )
}

export default Home