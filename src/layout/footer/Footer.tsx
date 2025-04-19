import styled from "styled-components";
import { Contacts } from "../../components/contacts/Contacts.tsx";
import { WrapperContainer } from "../../components/wrapper/WrapperContainer.tsx";
import {theme} from "../../styles/Theme.ts";

export const Footer = () => {
  return (
    <StyledFooter>
      <WrapperContainer>
      <StyledFooterContainer>
        <StyledContactMe>
          <StyledCallMe>
            <div>Call me:</div>
            <div>
              <StyledCallMeA href=""> 123-456-789</StyledCallMeA>
            </div>
          </StyledCallMe>
          <StyledCallMe>
            <span>Email:</span>
              <StyledCallMeA href=""> xxx@xyz.com</StyledCallMeA>
          </StyledCallMe>
        </StyledContactMe>

        <Contacts />
      </StyledFooterContainer>
      </WrapperContainer>
    </StyledFooter>
  );
};

export const StyledContactMe = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const StyledCallMe = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 22px;
`;
export const StyledCallMeA = styled.a`
  text-decoration: none;
`;

export const StyledFooterContainer = styled.div`
  margin: 25px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  @media ${theme.media.mobile} {
    justify-content: center;
  }
`;

export const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  display: flex;
`;
