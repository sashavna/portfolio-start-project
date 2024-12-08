import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { Button } from "../../../components/Button"
import { Link } from "../../../components/Link"

const Project = styled.div `
    /* width: 330px;
    flex-grow: 1; */
    background-color: ${theme.colors.secondaryBg};


    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    /* @media ${theme.media.desktop} {
        max-width: 540px;
    } */
`
const ImageWrapper = styled.div `
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        transition: ${theme.animation.transition};

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        backdrop-filter: blur(8px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: ${theme.animation.transition};
    }

    &:hover {
        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }

        &::before {
            opacity: 1;
        }
    }

    @media ${theme.media.tablet} {
        ${Button} {
            opacity: 1;
        }

        &::before {
            opacity: 1;
        }
    }

`
const Description = styled.div `
    padding: 25px 20px;
`

const Image = styled.img `
width: 100%;
height: 260px;
object-fit: cover;
`

const ProjectTitle = styled.h3 `

`
const ProjectText = styled.p `
    margin: 14px 0 10px;

`
export const S = {
    Project,
    ImageWrapper,
    Description,
    Image,
    ProjectTitle,
    ProjectText
}