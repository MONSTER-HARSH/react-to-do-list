import React from 'react'
import { TodoItem } from './TodoItem'

export const Todo = ({ todo, editTodo, deleteTodo }) => {
  return (
    <>
      <div className="mt-4 container">
        <div className="accordion" id="accordionExample">
          {todo.length ? todo.map((e) => <TodoItem todo={e} key={e.sno} editTodo={editTodo} deleteTodo={deleteTodo} />) : <p className="text-center">No todo to display</p>}
        </div>
      </div>
    </>
  )
}
