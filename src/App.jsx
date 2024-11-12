import { useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import SignInForm from './components/Signin/SignInForm'
import authservice from './appwrite/auth.js'
import {login, logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Typingbox from './components/Typingbox.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authservice.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className=' bg-black w-full   justify-center '>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ) : null
}
export default App
