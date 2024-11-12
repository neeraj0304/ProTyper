import React, { useState } from "react";
import InputForm from "./Signin/InputForm";
import UniversalButton from "./UniversalButton";
import SigninFormpart2 from "./Signin/Sign-in-Form-part2";
import LoginButton from "../components/LoginButton";
import { Link, useNavigate } from "react-router-dom";
import { login as authlogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authservice from "../appwrite/auth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, seterror] = useState("");

  const loginhandler = async (Data) => {
    seterror("");
    console.log("error at 1st");
    
    try {
      const session = await authservice.login(Data);
      console.log("error at 2nd");
      if (session) {
        const userdata = await authservice.getCurrentUser();
        console.log("error at 3rd");
        if (userdata) {
          dispatch(authlogin(userdata));
          navigate("/");
        }
      }
    } catch (error) {
      seterror(error.message);
      console.log("error at 4th");
    }
  };

  return (
    <div className=" flex justify-center items-center ">
      <div className=" bg-white w-96  rounded-3xl">
        <div className=" text-black font-pacifico text-center text-xl pt-2">
          <h1>login</h1>
        </div>
        <div className=" ">
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form className="flex justify-center items-center" onSubmit={handleSubmit(loginhandler)}>
            <div className="   ">
              <div className="m-7">
                <InputForm
                  name="email"
                  
                  type="email"
                  {...register("email", {
                    required: true,
                    // validate: {
                    //   matchPatern: (value) =>
                    //     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                    //       value
                    //     ) || "Email address must be a valid address",
                    // },
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
              <div className=" flex justify-center items-center mb-2">
                <button type="submit" onClick={loginhandler} className="h-10 flex justify-center items-center bg-black text-white font-bold  px-3 m-1 rounded-xl border-2 border-solid border-white hover:scale-105 hover:bg-white hover:text-black duration-500 hover:border-black font-mono hover:border-2 font-spacemono">login</button>
                
              </div>

            </div>
          </form>
        </div>

        {/* <div>
          <SigninFormpart2 />
        </div> */}




        <p className="mt-2 text-center text-base text-black/60 mb-2 ">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline hover:text-blue-800"
                    >
                        Sign Up
                    </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;




