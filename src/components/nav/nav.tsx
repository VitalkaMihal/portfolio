import styled from "styled-components";

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

export const StyledNav = styled.nav``;

export const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 80px;
`;

export const StyledA = styled.a`
  font-weight: 500;
  font-size: 16px;
`;
