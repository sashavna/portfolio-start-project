import React from 'react'
import styled from 'styled-components'
import { SocialMedia } from '../../../components/socialMedia/SocialMedia'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Footer = () => {
  return (
    <StyledFooter>
        <FlexWrapper direction='column' align='center'>
            <Name>Sviatlana</Name>
            <SocialMedia></SocialMedia>
            <Copyright>© 2024 Sviatlana Kastrykina, All Rights Reserved.</Copyright>
        </FlexWrapper>
    </StyledFooter>
  )
}
const StyledFooter = styled.footer `
    min-height: 20vh;
    background-color: #b0b0b0;
`
const Name = styled.span `

`
const Copyright = styled.small `
`