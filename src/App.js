
import styled from 'styled-components';
import Rating from './components/Rating-component';


function App() {
  return (
    <Background >
     <Rating/>
    </Background>
  );
}

export default App;


const Background = styled.div`
 background-color: #131518;
 height:100vh;
 display:flex;
 align-items:center;
 justify-content:center;`