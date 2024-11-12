import React from 'react'
import styled from "styled-components";
function UniversalButton({...props}) {
    
   


    return (
      <button className=' h-10 flex justify-center items-center bg-black text-white font-bold  px-3 m-1 rounded-3xl border-2 border-solid border-white hover:scale-105 hover:bg-white hover:text-black duration-500 hover:border-red-500 font-mono hover:border-2'>
          {props.name}
         </button>
      );
}
 
export default UniversalButton