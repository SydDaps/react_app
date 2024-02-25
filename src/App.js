
import './App.css';
import { useState } from 'react';
import { List } from './list.js'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const deleteList = (index) => {
    setTodoList(todoList.filter((e, i) => index !== i ))
  }

  return (
    <div>
      <input onChange ={(event) => setTodo(event.target.value)} />
      <button onClick={() => setTodoList([...todoList, todo])}>+</button>
      {console.log(todoList)}
      {
        todoList.map((list, index) => {
          return <List list={list} id={index} deleteList={deleteList} />
        })
      }
    </div>
  )
}


export default App;
