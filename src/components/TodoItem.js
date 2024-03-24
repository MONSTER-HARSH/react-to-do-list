import React from 'react'

export const TodoItem = ({ todo, editTodo, deleteTodo }) => {

    return (
        <>
            <div class="card mt-2">
                <div class="card-body">
                    <h5 class="card-title">{todo.title}</h5>
                    <p class="card-text">{todo.description}</p>
                    <button type="button" className="btn btn-primary" onClick={() => { editTodo(todo) }}>Edit</button>
                    <button type="button" className="btn btn-danger ms-1" onClick={() => { deleteTodo(todo) }}>Delete</button>
                </div>
            </div>
        </>
    )
}
