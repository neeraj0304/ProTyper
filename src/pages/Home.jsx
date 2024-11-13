import React from 'react'
import Newbutton from '../components/Newbutton'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className=' flex h-[79vh] justify-center items-center text-center text-white text-m md:text-3xl'>
      <div className=''>
        <h1 className=' p-1 font-chivo'>WELCOME TO</h1>
        <h1 className=' p-1 font-special text-4xl text-cyan-500'>PROTYPER</h1>
        <h1 className='  pb-2 font-chivo'>LEARN TO SPEED UP YOUR PRODUCTIVITY<span className='text-cyan-500 font-bolder text-4xl'>!</span></h1>
        <Link to={"/practice"}><Newbutton name={"practice"}/></Link>
      </div>
    </div>
  )
}

export default Home