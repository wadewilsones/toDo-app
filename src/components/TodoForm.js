import { useState, useEffect, useRef } from 'react';

function TodoForm (props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

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
   <form className = {props.edit? "todo-form-update" : "todo-form"} onSubmit = {handleSubmit} >
   {props.edit? (
       <>
       <input className = 'form-input'
            type = "text" 
            name = "task" 
            value = {input} 
            placeholder  = "Update task"
            onChange = {handleChange}
            ref ={inputRef} 
            >    
        </input>
        <button className='task_btn' onClick={handleSubmit} >Update</button>
       </>
   ): (
    <>
       <input className = 'form-input'
            type = "text" 
            name = "task" 
            value = {input} 
            placeholder  = "Add task"
            onChange = {handleChange}
            ref ={inputRef} 
            >    
        </input>
        <button className='task_btn_update' onClick={handleSubmit} >Add</button>
       </>
   )}
      
   </form>
  )
}

export default TodoForm

