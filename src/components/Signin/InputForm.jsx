import React, { useId } from 'react'
import styled from "styled-components";
import SigninFormpart2 from "./Sign-in-Form-part2";
import Signinbutton from "./Signinbutton"


function InputForm({name,label,type='text',className='',...props},ref) {
    const Id =useId();
    const StyledWrapper = styled.div`
  

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
  font-weight: bold;
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
  font-weight: bold;
}



.inputBox1 input:valid~span,
.inputBox1 input:focus~span {
  transform: translateX(170px) translateY(-25px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

// 

`;

  return (
    <StyledWrapper>
    <div className="inputBox1 bg-white">
    {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={Id}>
                {label}
            </label>
            }
          <input type={type} ref={ref} id={Id} {...props} required />


          <span className="user">{name}</span>
        </div>
  </StyledWrapper>
  )
}

export default React.forwardRef(InputForm)