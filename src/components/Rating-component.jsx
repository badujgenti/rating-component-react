import styled from 'styled-components';
import starImg from "../images/icon-star.svg"

function Rating (){
    return <Card>
        <Star>
        <img src={starImg}/>
        </Star>
        <Header>How did we do?</Header>
        <Text> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Text>
        <Rates>
            <Star> <Number> 1 </Number>  </Star>
            <Star> <Number> 2 </Number>  </Star>
            <Star> <Number> 3 </Number>  </Star>
            <Star> <Number> 4 </Number>  </Star>
            <Star> <Number> 5 </Number>  </Star>
        </Rates>
        <Button>
            <Submit> SUBMIT</Submit>
        </Button>
    </Card>
}


export default Rating;


const Card = styled.div`
    padding: 24px;
    height: 360px;
    width: 327px;
    border-radius: 15px;
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
`
const Star = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #262E38;
    display:flex;
    justify-content: center;
    align-items: center;

`
const Header = styled.h1`
    
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
        color: white;
        margin-top: 16px;

`

const Text = styled.p`
   
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #969FAD;
    margin-top: 10px;

`
const Rates = styled.div`
    display: flex;
    gap: 17px;
    margin-top:16px
`
const Number = styled.p`
    color: #7C8798;
font-size: 14px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.17499999701976776px;
text-align: center;

`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 279px;
    background: #FC7614;
    border-radius: 22.5px;
    border: 0;
    margin-top: 24px;

`
const Submit = styled.p`
color: white;
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: 1.8666666746139526px;


`