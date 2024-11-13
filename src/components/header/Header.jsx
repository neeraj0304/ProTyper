import React from 'react'
import Logoutbutton from './Logoutbuttton'
import { Link } from 'react-router-dom'
import Container from '../Container'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {

const navigate = useNavigate()
const authStatus = useSelector(state => state.auth.status)

 const navitems =[
  {name:"HOME",path:"/"},
  {name:"ABOUT",path:"/about"},
 {name:"PRACTICE",path:"/practice"},]


  return (
    <>
    <Container>
    <div className=' w-full h-16 flex justify-between items-center border-b-2  border-white '>
      <div className=' m-5 flex justify-center items-center text-center text-white'>
          <div className=' font-pacifico font-medium text-lg lg:text-2xl'>
          <Link to={"/"}>protyper</Link>
            </div>
      </div>


      <div className=' flex justify-center items-center text-center text-white   m-1'>
        <ul className=' flex justify-center items-center '>
         {navitems.map((item)=>(
          <li className={`flex justify-center items-center text-center  font-zilla font-semibold text-xs md:text-lg lg:text-xl px-4  hover:text-yellow-500 hover:duration-300 hover:scale-105 ${window.location.pathname === item.path ? " text-cyan-500 duration-500 " : ""}`} key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
         ))}
        </ul>
      </div>
       <div></div>
    </div>
    </Container>
    </>
  )
}

export default Header