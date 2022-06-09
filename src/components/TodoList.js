import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newList = [todo, ...todos];
        setTodos(newList);
        console.log(todo, ...todos);
    }


  return (
    <div>
        <h1>Plans for today?</h1>
       <TodoForm onSubmit = {addTodo} />
    </div>
  )
}

export default TodoList