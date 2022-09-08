import { useState } from 'react';
import styled from 'styled-components'

const Wrapper= styled.section`
  font-size:3vw;
  padding:2vw;
  margin:3vw 0;
  background:#FFFEF6;
  box-shadow: 0 10px 5px 0 rgba(0, 0, 0, .5);
  font-weight:400
`;

const AddTodo = ({ setTodos }) => {
  const [task, setTask] = useState('');

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === '') return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask('');
  };

  return (
    <Wrapper>
    <form onSubmit={handleSubmit}>
      Add Task :
      <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
    </form>
    </Wrapper>
  );
};

export default AddTodo;