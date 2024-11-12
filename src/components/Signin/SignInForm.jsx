import React from 'react'
import styled from "styled-components";
import SigninFormpart2 from "./Sign-in-Form-part2";
import Signinbutton from "./Signinbutton"

function SignInForm() {
 
    const StyledWrapper = styled.div`
  .singup {
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
  margin-top: 1.5em;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 300px;
  flex-direction: column;
  gap: 25px;
  
  background: #e3e3e3;
  box-shadow: 0px 1px 20px 6px #fefefe;
  border-radius: 25px;
}

.inputBox,
.inputBox1 {
  position: relative;
  width: 250px;
}

.inputBox input,
.inputBox1 input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  color: #000;
  font-size: 1em;
  background: transparent;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  transition: 0.1s;
  border-bottom-left-radius: 8px;
}

.inputBox span,
.inputBox1 span {
  margin-top: 5px;
  position: absolute;
  left: 0;
  transform: translateY(-4px);
  margin-left: 10px;
  padding: 10px;
  pointer-events: none;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  transform: translateX(113px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.inputBox1 input:valid~span,
.inputBox1 input:focus~span {
  transform: translateX(156px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.inputBox input:valid,
.inputBox input:focus,
.inputBox1 input:valid,
.inputBox1 input:focus {
  border: 2px solid #000;
  border-radius: 8px;
}

`;

  return (
    <StyledWrapper>
    <div className="container">
      <div className="card">
        <a className="singup">Sign Up</a>
        <div className="inputBox1">
          <input type="text" required />
          <span className="user">Email</span>
        </div>

        {/* <div className="inputBox">
          <input type="text" required />
          <span>Username</span>
        </div> */}

        <div className="inputBox">
          <input type="password" required />
          <span>Password</span>
        </div>
       <Signinbutton/>
       <SigninFormpart2/>
        
      </div>
    </div>
  </StyledWrapper>
  )
}

export default SignInForm