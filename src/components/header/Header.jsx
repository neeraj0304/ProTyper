import React from 'react'
import Logoutbutton from './Logoutbuttton'
import { Link } from 'react-router-dom'
import Container from '../Container'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {




  return (
    <>
    <Container>
    <div className=' w-full h-16 flex justify-between items-center border-b-2  border-white '>
      <div className=' m-5 flex justify-center items-center text-center text-white'>
          <div className=' font-pacifico font-medium text-lg lg:text-2xl'>
          protyper
            </div>
      </div>


      <div className=' flex justify-center items-center text-center    m-1'>
        <ul className=' flex justify-center items-center mr-50'>
         
        </ul>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Header