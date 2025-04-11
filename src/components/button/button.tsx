import styled from "styled-components";

type StyledButtonPropsType = {
  textButton: string;
};

export const Button = ({ textButton }: StyledButtonPropsType) => {
  return <StyledButton>{textButton}</StyledButton>;
};

export const StyledButton = styled.button`
  height: 60px;
  padding: 0 66px;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  border-radius: 83px;
  border: none;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
`;
