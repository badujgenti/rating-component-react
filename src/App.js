
import { useState } from 'react';
import styled from 'styled-components';
import Rating from './components/Rating-component';


function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState()

  return (

    
    <Background >
     <Rating rating={rating} setRating={setRating} setSubmit={setSubmit}/>
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