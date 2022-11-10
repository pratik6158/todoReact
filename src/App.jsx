import React, { useReducer, useState } from 'react'
import Header from './Components/Header'
import Input from './Components/Input'
import Todo from './Components/Todo'
import { nanoid } from 'nanoid'

export const DataContext=React.createContext()
// const initialData=[]
const initialData={
  tasks:[{
    id:nanoid(),
    todo:"Demo"
  }],
  isEditing:false,
  editId:null,
  text:'',
}

function reducer(state,action){
  if(action.type==='SET_EDIT_ID'){
    return{
      ...state,
      editId:action.payload
    }
  }
  if(action.type==='SET_EDIT'){
    return{
      ...state,
      isEditing:true
    }
  }
  if(action.type==='SET_TEXT'){
    return {
      ...state,
      text:action.payload
    }
  }
  if(action.type==='ADD'){
    const {tasks,isEditing,editId}=state
    var newTasks=[]
    if(isEditing){
      newTasks=tasks.map(task=>{
        if(task.id===editId){
          return {
            ...task,
            todo:action.payload
          }
        }
        return task
      })

    }else{
      newTasks=[...tasks,{id:nanoid(),todo:action.payload}]
    }
    return {
      ...state,
      tasks:newTasks,
      isEditing:false
    }
  }
  if(action.type==='DELETE'){
    const {tasks}=state
    const newTasks=tasks.filter(todo=>todo.id!=action.payload)
    return {
      ...state,
      tasks:newTasks
    }
  }
  if(action.type==='EDIT'){

  }
  else{
    return state
  }
}

const App = () => {
  const [data,dispatch]=useReducer(reducer,initialData)  
  
  const addTodo=(value)=>{
    dispatch({type:'ADD',payload:value})
  }
  const deleteTodo=(id)=>{
    dispatch({type:'DELETE',payload:id})
  }
  const editTodo=(id,text)=>{
    dispatch({type:'EDIT',payload:id,text:text})
  }
  const setText=(text)=>{
    dispatch({type:'SET_TEXT',payload:text})
  }
  const setEditing=()=>{
    dispatch({type:'SET_EDIT'})
  }
  const setEditId=(id)=>{
    dispatch({type:'SET_EDIT_ID',payload:id})
  }

  

  return (
    <main>
      {/* <DataContext.Provider value={{data,addTodo,deleteTodo,editTodo}}> */}
      <DataContext.Provider value={{data,addTodo,deleteTodo,setText,setEditing,setEditId}}>
        <Header/>
        <Input/>
        <Todo/>
      </DataContext.Provider>
    </main>
  )
}

export default App