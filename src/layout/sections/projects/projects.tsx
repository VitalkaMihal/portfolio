import React from "react";
import styled from "styled-components";
import { Title } from "../../../components/title/title";
import { Card } from "../../../components/card/card";

export const Projects = () => {
  return (
    <StyledProject>
      <StyledProjectContainer>
        <Title title={"Projects"} size={"46px"} />
        <StyledProjectCards>
          <Card />
          <Card />
          <Card />
          <Card />
        </StyledProjectCards>
      </StyledProjectContainer>
    </StyledProject>
  );
};

export const StyledProject = styled.section`
  background: #161d2a;
`;

export const StyledProjectContainer = styled.div`
  padding: 100px 150px;
`;

export const StyledProjectCards = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: space-around;
`;
