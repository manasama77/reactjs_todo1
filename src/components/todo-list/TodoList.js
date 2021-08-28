import './TodoList.css'

const TodoList = data => {
    return (
        <ul>
            {
                data.todoList.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>
                })
            }
        </ul>
    )
}

export default TodoList