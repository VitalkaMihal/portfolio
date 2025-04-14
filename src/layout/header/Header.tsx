import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Nav} from "../../components/nav/nav";
import {Contacts} from "../../components/contacts/contacts";
import {WrapperContainer} from "../../components/wrapper/WrapperContainer.tsx";
import {theme} from "../../styles/theme.ts";

export const Header = () => {
    return (
        <StyledHeader>
            <WrapperContainer>
                <StyledHeaderContent>
                    <Logo/>
                    <Nav/>
                    <Contacts/>
                </StyledHeaderContent>
            </WrapperContainer>
        </StyledHeader>
    );
};

export const StyledHeaderContent = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
`;
