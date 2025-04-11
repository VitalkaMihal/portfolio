import logo from "../../assets/logo/logo (1).svg";
import styled from "styled-components";

export const Logo = () => {
  return (
    <div>
      <StyledLogo src={logo} alt="" />
    </div>
  );
};

export const StyledLogo = styled.img``;
