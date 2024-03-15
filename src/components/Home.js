import React, { useEffect, useState } from 'react'
import { AddTodo } from './AddTodo'
import { Todo } from './Todo'
import { EditTodo } from './EditTodo'

export const Home = () => {

    let todoLocalData = localStorage.getItem('todoListData')
    if (todoLocalData == null){
        todoLocalData = []
    }else{
        todoLocalData = JSON.parse(todoLocalData)
    }


    function addTodo(title, description) {
        let sno = todo.length?todo[todo.length -1].sno + 1 : 1
        let todoData = {
            sno:sno,
            title:title,
            description:description
        }
        setTodo([...todo,todoData])
    }
    let todoo = {}
    function editTodo(todo){
        setaddEditTodo(true)
        todoo=todo
    }
    
    function updataTodo(todo){

    }

    function onCancel(){
        setaddEditTodo(false)
    }

    function deleteTodo(todos){
        setTodo(todo => {return todo.filter(e => e !==todos)})
    }

    const [todo, setTodo]=useState(todoLocalData)
    const [addEditTodo, setaddEditTodo]=useState(false)
    useEffect(() => {
         localStorage.setItem("todoListData",JSON.stringify(todo))
     }, [todo])
    return (
        <>
            {addEditTodo? <EditTodo editTodo={editTodo} onCancel={onCancel} todoo={todoo}/>:<AddTodo addTodo={addTodo} editTodo={editTodo}/>}
            <Todo todo={todo} editTodo={editTodo} deleteTodo={deleteTodo}/>
        </>
    )
}
