import React, { useContext } from 'react'
import { DataContext } from '../App'

const Todo = () => {
  // const {data,deleteTodo,editTodo}=useContext(DataContext)
  const {data:{tasks,isEditing,editId},deleteTodo,setEditing,setText,setEditId}=useContext(DataContext)

  return (
    <div>
      {tasks.map(task=>{
        return <div>
          <p key={task.id}>{task.todo}</p>
          <button onClick={()=>deleteTodo(task.id)}>Delete</button>
          <button onClick={()=>{
            setEditing()
            setEditId(task.id)
            setText(task.todo)
          }}>Edit</button>
        </div>
      })}
    </div>

  )
}

export default Todo