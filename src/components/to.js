import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import styled from 'styled-components'

const Title= styled.section`
    color:#333333;
    font-size:5vw;
    background:#F4FBFE;
    padding:2vw;
    margin:2vw 0;
    text-align: center;
    box-shadow: 0 10px 5px 0 rgba(0, 0, 0, .5);
    font-weight:700
  `;

const Todo = () => {
  const initialState = [];

  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <Title>Todo List</Title>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;