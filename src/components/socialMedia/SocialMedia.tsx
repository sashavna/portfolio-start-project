import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'


export const SocialMedia = () => {
  return (
    <StyledSocialMedia>
        <SocialList>
            <SocialItem>
                <SocialLink >
                    <Icon iconId={'linkedin'} height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink>
                    <Icon iconId={'vk'} height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} />
                </SocialLink>
            </SocialItem>
            <SocialItem>
            <SocialLink>
                <Icon iconId={'telegram'} height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'}/>
            </SocialLink>
            </SocialItem>
        </SocialList>
    </StyledSocialMedia>
  )
}

const StyledSocialMedia = styled.div `

`
const SocialList = styled.ul `
display: flex;
gap: 20px;
`
const SocialItem = styled.li `

`
const SocialLink = styled.a `

`