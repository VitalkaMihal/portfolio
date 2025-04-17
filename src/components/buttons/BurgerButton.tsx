import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const BurgerButton = () => {
    return <StyledBurgerButton isOpen={true}><span></span></StyledBurgerButton>
};

const StyledBurgerButton = styled.button<{isOpen: boolean}>`
    width: 200px;
    height: 200px;
    position: absolute;
    top: -100px;
    right: -100px;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};
    border: none;
    cursor: pointer;
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
        
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg);
        `}
        }
        
        &::after {
            content: "";
            display: block;
            width: 26px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg);
                width: 36px;
        `}
        }
        
    }
`