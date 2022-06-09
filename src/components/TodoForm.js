import { useState } from 'react'
import React from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);

    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');

    }

  return (
   <form className = "todo-form" onSubmit = {handleSubmit}>
       <input 
            type = "text" 
            name = "task" 
            value = {input} 
            className = "task" 
            placeholder  = "Add a task"
            onChange = {handleChange} 
            >    
        </input>
        <button id = 'Add_task_btn'>Add task</button>
   </form>
  )
}

export default TodoForm

