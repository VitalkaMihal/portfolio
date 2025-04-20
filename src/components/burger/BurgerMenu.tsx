import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {useEffect, useState} from "react";
import {Nav} from "../nav/Nav.tsx";
import {Contacts} from "../contacts/Contacts.tsx";


export const BurgerMenu = () => {
        const [menuIsOpen, setMenuIsOpen] = useState(false);
        const onBurgerClick = () => {
            setMenuIsOpen(!menuIsOpen)
        }

        useEffect(() => {
            if (menuIsOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return () => {
                document.body.style.overflow = '';
            };
        }, [menuIsOpen]);

        return <>
            <StyledBurgerButton isOpen={menuIsOpen} onClick={onBurgerClick}><span></span></StyledBurgerButton>
            <StyledMenu isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Nav/>
                <Contacts/>
            </StyledMenu>
        </>
    }
;

const StyledBurgerButton = styled.button<{ isOpen: boolean }>`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
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
        transition-duration: 0.3s;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
            transition-duration: 0.3s;
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            transition-duration: 0.3s;
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg);
                transition-duration: 0.3s;
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
            transition-duration: 0.3s;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg);
                width: 36px;
                transition-duration: 0.3s;
            `}
        }
    }
`
const StyledMenu = styled.div<{ isOpen: boolean }>`
    padding-top: 50px;
    width: 100%;
    height: calc(100vh - 100px);
    flex-direction: column;
    justify-items: center;
    z-index: 9999;
    overflow: hidden;
    background-color: ${theme.colors.secondaryBg};
    gap: 20px;
    display: none;
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: block;
    `}
`