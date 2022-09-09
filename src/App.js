import Todo from './components/to';
import styled from 'styled-components'
import GlobalFonts from './fontStyles'

const Wrapper= styled.section`
  width:70vw;
  margin: auto;
  padding: 8vw 15vw;
  background:#ADE0EE;
  font-family:'メイリオ', 'Meiryo', sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <GlobalFonts />
      <Todo />
    </Wrapper>
  );
}

export default App;