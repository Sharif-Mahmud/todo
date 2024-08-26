import { useState } from "react";
import "./Todo.css";

const Todo = () => {
    const [todo, setTodo]   = useState([]);
    const [input, setInput] = useState();
    

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    // add item
    const hadleAddClick = ()=> {
        setTodo([input, ...todo]);
    }
    // delete item
    const handleBtnDelete = (item) =>{
        setTodo(todo.filter((data) => data != item));
    };


  return (
    <div className="todo">
      <h2>Todo App</h2>
      <hr />
      <input type="text" value={input} onChange={handleInputChange} placeholder="todo item" />
      <button onClick={hadleAddClick}>Add</button>
      <br />
      <ul>
        { todo.map((item) => {
          return (
            <li key={item}>
              {item} <button onClick={()=> handleBtnDelete(item)}>x</button>
            </li>
          );
        }) }
      </ul>
    </div>
  );
}

export default Todo