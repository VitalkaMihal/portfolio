import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type IndicatorSliderType = {
  textSlider?: string;
  widthSlider?: string;
};

export const IndicatorSlider = ({
  textSlider, widthSlider
}: IndicatorSliderType) => {
  return (
    <StylerIndicatorSlider>
      <StyledSliderText>{textSlider}</StyledSliderText>
      <StyledSliderBg>
        <StyledSlider widthSlider={widthSlider}/>
      </StyledSliderBg>
    </StylerIndicatorSlider>
  );
};

export const StylerIndicatorSlider = styled.div`
  margin-bottom: 25px;
`;

export const StyledSliderText = styled.div`
  padding-left: 25px;
  font-weight: 600;
  font-size: 24px;
  color: ${theme.colors.font};
    @media ${theme.media.tablet} {
        font-size: 22px;
    }
`;

export const StyledSliderBg = styled.div`
    width: 100%;
    border-radius: 83px;
    height: 18px;
    background-color: ${theme.colors.sliderBg};
`;

export const StyledSlider = styled.div<IndicatorSliderType>`
    width: ${props => props.widthSlider};
    border-radius: 83px;
    height: 18px;
    background: ${theme.colors.linear};
`;