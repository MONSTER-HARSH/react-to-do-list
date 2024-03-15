import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {

    function onSubmit(e){
        e.preventDefault()
        if (!title || !description){
            alert("title or description is empty")
        }else{
            addTodo(title,description)
            setTitle("")
            setDescription("")
        }
    }
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    return (
        <div className="container mt-3">
        <form onSubmit={(e)=>{onSubmit(e)}}>
            <div className="mb-3">
                <label htmlFor="TodoTitel" className="form-label">Todo address</label>
                <input className="form-control" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} id='TodoTitel' placeholder="Default input" aria-label="default input example" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Todo description</label>
                <textarea className="form-control" value={description} onChange={(e)=>{setDescription(e.target.value)}} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <hr/>
        </div>
    )
}
