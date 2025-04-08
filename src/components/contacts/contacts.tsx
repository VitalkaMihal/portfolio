import React from "react";
import styled from "styled-components";
import logoGit from "../../assets/logo/IconGit.png";
import linkedin from "../../assets/logo/Linkedin.png";
import telegram from "../../assets/logo/telegram.png";

export const Contacts = () => {
  return (
    <StyledContacts>
      <StyledUlContacts>
        <li>
          <StyledLogoA href="">
            <StyledContactLogo src={logoGit} alt="" />
          </StyledLogoA>
        </li>
        <li>
          <StyledLogoA href="">
            <StyledContactLogo src={linkedin} alt="" />
          </StyledLogoA>
        </li>
        <li>
          <StyledLogoA href="">
            <StyledContactLogo src={telegram} alt="" />
          </StyledLogoA>
        </li>
      </StyledUlContacts>
    </StyledContacts>
  );
};

export const StyledContacts = styled.div``;

export const StyledUlContacts = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 25px;
`;

export const StyledContactLogo = styled.img``;

export const StyledLogoA = styled.a``;
