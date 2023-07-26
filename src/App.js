
import { useState } from 'react';
import './App.css';
import InputContainer from './Components/InputContainer';
import ItemContainer from './Components/ItemContainer';
import Count from './Components/Count';

function App() {
  const [todos,setTodos]=useState([]); 

  const  addNewtodo=(newtodo)=> {
    setTodos([...todos,newtodo])
  };
  
  const deleteTodo=(todoToBeDeleted)=>{
    const filteredtodo= todos.filter((item)=> item!==todoToBeDeleted);
    setTodos(filteredtodo);
  }

  return (
    <div className="App">
      <div className='header'>
      <h1>TO DO LIST</h1>
      <Count itemscount={todos.length}/>
      </div>
      <div className="mainContent">
      <InputContainer addNewtodo={addNewtodo}/>
      <ItemContainer todos={todos}  deleteTodo={deleteTodo}/>
      </div>
      
    </div>
  );
}

export default App;
