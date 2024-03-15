import React from 'react'

export const TodoItem = ({ todo, editTodo, deleteTodo }) => {

    return (
            <div className="accordion-item mt-2">
                <h2 className="accordion-header" id={`heading${todo.sno}`}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${todo.sno}`} aria-expanded="true" aria-controls={`collapse${todo.sno}`}>
                        {todo.title}
                    </button>
                </h2>
                <div id={`collapse${todo.sno}`} className="accordion-collapse collapse show" aria-labelledby={`heading${todo.sno}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {todo.description}
                    </div>
                    <div className="mb-2 container">
                    <button type="button" className="btn btn-primary" onClick={()=>{editTodo(todo)}}>Edit</button>
                    <button type="button" className="btn btn-danger ms-1" onClick={()=>{deleteTodo(todo.sno,todo.title, todo.description)}}>Delete</button>
                    </div>
                </div>
            </div>
    )
}
