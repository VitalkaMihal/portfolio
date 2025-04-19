import styled from "styled-components";
import projectOne from "../../assets/image/image 1.jpg";
import { Title } from "../title/Title.tsx";
import { Button } from "../buttons/Button.tsx";
import {theme} from "../../styles/Theme.ts";

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
  border: 1px solid ${theme.colors.border};
  border-radius: 50px 0;
  width: 550px;
  height: 670px;
  background: ${theme.colors.primaryBg};
  padding: 25px;
  box-sizing: border-box;
   
    @media ${theme.media.desktopBig} {
        width: 400px;
        height: 600px;
    }

    @media ${theme.media.mobile} {
        width: 345px;
        height: 560px;
    }
`;

export const StyledCardImage = styled.img`
  border-radius: 24px 8px 8px 8px;
  width: 500px;
  height: 280px;
    object-fit: cover;
    @media ${theme.media.desktopBig} {
        width: 350px;
        height: 220px;
    }

    @media ${theme.media.mobile} {
        width: 295px;
        height: 220px;
    }
`;

export const StyledCardTitle = styled.div`
  display: flex;
  justify-content: center;

        h2 {
            @media ${theme.media.mobile} {
                font-size: 24px; 
                margin-top: 30px;
        }
`;

export const StyledCardText = styled.div`
  margin: 40px 0 50px 0;
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.font};
    @media ${theme.media.desktopBig} {
        margin: 20px 0 20px 0;
    }

    @media ${theme.media.mobile} {
        font-size: 16px;
    }
`;

export const StyledCardLine = styled.div`
  margin: 0 auto;
  border-radius: 83px;
  width: 300px;
  height: 4px;
  background: ${theme.colors.linear};
`;
