import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'

export const SocialMedia = () => {
  return (
    <StyledSocialMedia>
        <a href=''>
            <Icon iconId={'linkedin'}/>
        </a>
        <a href=''>
            <Icon iconId={'vk'}/>
        </a>
        <a href=''>
            <Icon iconId={'telegram'}/>
        </a>
    </StyledSocialMedia>
  )
}

const StyledSocialMedia = styled.div `

`
