import styled from "styled-components";
import { Title } from "../../../components/title/Title.tsx";
import { IndicatorSlider } from "../../../components/indicatorSlider/indicatorSlider";
import indicatorOne from "../../../assets/indicator/indicator1.png";
import indicatorTwo from "../../../assets/indicator/indicator2.png";
import indicatorThree from "../../../assets/indicator/indicator3.png";
import indicatorFour from "../../../assets/indicator/indicator4.png";
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
          <IndicatorSlider textSlider={"HTML"} logoSlider={indicatorOne} />
          <IndicatorSlider textSlider={"Css, Sass"} logoSlider={indicatorTwo} />
          <IndicatorSlider textSlider={"React"} logoSlider={indicatorThree} />
          <IndicatorSlider
            textSlider={"Styled components"}
            logoSlider={indicatorFour}
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
`;

export const StyledSliderContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;

export const StyledSkillsContainer = styled.div`
  margin: 120px 0 70px 0;
  display: flex;
  justify-content: center;
`;

export const StyledTechnologiesLogo = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const StyledTechnologiesLogoImg = styled.img``;
