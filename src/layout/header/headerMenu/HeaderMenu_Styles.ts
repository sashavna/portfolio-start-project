import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

// menu
const ListItem = styled.li `
    position: relative;
`

const Mask = styled.span `
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accent};
    transition: ${theme.animation};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const NavLink = styled(Link)`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: transparent;

    &::before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -5px;
        right: -5px;
        z-index: 1;

        transform: scale(0);
        transition: ${theme.animation};
    }

    &:hover, &.active {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skew(12deg) translate(5px);
            color: ${theme.colors.font};


            & + ${Mask} {
            transform: skew(12deg) translate(-5px);
        }
        }
    }

`

// desktop
const DesktopMenu = styled.nav `
    ul {
        display: flex;
        gap: 40px;
        justify-content: center;
    }

`
// mobile
const MobileMenu = styled.nav `
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        gap: 40px;
        flex-direction: column;
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999999;

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
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

export const S = {
    DesktopMenu,
    NavLink,
    Mask,
    ListItem,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup
}