import React from 'react';
import styled from 'styled-components'

const Wrapper= styled.section`
  color:#333333;
  font-size:2vw;
  background:#F4FBFE;
  padding:2vw;
  margin:2vw 0;
  box-shadow: 0 10px 5px 0 rgba(0, 0, 0, .5);
`;

const Delete= styled.section`
  margin: 0 2vw;
  font-weight:700;
`;

const Body= styled.section`
  display: flex;
`;

const TodoList = ({ todos, setTodos }) => {
  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleUpdateTask = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Wrapper>
      {todos.map((todo, index) => (
        <Body
          key={index}
          style={{
            textDecoration: todo.isCompleted ? 'line-through' : 'none',
          }}
        >
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleUpdateTask(index)}
          />
          {todo.task}
          <Delete
            onClick={() => handleRemoveTask(index)}
            style={{ cursor: 'pointer' }}
          >
            ×
          </Delete>
        </Body>
      ))}
    </Wrapper>
  );
};

export default TodoList;