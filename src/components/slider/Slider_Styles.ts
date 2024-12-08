import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Slider = styled.div `
max-width: 500px;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`
const Slide = styled.div `
text-align: center;

`
const Text = styled.p `

`
const Name = styled.span `
    font-family:  "Josefin Sans", sans-serif;;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: center;
    margin: 22px 0 28px;
    display: inline-block;
`
const Pagination = styled.div `
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }

        &.active {
            width: 20px;
            background-color: ${theme.colors.accent};
        }
    }
`
export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}