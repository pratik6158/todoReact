import React, { useContext, useState } from 'react'
import { DataContext } from '../App'

const Input = () => {
    const {data:{text,isEditing},addTodo,setText}=useContext(DataContext)
    const handleClick=(e)=>{
        addTodo(text)
        setText('')
    }
    return (

        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
            <button onClick={handleClick} >{isEditing?"EDIT":"ADD"}</button>
        </div>
    )
}

export default Input