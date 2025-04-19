import styled from "styled-components";
import { Title } from "../../../components/title/Title.tsx";
import { IndicatorSlider } from "../../../components/indicatorSlider/IndicatorSlider.tsx";
import bigGit from "../../../assets/logo/bigGit.png";
import bigGitHub from "../../../assets/logo/bigGitHub.png";
import bigFigma from "../../../assets/logo/bigFigma.png";
import {WrapperContainer} from "../../../components/wrapper/WrapperContainer.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Technologies = () => {
  return (
    <StyledTechnologies>
      <WrapperContainer>
        <Title title={"Technologies"} size={"46px"} top={"100px"} bottom={"70px"}/>
        <StyledSliderContainer>
          <IndicatorSlider textSlider={"HTML"} widthSlider={"70%"} />
          <IndicatorSlider textSlider={"Css, Sass"} widthSlider={"80%"} />
          <IndicatorSlider textSlider={"React"} widthSlider={"60%"} />
          <IndicatorSlider
            textSlider={"Styled components"}
            widthSlider={"90%"}
          />
        </StyledSliderContainer>
        <StyledSkillsContainer>
          <Title title={"Additional technologies and skills"} size={"44px"} />
        </StyledSkillsContainer>
        <StyledTechnologiesLogo>
          <StyledTechnologiesLogoImg src={bigGit} alt="" />
          <StyledTechnologiesLogoImg src={bigGitHub} alt="" />
          <StyledTechnologiesLogoImg src={bigFigma} alt="" />
        </StyledTechnologiesLogo>
      </WrapperContainer>
    </StyledTechnologies>
  );
};

export const StyledTechnologies = styled.section`
  background: ${theme.colors.secondaryBg};
  display: flex;
  
  @media ${theme.media.tablet} {
    h2 {
      font-size: 32px;
      text-align: center;
    }
    
  }
`;

export const StyledSliderContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const StyledSkillsContainer = styled.div`
  margin: 120px 0 70px 0;
  display: flex;
  justify-content: center;
  @media ${theme.media.tablet} {
    h2 {
      font-size: 32px;
    }
`;

export const StyledTechnologiesLogo = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledTechnologiesLogoImg = styled.img``;
