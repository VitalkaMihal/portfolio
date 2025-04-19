import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Nav} from "../../components/nav/Nav.tsx";
import {Contacts} from "../../components/contacts/Contacts.tsx";
import {WrapperContainer} from "../../components/wrapper/WrapperContainer.tsx";
import {theme} from "../../styles/Theme.ts";
import {BurgerButton} from "../../components/buttons/BurgerButton.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <WrapperContainer>
                <StyledHeaderContent>
                    <Logo/>
                    <StyledHeaderMenu>
                    <Nav/>
                    <Contacts/>
                    </StyledHeaderMenu>
                </StyledHeaderContent>
                <BurgerButton/>
            </WrapperContainer>
        </StyledHeader>
    );
};

const StyledHeaderContent = styled.div`
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
`;


const StyledHeaderMenu = styled.div`
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    @media ${theme.media.tablet}{
        display: none;
    } 
    
`

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    position: fixed;
    width: 100%;
`;
