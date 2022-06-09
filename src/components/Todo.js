import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { BiX } from "react-icons/bi";
import {BiPencil} from "react-icons/bi";

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

const [edit, setEdit] = useState({
    id: null,
    value:''
});

const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
        id:null,
        value:''
    })
};

if(edit.id){
    return <TodoForm edit = {edit} onSubmit = {submitUpdate} />
}

  return (
    <div>
    {todos.map((todo,index) => (
        <div key = {index} className = {todo.isComplete? "complete" : "task"}>
          <div key = {todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
          </div>
          <div className = "task-icons">
          <BiPencil id = "edit" onClick = {() => setEdit({id:todo.id, value:todo.text})}/>
              <BiX id = "remove" onClick = { () =>removeTodo(todo.id)}/>

          </div>
        </div>
    ))
    }</div>
  ) 
}

export default Todo