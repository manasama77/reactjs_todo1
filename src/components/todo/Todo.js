import { useState } from 'react'
import './Todo.css'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

const Todo = () => {
    const [getTodos, setTodos] = useState([])

    const eventCreateTodo = todo => setTodos(getTodos.concat(todo))

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo} />
            <TodoList todoList={getTodos} />
        </div>
    )
}

export default Todo