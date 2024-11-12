import React from 'react'
import { logout } from '../../store/authSlice'
import authservice from '../../appwrite/auth'
import { useDispatch } from 'react-redux'

import UniversalButton from '../UniversalButton'


function Logoutbutton() {
  const dispatch =useDispatch()
  const logouthandler=()=>{
    authservice.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <UniversalButton
    onClick={logouthandler}
     name="Logout">
      
    </UniversalButton>
  )
}

export default Logoutbutton