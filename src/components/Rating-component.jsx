import { useState } from "react";
import styled from "styled-components";
import starImg from "../images/icon-star.svg";

function Rating({ rating, setRating, setSubmit }) {
  const numbers = [1, 2, 3, 4, 5];
  const [Error, SetError] = useState(false);

  return (
    <Card>
      <Star>
        <img src={starImg} />
      </Star>
      <Header>How did we do?</Header>
      <Text>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Text>
      <ErrorDiv Error={Error}> Choose one of the numbers </ErrorDiv>
      <Rates>
        {numbers.map((number) => {
          return (
            <RatingButton
              onClick={() => {
                setRating(number);
              }}
              key={number}
              isActive={number === rating}
            >
              {number}
            </RatingButton>
          );
        })}
      </Rates>
      <Button
        onClick={() => {
          if (rating) {
            setSubmit(true);
          } else {
            SetError(true);
          }
        }}
      >
        SUBMIT
      </Button>
    </Card>
  );
}

export default Rating;

const Card = styled.div`
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
const Star = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #262e38;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  margin-top: 16px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #969fad;
  margin-top: 10px;
`;
const Rates = styled.div`
  display: flex;
  gap: 17px;
  margin-top: 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 279px;
  background: #fc7614;
  border-radius: 22.5px;
  border: 0;
  margin-top: 24px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1.8666666746139526px;
  &:hover {
    background-color: #ffffff;
    color: #fc7614;
  }
`;
// const Submit = styled.p`
//   color: white;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 18px;
//   letter-spacing: 1.8666666746139526px;
// `;

const ErrorDiv = styled.p`
  padding-top: 10px;
  color: red;
  font-size: 0.7rem;
  font-weight: 700;
  top: -15px;
  margin-bottom: 10px;
  display: ${(props) => (props.Error ? "block" : "none")};
`;

const RatingButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? "#7C8798" : "#262e38")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isActive ? "#FFFFF" : "#7C8798")};
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  border: none;
  &:hover {
    background-color: #fc7614;
  }
`;
