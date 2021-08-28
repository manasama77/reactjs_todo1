import { useState } from 'react';
import './TodoCreate.css'

const TodoCreate = (props) => {
    const [getInputTodo, setInputTodo] = useState('')

    const handleInputTodo = event => {
        setInputTodo(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }

        props.onCreateTodo(newTodo)

        setInputTodo('')

        const input = document.getElementById('input')
        input.focus()
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" id="input" value={getInputTodo} onChange={handleInputTodo} />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate