import React, { useState } from 'react'
import "../App.css";

export default function InputContainer({addNewtodo}) {
    const[inputValue,setInputValue]=useState("");
  return (
    <div className='inputcontainer'>
      <input 
      placeholder='Enter the task'
      value={inputValue}
      onChange={(e)=>setInputValue(e.currentTarget.value)}/>

      <button onClick={()=>{
        addNewtodo(inputValue)
        setInputValue("")
      }}>Add Task</button>
    </div>
  )
}
