import { useState } from 'react';

const TodoList = () => {

    const initialState = [
        {
            task: 'Learn vue.js',
            isCompleted: false
        },
        {
            task: 'Learn React Hook',
            isCompleted: false
        },
        {
            task: 'Learn Gatsby.js',
            isCompleted: false
        },     
    ]

    const [todos, setTodos] = useState(initialState);

    return (
        <div>
            <h1>ToDo Lis</h1>
            Add Task : <input placeholder="Add New Task" />
            <ul>
                { todos.map((todo, index) => (
                    <li key={ index }>{ todo.task }</li>
                ))}
            </ul>
        </div>
  );    
}

export default TodoList;