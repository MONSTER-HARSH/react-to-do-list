import React, { useEffect, useState } from 'react'
import { AddTodo } from './AddTodo'
import { Todo } from './Todo'
import { EditTodo } from './EditTodo'

export const Home = () => {
    const [todoToEdit, setTodoToEdit] = useState({});
    let todoLocalData = localStorage.getItem('todoListData')
    if (todoLocalData == null) {
        todoLocalData = []
    } else {
        todoLocalData = JSON.parse(todoLocalData)
    }


    function addTodo(title, description) {
        let sno = todo.length ? todo[todo.length - 1].sno + 1 : 1
        let todoData = {
            sno: sno,
            title: title,
            description: description
        }
        setTodo([...todo, todoData])
    }
    function editTodo(todo) {
        setaddEditTodo(true);
        setTodoToEdit(todo);
    }

    function updateTodo(updatedTodo) {
        const newTodos = todo.map(item => item.sno === updatedTodo.sno ? updatedTodo : item);
        setTodo(newTodos);
        setaddEditTodo(false);
        setTodoToEdit({});
    }

    function onCancel() {
        setaddEditTodo(false);
        setTodoToEdit({});
    }

    function deleteTodo(todos) {
        setTodo(todo => { return todo.filter(e => e !== todos) })
    }

    const [todo, setTodo] = useState(todoLocalData)
    const [addEditTodo, setaddEditTodo] = useState(false)
    useEffect(() => {
        localStorage.setItem("todoListData", JSON.stringify(todo))
    }, [todo])
    return (
        <>
            {addEditTodo ? (
                <EditTodo
                    todoToEdit={todoToEdit}
                    updateTodo={updateTodo}
                    onCancel={onCancel}
                />
            ) : (
                <AddTodo addTodo={addTodo} />
            )}
            <Todo todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
        </>
    )
}
