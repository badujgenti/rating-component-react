
import { useState } from 'react';
import styled from 'styled-components';
import Rating from './components/Rating-component';
import Thank from './components/Thank-you';


function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState()
  

  return (

    
    <Background >
      {!submit ?
     <Rating rating={rating} setRating={setRating} setSubmit={setSubmit}/>
     :
     <Thank rating={rating}/>
      }
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