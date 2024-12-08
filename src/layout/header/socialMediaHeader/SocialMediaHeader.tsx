import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'


export const SocialMediaHeader = () => {
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
     @media ${theme.media.tablet} {
        display: none;
    }
`
const SocialList = styled.ul `
    display: flex;
    gap: 20px;

`
const SocialItem = styled.li `

`
const SocialLink = styled.a `
    color: rgba(255, 255, 255, 0.3);

    &:hover {
        color: ${theme.colors.accent};
    }
`