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

const Add = styled.div`
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
      タスクを追加 :
      <Add>
        <input value={task} 
        placeholder="タスクを入力" 
        onChange={handleNewTask} />
      </Add>
    </form>
    </Wrapper>
  );
};

export default AddTodo;