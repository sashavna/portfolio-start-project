import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import styled from 'styled-components'
import { Button } from '../../../components/Button'

export const Slogan = () => {
  return (
    <StyledSlogan>
        <SectionTitle>I Am Available For Freelance</SectionTitle>
        <Button>Hire me</Button>
    </StyledSlogan>
  )
}
const StyledSlogan = styled.section `
background-color: #c18cb3;
min-height: 50vh;
`