import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function Todo() {

const [edit, setEdit] = useState({
    id:null,
    value:''
})




  return  todos.map((todo,index) => (
      <div key={index}>
        <div key={todo.id} onClick = {() => completeTodo(todo.id)}></div>
      </div>
  ))
}

export default Todo