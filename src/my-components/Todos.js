import React from 'react'
import { TodoItem } from './TodoItem'
import "./AddTodo.css"

export const Todos = (props) => {
  const myStyle={
    minHeight:"50vh",
 }
 
  return (

    <div className='container' style={myStyle}>
      <h3 id="todoList" className='text-center'>Todos List</h3>
      {(props.todos.length===0)?
       <p>There is no todo to display. </p>:
       props.todos.map((todo) => {
        return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
      }) 
      }
    </div>

  )
}
