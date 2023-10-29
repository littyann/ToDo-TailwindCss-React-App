import React, { useRef } from 'react'
import {AiOutlinePlus} from "react-icons/ai"
function Input(props) {
    const inputBox = useRef();
  return (
    <div className='p-3 flex justify-around'>
       <input placeholder='Enter data here!!!' className='p-3 boder-slate-400 border w-[90%] focus-outline-none' type="text" ref={inputBox}/>
       <div className='cursor-pointer w-[50px] h-[50px] bg-[#ef4c3c] text-white text-3xl rounded-[50%] flex justify-center items-center' onClick={()=>{
        props.handler(inputBox.current.value)
        inputBox.current.value ="";
       }}>
        <AiOutlinePlus/>
       </div>
    </div>
  )
}

export default Input