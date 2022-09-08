import { useState } from 'react';
import styled from 'styled-components'

const Wrapper= styled.section`
  font-size:2vw;
  padding:2vw;
  margin:3vw 0;
  display: flex;
  background:#F4FBFE;
  box-shadow: 0 10px 5px 0 rgba(0, 0, 0, .5);
`;

const Add = styled.section`
  // font-size:3vw;
`

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
      <Add>
        <input value={task} 
        placeholder="Add New Task" 
        onChange={handleNewTask} />
      </Add>
    </form>
    </Wrapper>
  );
};

export default AddTodo;