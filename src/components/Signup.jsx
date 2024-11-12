import React from 'react'
import authservice from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import SigninFormpart2 from './Signin/Sign-in-Form-part2'
import Signinbutton from './Signin/Signinbutton'
import InputForm from './Signin/InputForm'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error,seterror] = React.useState("")

    const createuser=async(data)=>{
      seterror("")
      try{
        const userdata = await authservice.CreateAccount(data)
        if(userdata){
          const userdata = await authservice.getCurrentUser()
          if(userdata){
            dispatch(login(userdata))
            navigate('/home')
          }
        }
      }
      catch(error)
      {
        seterror(error.message)
      }
          }
        
  return (
    <div className=" flex justify-center items-center ">
      <div className=" bg-white w-96  rounded-3xl">
        <div className=" text-black font-pacifico text-center text-xl pt-2">
          <h1>sign up</h1>
        </div>
        <div className=" flex justify-center items-center">
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form className='flex justify-center items-center' onSubmit={handleSubmit(createuser)}>
            <div className="  ">
            <div className="m-7">
                <InputForm
                  name="name"
                  
                  type="name"
                  {...register("name", {
                    required: true,})}
                />
              </div>
              <div className="m-7">
                <InputForm
                  name="email"
                  
                  type="email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Email address must be a valid address",
                    },
                  })}
                />
              </div>
              <div className="m-7">
                <InputForm name="password" 
                type="password"
                
                {...register("password", {
                    required: true,
                })} />
              </div>
              <div className="flex justify-center items-center mb-2">
              <button type="submit" onClick={createuser} className="h-10 flex justify-center items-center bg-black text-white font-bold  px-3 m-1 rounded-xl border-2 border-solid border-white hover:scale-105 hover:bg-white hover:text-black duration-500 hover:border-black font-mono hover:border-2 font-spacemono">sign up</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup