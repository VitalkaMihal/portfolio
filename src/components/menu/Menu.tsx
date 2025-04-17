import styled from "styled-components";
import {Nav} from "../nav/Nav.tsx";
import {Contacts} from "../contacts/Contacts.tsx";
import {theme} from "../../styles/Theme.ts";


export const Menu = () => {
    return (
        <StyledMenu>
            <Nav/>
            <Contacts/>
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
    padding-top: 50px;
    width: 100%;
    height: calc(100vh - 100px);
    flex-direction: column;
    justify-items: center;
    z-index: 9999;
    overflow: hidden;
    background-color: ${theme.colors.secondaryBg};
    gap: 20px;
    //display: none;
`