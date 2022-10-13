import styled from "styled-components";
import ThanksPic from "../images/illustration-thank-you.svg";

function Thank({ number, rating }) {
  return (
    <div>
      <Card>
        <img src={ThanksPic} alt="card pic" />
        <Selected>You Selected {rating} out of 5</Selected>
        <ThankText>Thank you!</ThankText>
        <LastText>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </LastText>
      </Card>
    </div>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 24px;
  height: 360px;
  width: 327px;
  border-radius: 15px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
`;

const Selected = styled.div`
  margin-bottom: 32px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 193px;
  border-radius: 22.5px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  background: #262e38;
  color: #fc7614;
`;

const ThankText = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0px;
  text-align: left;
`;

const LastText = styled.p`
  font-family: Overpass;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #969fad;
`;
export default Thank;
