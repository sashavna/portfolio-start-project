import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/FlexWrapper'
import { theme } from '../../styles/Theme'
import { SocialMediaFooter } from './socialMediaFooter/SocialMediaFooter'
import { font } from '../../styles/common'

export const Footer = () => {
  return (
    <StyledFooter>
        <FlexWrapper direction='column' align='center'>
            <Name>Sviatlana</Name>
            <SocialMediaFooter></SocialMediaFooter>
            <Copyright>© 2024 Sviatlana Kastrykina, All Rights Reserved.</Copyright>
        </FlexWrapper>
    </StyledFooter>
  )
}
const StyledFooter = styled.footer `
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
    position: relative;
`


const Name = styled.span `
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmin: 16, Fmax: 22})}
    letter-spacing: 0.14em;
`
const Copyright = styled.small `
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`