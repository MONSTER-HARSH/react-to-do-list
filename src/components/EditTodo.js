import React, { useState } from 'react'

export const EditTodo = ({todoo, editTodo, onCancel}) => {

    function onSubmit(e){
        e.preventDefault()
        if (!title || !description){
            alert("title or description is empty")
        }else{
            editTodo(sno,title,description)
            setSno("")
            setTitle("")
            setDescription("")
        }
    }
    const[sno,setSno] = useState(todoo.sno)
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    return (
        <div className="container mt-3">
        <form onSubmit={(e)=>{onSubmit(e)}}>
            <div className="mb-3">
                <label htmlFor="TodoSno" className="form-label">Todo sno</label>
                <input className="form-control" type="text" defaultValue={sno} id='TodoTitel' aria-label="default input example" disabled/>
            </div>
            <div className="mb-3">
                <label htmlFor="TodoTitel" className="form-label">Todo address</label>
                <input className="form-control" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} id='TodoTitel' placeholder="Default input" aria-label="default input example" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Todo description</label>
                <textarea className="form-control" value={description} onChange={(e)=>{setDescription(e.target.value)}} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-warning ms-1" onClick={()=>{onCancel()}}>Cancel</button>
        </form>
        <hr/>
        </div>
    )
}
