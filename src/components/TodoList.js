import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        //Create a new array
        const newList = [todo, ...todos];
        setTodos(newList);
        console.log(todo, ...todos);
    }

    // WTF is this?
    const completeTodo = (id) => {

        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    
    const updateTodo = (todoId, newValue) => {

        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos((prev) => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    if(todos.length == 0 ){
        console.log(todos.length + "check")
    }
 

  return (
    <>
        <h1>Plans for today?</h1>
       <TodoForm onSubmit = {addTodo} />
       <div id ={(todos.length !== 0) ? "task-cointainer" : "taskNone"}>
        <Todo todos = {todos} completeTodo={completeTodo} removeTodo = {removeTodo} updateTodo = {updateTodo}/>
       </div>
    </>
  )
}

export default TodoList

