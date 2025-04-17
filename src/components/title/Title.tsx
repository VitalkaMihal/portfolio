import styled from "styled-components";

type TitlePropsType = {
  title?: string;
  size?: string;
  top?: string;
  bottom?: string;
};

export const Title = ({ title, size, top, bottom }: TitlePropsType) => {
  return <StyledTitle size={size} top={top} bottom={bottom}>{title}</StyledTitle>;
};

export const StyledTitle = styled.h2<TitlePropsType>`
  font-weight: 600;
  font-size: ${(props) => props.size || "30px"};
  margin-top:${(props) => props.top || "40px"}; 
  margin-bottom: ${(props) => props.bottom || "20px"};
`;
