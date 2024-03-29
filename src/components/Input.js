import React from 'react'
import { useState,useReducer,useEffect,useRef } from "react";

const Input = ({label,type,value,onChange}) => {
    const inputRef =useRef()
    const [show,setShow]=useState(false);
    const [inputType,setType]=useState("text");
    useEffect(() => {
      if(inputType=="text"){
        setType("password");
         inputRef.current.focus()
      }else{
        setType("text");
      }
    }, [show])
    
  return (
    <label className="block relative w-[250px] mb-2">
			<input required={true} ref={inputRef} type={inputType} className="bg-zinc-50 border px-2 w-full h-[38px] rounded-sm outline-none focus:border-gray-400 peer text-sm valid:pt-[10px]" onChange={onChange} ></input>
			<small className="absolute top-1/2 left-2 -translate-y-1/2 text-xs text-gray-500 cursor-text pointer-events-none peer-valid:text-[10px] transition-all peer-valid:top-2">{label}</small>
            {
                type === "password" && value && (
                    <button type='button' onClick={()=>setShow(!show)} className='absolute right-0 top-0 h-full flex items-center'>
                        {
                            show ? "Hide": "Show"
                        }
                    </button>
                    
                )
            }
		   </label>
  )
}

export default Input