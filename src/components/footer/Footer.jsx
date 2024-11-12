import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className=' w-full mt-0.5 items-center'>
    <div className=' h-16  border-white border-t-2 flex items-center align-center justify-between  ' >

    <div className='  font-medium text-xs md:text-lg pl-3 '>
      <a className=' flex' href="https://neerajsahu.netlify.app/"  target='_blank'>
      <h1 className=' text-white font-mono'>
        built by: 
          </h1> 
          <h1 style={{textDecoration:'underline'}} className='font-pacifico text-green-500 tracking-wide'>
           neerajsahu
          </h1>
          </a>
    </div>

    <div className=' text-white pr-3 font-inknut text-xs md:text-lg '>
    <a style={{textDecoration:'underline .1rem red'}} href="https://github.com/neeraj0304/protyper" target='_blank'>github repo</a>
    </div>

    </div>
    </div>
  )
}

export default Footer