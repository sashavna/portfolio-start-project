import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Icon } from '../../../components/icon/Icon'
import { Slider } from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { IconWrapper } from '../skills/skill/Skill'
import { Container } from '../../../components/Container'

export const Testimony = () => {
  return (
    <StyledTestimony id='testimony'>
        <Container>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction='column' align='center'>
                <IconWrapper>
                    <Icon iconId='quote'/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </Container>
    </StyledTestimony>
  )
}

const StyledTestimony = styled.section `
    min-height: vh;
    background-color: #b1b0f4;
    position: relative;

    ${IconWrapper} {
        margin: 32px 0 72px;

    }
`