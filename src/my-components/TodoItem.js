import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <>
    <hr/>
    <div>
    <h3>{todo.title}</h3>
    <h5>{todo.dec}</h5>
    <button type="button" className="btn btn-danger my-3" onClick={()=>{onDelete(todo)}}>Danger</button>  
    </div>

    </>
  )
}
