import styled from "styled-components";

type TitlePropsType = {
  title: string;
  size?: string;
};

type StyledTitlePropsType = {
  fontSize?: string;
};

export const Title = ({ title, size }: TitlePropsType) => {
  return <StyledTitle fontSize={size}>{title}</StyledTitle>;
};

export const StyledTitle = styled.h2<StyledTitlePropsType>`
  font-weight: 600;
  font-size: ${(props) => props.fontSize || "30px"};
  color: #fff;
`;
