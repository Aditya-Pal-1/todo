import React from 'react'
import "../App.css";
export default function ItemContainer({todos,deleteTodo}) {
  return (
    <div className='itemContainer'>
      <ul className='todo'>
        {todos.map((items,index)=>{
            return(
                <li  key={index}>
                    {items}
                    <button 
                    style={{marginLeft:"20px"}}
                    onClick={()=>deleteTodo(items)}
                    >Done</button>
                </li>
            )
        })}
      </ul>
      
    </div>
  )
}
