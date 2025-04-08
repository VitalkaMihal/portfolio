import React from "react";
import styled from "styled-components";
import photo from "../../../assets/photo/Rectangle 6.jpg";
import { Button } from "../../../components/button/button";

export const Main = () => {
  return (
    <StyledMain>
      <StyledMainContainer>
        <StyledInfo>
          <StyledProfession>Front End Developer</StyledProfession>
          <StyledAboutMe>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </StyledAboutMe>
          <Button textButton={"Let’s Begin"} />
        </StyledInfo>
        <StyledPhoto src={photo} alt="" />
      </StyledMainContainer>
    </StyledMain>
  );
};

export const StyledMain = styled.div`
  margin: 0 0 26px 22px;
  padding: 125px 150px;
  background-color: #0f1624;
`;

export const StyledMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledInfo = styled.div`
  color: #fff;
  margin: 80px 90px 80px 0;
`;

export const StyledPhoto = styled.img`
  border-radius: 50px 0;
`;

export const StyledProfession = styled.h1`
  font-weight: 600;
  font-size: 54px;
  margin: 0;
`;

export const StyledAboutMe = styled.div`
  padding-right: 185px;
  padding-top: 15px;
  padding-bottom: 60px;
`;
