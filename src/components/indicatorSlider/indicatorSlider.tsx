import React from "react";
import styled from "styled-components";

type IndicatorSliderType = {
  textSlider: string;
  logoSlider: string;
};

export const IndicatorSlider = ({
  textSlider,
  logoSlider,
}: IndicatorSliderType) => {
  return (
    <StylerIndicatorSlider>
      <StyledSliderText>{textSlider}</StyledSliderText>
      <StyledSlider src={logoSlider} alt="" />
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
  color: #fff;
`;

export const StyledSlider = styled.img``;
