import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

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
  background: ${theme.colors.linear};
`;
