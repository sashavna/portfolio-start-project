import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/common"

const Main = styled.section `
    min-height: 100vh;
    background-color: #fffcbb;
    display: flex;
`
const PhotoWrapper = styled.div `
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
        width: 314px;
        height: 414px;
        top: -17px;
        left: 20px;
        }
    }

    @media ${theme.media.mobile} {
        margin-top: 65px;
    }
`

const Photo = styled.img `
    width: 350px;
    height: 430px;
    object-fit: cover;
    object-position: 80% 20%;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`
const MainTitle = styled.h1`
    color: #fff;
    ${font({weight: 400, Fmin: 20, Fmax: 27})};

    p {
        display: none;
    }

`
const NameSurname = styled.h2`
    ${font({family:'"Josefin Sans", sans-serif', weight: 700, Fmin: 30, Fmax: 40})};
    letter-spacing: 0.05em;
    margin-bottom: 10px;


    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content:'';
            display: inline-block;
            height: 20px;
            width: 100%;
            background-color: ${theme.colors.accent};
            position: absolute;
            top: 50%;
            z-index: -1;
        }
    }

    @media ${theme.media.mobile} {
        margin-bottom: 22px;
    }
`
export const S = {
    Main,
    PhotoWrapper,
    Photo,
    MainTitle,
    NameSurname

}