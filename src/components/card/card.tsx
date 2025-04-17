import styled from "styled-components";
import projectOne from "../../assets/image/image 1.jpg";
import { Title } from "../title/Title.tsx";
import { Button } from "../buttons/Button.tsx";

export const Card = () => {
  return (
    <StyledCard>
      <StyledCardImage src={projectOne} alt="" />
      <StyledCardTitle>
        <Title title={"Project 1"} size={"30px"} />
      </StyledCardTitle>
      <StyledCardLine />
      <StyledCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledCardText>
      <Button textButton={"Look It Up"} />
    </StyledCard>
  );
};

export const StyledCard = styled.div`
  border: 1px solid #a39d9d;
  border-radius: 50px 0;
  width: 550px;
  height: 670px;
  background: #0f1624;
  padding: 25px;
  box-sizing: border-box;
`;

export const StyledCardImage = styled.img`
  border-radius: 24px 8px 8px 8px;
  width: 500px;
  height: 280px;
`;

export const StyledCardTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCardText = styled.div`
  margin: 40px 0px 50px 0px;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
`;

export const StyledCardLine = styled.div`
  margin: 0 auto;
  border-radius: 83px;
  width: 300px;
  height: 4px;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
`;
