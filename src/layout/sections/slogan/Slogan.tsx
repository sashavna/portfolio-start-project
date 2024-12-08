import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import styled from 'styled-components'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'

export const Slogan = () => {
  return (
    <StyledSlogan>
        <Container>
            <FlexWrapper direction='column' align='center'>
                <SectionTitle>I Am Available For Freelance</SectionTitle>
                <Button>Hire me</Button>
            </FlexWrapper>
        </Container>
    </StyledSlogan>
  )
}
const StyledSlogan = styled.section `
background-color: #c18cb3;
min-height: 50vh;
`