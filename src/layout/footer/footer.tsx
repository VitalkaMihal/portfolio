import styled from "styled-components";
import { Contacts } from "../../components/contacts/contacts";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledContactMe>
          <StyledCallMe>
            <div>Call me:</div>
            <div>
              <StyledCallMeA href=""> 123-456-789</StyledCallMeA>
            </div>
          </StyledCallMe>
          <StyledCallMe>
            <div>Email:</div>
            <div>
              <StyledCallMeA href=""> xxx@xyz.com</StyledCallMeA>
            </div>
          </StyledCallMe>
        </StyledContactMe>

        <Contacts />
      </StyledFooterContainer>
    </StyledFooter>
  );
};

export const StyledContactMe = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const StyledCallMe = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #fff;
`;
export const StyledCallMeA = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const StyledFooterContainer = styled.div`
  margin: 25px 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledFooter = styled.footer`
  background-color: #0f1624;
  display: flex;
`;
