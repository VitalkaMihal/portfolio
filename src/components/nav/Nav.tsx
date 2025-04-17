import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <li>
          <StyledA href="">Projects</StyledA>
        </li>
        <li>
          <StyledA href="">Technologies</StyledA>
        </li>
        <li>
          <StyledA href="">About me</StyledA>
        </li>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav``;

const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 80px;
  @media ${theme.media.desktop} {
    gap: 35px;
  }
  @media ${theme.media.tablet} {
    flex-direction: column;
    gap: 45px;
    margin-top: 25px;
    margin-bottom: 75px;
  }
`;

const StyledA = styled.a`
  font-weight: 500;
  font-size: 16px;
`;
